/**
 * SearchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  usersBasicDetails: async (req, res) => {

    const data = await sails.models['users'].find();

    console.log(data);

    return res.send(data);
  },

};

