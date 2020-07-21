/**
 * FriendsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  sendFriendRequest : async(req, res) => {

    const userId = req.user.userId;

    const requestTo = req.body.requestTo;

    // if the requestBy userId === requestTo userId
    if(userId === requestTo) {
      res.status('400');
      return res.send('cannot send request');
    }

    // creating friendsList data structure
    const data = {
      userId : userId,
      friendshipStatus : 0,
    };

    // getting the user friends list from the friends model
    const details = await sails.models['friends'].findOne({userId: requestTo});

    let friends = details ? details.friends : 0;
    let updatedList;
    // checking whether the user has friends or not  
    if(friends) {
      updatedList = [...friends, data];
    } else {
      updatedList = [data];
    }

    //if the user receives request for the first time. we need to create data in the friends model
    if(!details) {
      const createdData = await sails.models['friends'].create( { userId: requestTo, friends: updatedList } ).fetch();
      return res.send(createdData);
    }

    const updatedFriends = await sails.models['friends'].updateOne( { userId } ).set( { friends: updatedList } );

    return res.send(updatedFriends);
  }

};

