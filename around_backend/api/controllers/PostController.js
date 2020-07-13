/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var moment = require('moment');
module.exports = {

  postDetails: async (req, res) => {
    let postDetails = [];
    const data = await sails.models['posts'].find();
    const requestedUserId = req.user.userId;

    // iterating through all the posts of all users
    for (let key in data) {
      let postLike = false;
      // getting userdetails
      var userData = await sails.helpers.userDetails(data[key].userId);

      // getting likes and comments count
      const likes = data[key].postLikes ? data[key].postLikes.length : 0;
      const comments = data[key].postComments ? data[key].postComments.length : 0;

      // creating likes data structure && checking whether the post is liked by the requested user
      for (var like in data[key].postLikes) {
        var likesData = await sails.helpers.userDetails(data[key].postLikes[like].userId);
        data[key].postLikes[like]['userImage'] = likesData.userImage;
        data[key].postLikes[like]['id'] = like.toString();
        if (data[key].postLikes[like].userId === requestedUserId) {
          postLike = true;
        }
      }

      // creating comments data structure
      for (var comment in data[key].postComments) {
        var commentsData = await sails.helpers.userDetails(data[key].postComments[comment].userId);
        data[key].postComments[comment]['userImage'] = commentsData.userImage;
        data[key].postComments[comment]['time'] = moment(data[key].postComments[comment].commentTime).format('ll');
        data[key].postComments[comment]['id'] = comment.toString();
      }

      // creating response structure
      postDetails.push({
        id: data[key].id,
        name: data[key].userName,
        postHeading: data[key].postHead,
        postInfo: data[key].postInfo,
        postLikes: data[key].postLikes ? data[key].postLikes : 0,
        postComments: data[key].postComments ? data[key].postComments : 0,
        userImage: userData.userImage,
        postTime: moment(data[key].postTime).format('lll'),
        likesCount: likes,
        commentCount: comments,
        postLikedByYou: postLike,
        timeSort: data[key].postTime
      });
    }

    // if there are no postDetails
    if (postDetails.length === 0) {
      res.status(204);
      return res.send('No data available');
    }

    // Sorting the postDetails data based on postTime
    postDetails = postDetails.sort(
      (a, b) => moment(b.timeSort) - moment(a.timeSort)
    );
    return res.send(postDetails);
  },

  savePosts: async (req, res) => {
    console.log("save post", req.body);
    const userId = req.user.userId;
    const userName = req.user.userName;
    req.body.userId = userId;
    req.body.userName = userName;

    // getting currrent timestamp and adding into the request body
    var currentDate = new Date();
    var currentTime = currentDate.getTime();
    req.body.postTime = currentTime;

    try {
      // trimming extra spaces
      req.body.postInfo.trim();
      // creating data in post model
      const postData = await sails.models['posts'].create(req.body).fetch();
      console.log('post data');
      return res.send(postData);

    } catch (err) {
      res.status(400);
      return res.send(err);
    }

  },

  likesAction: async (req, res) => {

    // checking whether there is postId in request
    if (!req.body.postId) {
      res.status(400);
      return res.send('There is no Post to like or dislike');
    }

    const { userName, userId } = req.user;
    const { postId } = req.body;

    // checking whether the user already liked the post or not
    const postData = await sails.models['posts'].findOne({ id: postId });

    // checking whether there is a post for given postId or not
    if (!postData) {
      res.status(400);
      return res.send('There are no Post details for this postId');
    }

    // destructuring only likes from postData
    const { postLikes } = postData;

    // checking whether the user already liked the post or not.
    var liked;
    for (var key in postLikes) {
      if (postLikes[key].userId === userId) {
        liked = 1;
        break;
      }
    }

    // if the user didn't like the post
    if (!liked) {
      const likesArray = [];
      const data = {};
      data['userId'] = userId;
      data['userName'] = userName;
      likesArray.push(data);

      // merging previous likes with present likes
      let updatedData;

      if (postLikes) {
        updatedData = [...postLikes, data];
      } else {
        updatedData = [data];
      }

      var updatedLike = await sails.models['posts'].updateOne({ id: postId }).set({ postLikes: updatedData });
      return res.send(updatedLike);
    } else if (liked) {
      // if the post is already liked it should be deleted;
      const updatedData = postLikes.map((post) => {
        if (post.userId === userId) {
          return;
        }
        return post;
      });
      var deletedLike = await sails.models['posts'].updateOne({ id: postId }).set({ postLikes: updatedData });
      return res.send(deletedLike);
    }
  },

  commentAction: async (req, res) => {
    const { userName, userId } = req.user;
    const { comment, postId } = req.body;

    // if no comment or no postId in req.body
    if (!comment || !postId) {
      res.status(400);
      return res.send('You need to provide comment and postId');
    }

    // getting currrent timestamp and adding into the request body
    var currentDate = new Date();
    var currentTime = currentDate.getTime();
    const commentTime = currentTime;

    // comments to post: postId
    const comments = [];
    // comment data
    const commentData = {
      userName,
      userId,
      comment,
      commentTime
    };

    comments.push(commentData);
    // post data
    const data = await sails.models['posts'].findOne({ id: postId });

    if (!data) {
      res.status(404);
      res.send('There is no requested post.');
    }

    let commentsFromDB;

    if (data.postComments) {
      commentsFromDB = [...data.postComments, commentData];
    } else {
      commentsFromDB = [commentData];
    }

    try {
      const updatedData = await sails.models['posts'].updateOne({ id: postId })
        .set({ postComments: commentsFromDB });

      console.log(updatedData);
      if (!updatedData) {
        res.status(500);
        return res.send('Cannot update, there is no requested post.');
      }
    } catch (err) {
      res.status(500);
      return res.send('Cannot update, contact the admin.');
    }

    // success!!!
    res.status(201);
    return res.send('Comment updated.');
  },

};

