module.exports = {
  //To Display Top Performers.
  postDetails: async(req,res) => {
    let postDetails = [
      {
        id: '5f057f948a47fa3d8cc00713',
        name: 'Pranith Modem',
        postHeading: 'Hello India',
        postInfo: 'India is my country, all indians are my brothers and sisters',
        likesCount: 15,
        commentCount: 5,
        postLikedByYou: false,
        postLikes: [
          {
            'userId': '1012429115443296843043',
            'userName': 'pranith modem',
            'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
          },
          {
            'userId': '1126336486503415290462',
            'userName': 'pranith modem',
            'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
          },
          {
            'userId': '1012429115443296843041',
            'userName': 'pranith modem',
            'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
          },
          {
            'userId': '1012429115443296843043',
            'userName': 'pranith modem',
            'userImage': 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg',
          },
        ],
        postComments: [
          {
            id: '1',
            userId: 2,
            userName: 'Praveen Kanth',
            comment: 'This is nice man.',
            time: '5 hours ago',
            userImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          },
          {
            id: '2',
            userId: 2,
            userName: 'Praveen Kanth',
            comment: 'This is nice man.',
            time: '5 hours ago',
            userImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          },
          {
            id: '3',
            userId: 2,
            userName: 'Praveen Kanth',
            comment: 'This is nice man.',
            time: '5 hours ago',
            userImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          },
          {
            id: '4',
            userId: 2,
            userName: 'Praveen Kanth',
            comment: 'This is nice man.',
            time: '5 hours ago',
            userImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          },
          {
            id: '5',
            userId: 2,
            userName: 'Praveen Kanth',
            comment: 'This is nice man.',
            time: '5 hours ago',
            userImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          },
        ],
        userImage: 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg' 
      },
      {
        id: 2,
        name: 'Praveen Kanth',
        postHeading: 'Hello India',
        postInfo: 'Components render according to their order in the document tree, so later components draw over earlier ones. zIndex may be useful if you have animations or custom modal interfaces where you dont want this behavior',
        likesCount: 16,
        commentCount: 2,
        postLikedByYou: false,
        postComments: [
          {
            id: '1',
            userId: 1,
            userName: 'Pranith Modem',
            comment: 'This is nice man.',
            time: '5 hours ago',
            userImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          },
          {
            id: '2',
            userId: 1,
            userName: 'Pranith Modem',
            comment: 'This is nice man.',
            time: '5 hours ago',
            userImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          },
        ],
        userImage: 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg'
      },
      {
        id: 3,
        name: 'Prashanth Mogili',
        postHeading: 'Hello India',
        postInfo: 'Inida is my country, all indians are my brothers and sisters',
        postLikedByYou: false,
        likesCount: 17,
        commentCount: 0,
        postComments: null,
        userImage: 'https://lh3.googleusercontent.com/-H4vh04mVugU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmZK2w0f5StC4bWrp8pP2J_gEt-Sw/s96-c/photo.jpg'
      }
    ];
    res.json(postDetails);
  },

};
