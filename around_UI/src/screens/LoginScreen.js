import React, { useContext } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import background from '../../public/images/imgBack.jpg';
import { Context as AuthContext } from '../context/AuthContext';
import {
  GoogleSigninButton,
} from '@react-native-community/google-signin';

const backgroundImage = background;
// image https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60

const LoginScreen = () => {
  const { state, signIn } = useContext(AuthContext);
  const { token } = state;

  return (
    <View style={styles.signViewTotal}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.signView}>
          <Text>Sign in With Google</Text>
          <GoogleSigninButton
            style={styles.GoogleSignButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </View>
      </ImageBackground>
      {token ? <Text>{token}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  signViewTotal: {
    flex: 1,
  },
  signView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleSignButton: {
    width: 192,
    height: 48,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default LoginScreen;
