import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import 'react-native-vector-icons';
import { Context as PostDataContext } from '../context/PostDataContext';

const PostComponent = ({ item, navigation }) => {
  const { addLike } = useContext(PostDataContext);
  const navigateToPostScreen = (openComment) => {
    navigation.navigate('PostScreen', {
      post: item,
      openForComment: openComment,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => navigateToPostScreen(false)}>
      <View style = { styles.postCard }>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', {searchUserId: item.userId})}>
          <View style = { styles.userInfo}>
            <Image
              style={styles.userImage}
              source={{ uri: item.userImage }}
            />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.postTime}>{item.postTime}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.heading}>{item.postHeading}</Text>
        <Text style={styles.userInfo}>{item.postInfo}</Text>
        <View style={styles.actionInfo}>
          <TouchableOpacity style={styles.checkLikes} onPress={() => navigateToPostScreen(false)}>
            <Text style={styles.likeCount}>{item.likesCount} Likes</Text>
            <Text style={styles.likeCount}> . {item.commentCount} Comments </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userActions}>
          <TouchableOpacity style={styles.likeAction} onPress={() => addLike(item.id)}>
            <Icon style={styles.likeIcon} name="like1" type="antdesign" size={22} color={item.postLikedByYou ? '#59B8F1' : 'black'} />
            <Text style={[styles.likeButton, { color: item.postLikedByYou ? '#59B8F1' : 'black' }]}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeComment} onPress={() => navigateToPostScreen(true)}>
            <Icon style={styles.commentIcon} name="comment" type="fontisto" size={17} color="black" />
            <Text style={styles.commentButton}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 7,
  },
  userActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postCard: {
    marginVertical: 2,
    borderColor: 'grey',
    borderWidth: 2,
    elevation: 1,
    marginHorizontal: 4,
    paddingVertical: 4,
    paddingHorizontal: 7,
  },
  actionInfo: {
    flexDirection: 'row',
  },
  checkLikes: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 8,
  },
  likeComment: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 4,
  },
  likeAction: {
    display: 'flex',
    flexDirection: 'row',
  },
  likeButton: {
    fontSize: 18,
  },
  likeCount: {
    fontSize: 18,
  },
  likeIcon: {
    color: 'blue',
  },
  commentIcon: {
    color: 'blue',
    paddingRight: 4,
    marginTop: 4,
  },
  commentButton: {
    fontSize: 18,
  },
  userImage: {
    height: 45,
    width: 45,
    borderRadius: 100,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 18,
    paddingBottom: 8,

  },
  postTime: {
    fontSize: 12,
    marginLeft: 7,
  },
});

export default PostComponent;
