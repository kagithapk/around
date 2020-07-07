
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
  dispatch({type: 'addLike', payload:id});
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    fetchPostsData,
    createPostsData,
    addLike,
  },
  { postDetails: []},
);
