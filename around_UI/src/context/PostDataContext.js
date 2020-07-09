
import aroundApi from '../api/route';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';

const INITIAL_STATE = {};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'fetchPostsData':
      return {
        ...state,
        postDetails: action.payload,
      };
    case 'createPostsData':
      return INITIAL_STATE;
    case 'addLike':
      const data =  state.postDetails.map( (post) => {
          if (post.id === action.payload) {
            console.log('IF ');

            return {...post, likesCount: post.likesCount + 1 };
          }
          return post;
        });
        console.log(data);
      return {
        ...state,
        postDetails: data,
      };
    case 'addComment':
      const dataComments = state.postDetails.map((post) => {
        if (post.id === action.payload.postId) {
          const newComments = [
            ...post.postComments,
            {
              id: (post.postComments.length + 1).toString(),
              userId: action.payload.userId,
              userName: action.payload.userName,
              comment: action.payload.comment,
              time: 'Just now',
              userImage: action.payload.userImage,
            },
          ];

          return {
            ...post,
            postComments: newComments,
          };
        }

        return post;
      });
      return {
        ...state,
        postDetails: dataComments,
      };
    default:
      return state;
  }
};

const fetchPostsData = (dispatch) => async() => {
  try {
    const response = await aroundApi.get('postdetails');
    console.log(response.data);
    dispatch({ type: 'fetchPostsData', payload: response.data });
  } catch (err) {
    console.log('Error in api call', err);
  }
};

const createPostsData = (dispatch) => async() => {
  const response = await aroundApi.get('postdetails');
  dispatch({ type: 'fetchPostsData', payload: response.data });
};

const addLike = (dispatch) => async(id) => {
  console.log('Added like');
  console.log(id);
  dispatch({ type: 'addLike', payload: id });
};

// userId: 2,
// userName: 'Praveen Kanth',
// comment: 'This is nice man.',
// time: '5 hours ago',
// userImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
const addComment = (dispatch) => async({ userId, userName, userImage, postId, comment }) => {
  dispatch({ type: 'addComment', payload: {
    userId,
    userName,
    userImage,
    postId,
    comment,
  } });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    fetchPostsData,
    createPostsData,
    addLike,
    addComment,
  },
  { postDetails: []},
);
