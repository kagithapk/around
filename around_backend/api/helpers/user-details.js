module.exports = {


  friendlyName: 'User details',


  description: '',


  inputs: {
    userId: {
      friendlyName: 'userId of the user to get the info',
      type: 'string'
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    // TODO
    const userId = inputs.userId;

    const currentUser = await sails.models['users'].findOne({userId});

    const userDetails = {
      userEmail: currentUser.email,
      userName: currentUser.name,
      userImage: currentUser.picture
    };

    if(!userDetails) {
      return 'No User Found';
    }

    return userDetails;
  }


};

