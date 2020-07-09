
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
            console.log(post);
            if (post.postLikedByYou){
              return {...post, likesCount: post.likesCount - 1, postLikedByYou: false };
            }
            else {
              return {...post, likesCount: post.likesCount + 1, postLikedByYou: true };
            }
          }
          return post;
        });
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
            commentCount: newComments.length,
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
    const response = await aroundApi.get('post-details');
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
  dispatch({ type: 'addLike', payload: id });
  const response = await aroundApi.post('like-action', {postId: id});
};

const addComment = (dispatch) => async({ userId, userName, userImage, postId, comment }) => {
  const response = await aroundApi.post('add-comment', { postId, comment });
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
