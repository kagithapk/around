import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import LoginScreen from './src/screens/LoginScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import HomeScreen from './src/screens/HomeScreen';
import PostCreateScreen from './src/screens/PostCreateScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { Provider as PostDataProvider } from './src/context/PostDataContext';
import {
  GoogleSignin,
} from '@react-native-community/google-signin';
import { manifest } from './manifest';

const { WebClientID } = manifest;

GoogleSignin.configure({
  webClientId: WebClientID, // client ID of type WEB for your server(needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  Login: LoginScreen,
  mainScreen: createBottomTabNavigator({
    Home: HomeScreen,
    postScreen: PostCreateScreen,
    settings: SettingsScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <PostDataProvider>
      <AuthProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </PostDataProvider>
  );
};
