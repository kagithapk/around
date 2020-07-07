import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-vector-icons';
import { Icon } from 'react-native-elements';

const PostCreateScreen = () => {
  return (
    <View>
      <Text> Welcome to PostScreen </Text>
    </View>
  );
};

PostCreateScreen.navigationOptions = {
  title: 'Post',
  tabBarIcon: <Icon name="pluscircle" type="antdesign" size={24} color="black" />,
};

const styles = StyleSheet.create({

});


export default PostCreateScreen;
