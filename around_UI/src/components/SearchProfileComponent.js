import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SearchProfileComponent = ({ profile, navigation }) => {
  const { name, picture, userId } = profile;

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', { id: userId, name })}>
        <View style={styles.innerProfileContainer}>
          <Image style={styles.userImage} source={{ uri: picture }} />
          <Text style={styles.userName}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 10,
    width: '50%',
  },
  innerProfileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    width: '100%',
    height: 200,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default SearchProfileComponent;
