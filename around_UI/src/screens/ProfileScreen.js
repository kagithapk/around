import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const name = navigation.getParam('name');

  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
