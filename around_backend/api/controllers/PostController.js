/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  savePosts: async(req, res) => {
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
      return res.send(postData);

    } catch(err) {
      res.status(400);
      return res.send(err);
    }

  },

  likesAction: async(req, res) => {

    const { userName, userId } = req.user;
    const { postId } = req.body;

    // checking whether the user already liked the post or not
    const postData = await sails.models['posts'].findOne({id: postId});
    const  { postLikes } = postData;
    var liked;
    console.log(postLikes);
    for (var key in postLikes) {
      console.log(postLikes.userId);
      if(postLikes[key].userId === userId) {
        liked = 1;
        return null;
      }
    }
    console.log('liked = ' + liked);

    if(!liked) {
      console.log('NOT LIKED');
      const data = {};
      data['userId'] = userId;
      data['userName'] = userName;
      var updatedLike = await sails.models['posts'].updateOne({id: postId}).set({postLikes: data} );
      return res.send(updatedLike);
    } else if(liked) {
      console.log('LIKED');
      // if the post is already liked it should be deleted;
      const updatedData = postData.postLikes.map( (post) => {
        if(post.userId === userId) {
          return null;
        }
        return post;
      });
      var deletedLike = await sails.models['posts'].updateOne({id: postId}).set({postLikes: updatedData} );
      return res.send(deletedLike);
    }
  },

  commentAction: async (req, res) => {
    const { userName, userId } = req.user;
    const { comment, postId } = req.body;

    // if no comment or no postId in req.body
    if(!comment || !postId) {
      res.status(400);
      return res.send('You need to provide comment and postId');
    }

    // comments to post: postId
    const comments= [];
    // comment data
    const commentData = {
      userName,
      userId,
      comment,
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
    } catch(err) {
      res.status(500);
      return res.send('Cannot update, contact the admin.');
    }

    // success!!!
    res.status(201);
    return res.send('Comment updated.');
  },

};

