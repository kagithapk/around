import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';

const INITIAL_STATE = {
  name: '',
  id: '',
  token: '',
  photo: '',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        ...action.payload,
      };
    case 'signOut':
      return INITIAL_STATE;
    default:
      return state;
  }
};

const localSignIn = (dispatch) => async () => {
  try {
    const userDataString = await AsyncStorage.getItem('token');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      dispatch({ type: 'signIn', payload: userData });
      navigate('Home');
    } else {
      navigate('Login');
    }
  } catch (err) {
    console.log(err);
    navigate('Login');
  }
};

const signIn = (dispatch) => async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);

    const userData = {
      id: userInfo.user.id,
      token: userInfo.idToken,
      name: userInfo.user.name,
      photo: userInfo.user.photo,
      email: userInfo.user.email,
    };

    await AsyncStorage.setItem('token', JSON.stringify(userData));
    dispatch({ type: 'signIn', payload: userData });
    navigate('Home');

  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log('Signin cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log('in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log('play services not');
    } else {
      // some other error happened
      console.log(error);
    }
  }
};

const signOut = (dispatch) => async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signOut' });
    navigate('Login');
  } catch (error) {
    console.error(error);
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    localSignIn,
    signIn,
    signOut,
  },
  {
    token: '',
    id: '',
    name: '',
    photo: '',
    email: '',
  },
);
