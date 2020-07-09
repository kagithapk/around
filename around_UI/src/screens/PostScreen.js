import React, { useState, useContext } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import CommentComponent from '../components/CommentComponent';
import { Context as PostContext } from '../context/PostDataContext';
import { Context as AuthContext } from '../context/AuthContext';

const PostScreen = ({ navigation }) => {
  const [comment, setComment] = useState('');
  const post = navigation.getParam('post');
  const { state, addComment } = useContext(PostContext);
  const userData = useContext(AuthContext);
  console.log(userData, 'userData');
  const user = userData.state;
  const { id } = post;
  console.log(state, id);
  const selectedPost = state.postDetails.filter((postIteration) => postIteration.id === id);
  console.log(selectedPost);
  const { name, userImage, postHeading, postInfo, likesCount, commentCount, postComments } = selectedPost[0];


  const headerComponent = () => {
    return (
      <View>
        <View style={styles.profileContainer}>
        <Image
          style={styles.userImage}
          source={{ uri: userImage }}
        />
        <Text style={styles.userName}>{name}</Text>
      </View>
      <View style={styles.postDetailsContainer}>
        <Text style={styles.postHeading}>{postHeading}</Text>
        <Text style={styles.postInfo}>{postInfo}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.likeContainer} onPress={() => navigation.navigate('LikesScreen')}>
            <Icon style = {styles.likeIcon} name="like1" type="antdesign" size={22} color="blue" />
            <Text>{likesCount} likes</Text>
          </TouchableOpacity>
          <Text>{commentCount} comments</Text>
        </View>
        <View>
          <Text style={styles.commentHeader}>Comments</Text>
        </View>
      </View>
      </View>
    );
  };

  const footerComponent = () => {
    return (
      <View style={styles.footer}>
        <View>
          {(!postComments || !postComments.length) ? <Text style={styles.noComment}>Be the first to comment...</Text> : null}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.postContainer}>
      <FlatList
        data={postComments}
        keyExtractor={(comment) => comment.id}
        renderItem={({ item }) => {
          return (
            <CommentComponent comment={item} />
          );
        }}
        ListHeaderComponent={headerComponent()}
        ListFooterComponent={footerComponent()}
      />
      <View style={styles.commentBar}>
        <Image
          style={styles.commentUserImage}
          source={{ uri: userImage }}
        />
        <TextInput
          value={comment}
          onChangeText={(val) => setComment(val)}
          style={styles.commentInput}
          placeholder="Leave your thoughts here..."
          multiline
        />
        <TouchableOpacity onPress={() => {
          if (comment) {
            addComment({ userId: user.id, userName: user.name, userImage: user.photo, postId: id, comment });
            setComment('');
          }
        }}>
          <Icon name="send" type="feather" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  postDetailsContainer: {
    paddingHorizontal: 10,
  },
  postHeading: {
    fontSize: 20,
    fontWeight: '700',
  },
  postInfo: {
    fontSize: 18,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  likeContainer: {
    flexDirection: 'row',
  },
  likeIcon: {
    paddingRight: 4,
  },
  commentHeader: {
    fontSize: 16,
  },
  footer: {
    marginBottom: 60,
  },
  noComment: {
    textAlign: 'center',
    fontSize: 20,
  },
  commentBar: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 24,
  },
  commentUserImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  commentInput: {
    flex: 1,
    margin: 5,
  },
});

export default PostScreen;
