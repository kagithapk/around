/**

 * Route Mappings

 * (sails.config.routes)

 *

 * Your routes tell Sails what to do each time it receives a request.

 *

 * For more information on configuring custom routes, check out:

 * https://sailsjs.com/anatomy/config/routes-js

 */



module.exports.routes = {

  /***************************************************************************

   *                                                                          *

   * Make the view located at `views/homepage.ejs` your home page.            *

   *                                                                          *

   * (Alternatively, remove this and add an `index.html` file in your         *

   * `assets` directory)                                                      *

   *                                                                          *

   ***************************************************************************/





  // To Approve activity request

  'GET /postdetails': {
    controller: 'DasboardController',
    action: 'postDetails',
  },

  // for post details
  'GET /post-details': {
    controller: 'PostController',
    action: 'postDetails',
  },

  // for saving the posts
  'POST /save-posts': {
    controller: 'PostController',
    action: 'savePosts',
  },

  // for actions performed on like button for posts
  'POST /like-action': {
    controller: 'PostController',
    action: 'likesAction',
  },

  // for comments on like button
  'POST /add-comment': {
    controller: 'PostController',
    action: 'commentAction',
  },

  // for all users basic data
  'GET /all-users-basic-data': {
    controller: 'SearchController',
    action: 'usersBasicDetails',
  },


  // for sending friend-requests
  'POST /send-friend-request' : {
    controller: 'FriendsController',
    action: 'sendFriendRequest',
  },

  // for fetching profile data
  'POST /profile-data' : {
    controller: 'ProfileController',
    action: 'profileData',
  }

  /***************************************************************************

   *                                                                          *

   * More custom routes here...                                               *

   * (See https://sailsjs.com/config/routes for examples.)                    *

   *                                                                          *

   * If a request to a URL doesn't match any of the routes in this file, it   *

   * is matched against 'shadow routes' (e.g. blueprint routes).  If it does  *

   * not match any of those, it is matched against static assets.             *

   *                                                                          *

   ***************************************************************************/

  //Dashboard Releated Calls



  // To get user timeline




};

