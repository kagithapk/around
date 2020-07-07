import React, { useContext } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import 'react-native-vector-icons';
import { Icon } from 'react-native-elements';

const SettingsScreen = () => {
  const { state, signOut } = useContext(AuthContext);
  const { token, name, photo, email } = state;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      {photo ? <Image source={{ uri: photo }} style={styles.profile} /> : null}
      <TouchableOpacity
        onPress={signOut}
      >
        <Text style={styles.logOutButton}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

SettingsScreen.navigationOptions = {
  title: 'Profile',
  tabBarIcon: <Icon name="account-circle"  size={24} color="black" />,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  logOutButton: {
    fontSize: 20,
    marginVertical: 20,
    borderWidth: 1,
    color: 'blue',
    borderColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
});

export default SettingsScreen;
