module.exports = {
  //To Display Top Performers.
  postDetails: async(req,res) => {
    let postDetails = [
      {
        id: 1,
        name: 'pranith modem',
        postHeading: 'Hello India',
        postInfo: 'India is my country, all indians are my brothers and sisters',
        likesCount: 15,
        commentCount: 3,
        userImage: 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg' 
      },
      {
        id: 2,
        name: 'praveen kanth',
        postHeading: 'Hello India',
        postInfo: 'Components render according to their order in the document tree, so later components draw over earlier ones. zIndex may be useful if you have animations or custom modal interfaces where you dont want this behavior',
        likesCount: 16,
        commentCount: 2,
        userImage: 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg'
      },
      {
        id: 3,
        name: 'prashanth mogili',
        postHeading: 'Hello India',
        postInfo: 'Inida is my country, all indians are my brothers and sisters',
        likesCount: 17,
        commentCount: 1,
        userImage: 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg'
      }
    ];
    res.json(postDetails);
  },

};
