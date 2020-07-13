import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as PostContext } from '../context/PostDataContext';
import 'react-native-vector-icons';
import { Icon, Header } from 'react-native-elements';

const PostCreateScreen = () => {
  // User context
  const { state } = useContext(AuthContext);
  const { name, photo } = state;

  // Post Context
  const { createPostsData } = useContext(PostContext);

  const [postContent, setPostContent] = useState('');

  // Style classes
  const {
    container,
    header,
    headerText,
    headerRight,
    postButtonDisable,
    createPostBodyContainer,
    userContainer,
    userName,
    userPhoto,
    postInput,
  } = styles;

  // Header components
  const headerLeftJsx = (<Icon name="arrow-back" />);
  const headerTextJsx = (<Text style={headerText}>Create Post</Text>);
  const headerRightJsx = (
    <TouchableOpacity onPress={() => {
      createPostsData({ postHead: '', postInfo: postContent });
      setPostContent('');
    }} >
      <Text style={[headerRight, postContent ? null : postButtonDisable]}>post</Text>
    </TouchableOpacity>
  );

  return (
    <View style={container}>
      <Header
        placement="left"
        leftComponent={headerLeftJsx}
        centerComponent={headerTextJsx}
        rightComponent={headerRightJsx}
        containerStyle={header}
      />
      <View style={createPostBodyContainer}>
        <View style={userContainer}>
          {photo ? <Image source={{ uri: photo }} style={userPhoto} /> : null}
          <Text style={userName}>{name}</Text>
        </View>
        <TextInput
          style={postInput}
          value={postContent}
          multiline
          placeholder="What's on your mind?"
          onChangeText={setPostContent}
        // autoFocus={openForComment}
        />
      </View>
    </View>
  );
};

PostCreateScreen.navigationOptions = {
  title: 'Post',
  tabBarIcon: <Icon name="pluscircle" type="antdesign" size={24} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 3,
  },
  headerText: {
    fontSize: 20,
  },
  headerRight: {
    textTransform: 'uppercase',
    fontSize: 15,
  },
  postButtonDisable: {
    opacity: 0.6,
  },
  createPostBodyContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  userContainer: {
    flexDirection: 'row',
  },
  userPhoto: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 15,
  },
  userName: {
    fontSize: 22,
  },
  postInput: {
    // borderWidth: 1,
    marginTop: 6,
    fontSize: 23,
  }
});


export default PostCreateScreen;
