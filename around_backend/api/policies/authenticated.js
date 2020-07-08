const {OAuth2Client} = require('google-auth-library');
const {manifest} = require('../../manifest');
const CLIENT_ID = manifest.WebClientID;

module.exports = async (req, res, next) => {
  if(req.headers.authorization){
    const token = req.headers.authorization.replace('Bearer ', '');
    try {
      const client = new OAuth2Client(CLIENT_ID);
      const ticket = await client.verifyIdToken( {
        idToken: token,
        audience: CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const userId = payload['sub'];
      req['user'] = {
        userId: userId,
        userName: payload.name,
        userImage: payload.photo,
      };
      // checking whether the user logged for the first time, if not create info in user model
      const data = await sails.models['users'].find({userId});
      if(!data.length) {
        const userData = {};
        userData['userId'] = userId;
        userData['email'] = payload.email;
        userData['picture'] = payload.picture;
        userData['name'] = payload.name;
        await sails.models['users'].create(userData).fetch();
      }
      return next();
    } catch (err) {
      res.status(400);
      res.send('Error occurred in Login Process'+ err);
    }
  }
  else {
    res.send('You have to login to access this api');
  }

};
