import React, { useState, useContext } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import CommentComponent from '../components/CommentComponent';
import { Context as PostContext } from '../context/PostDataContext';
import { Context as AuthContext } from '../context/AuthContext';

const PostScreen = ({ navigation }) => {
  const [comment, setComment] = useState('');
  // const [toComment, setToComment] = useState(false);
  const post = navigation.getParam('post');
  const openForComment = navigation.getParam('openForComment');
  const { state, addComment, addLike } = useContext(PostContext);
  const userData = useContext(AuthContext);
  const user = userData.state;
  const userId = user.id;
  const userName = user.name;
  const userPhoto = user.photo;
  const { id } = post;
  const selectedPost = state.postDetails.filter((postIteration) => postIteration.id === id);
  const { name, userImage, postHeading, postInfo, likesCount, commentCount, postComments, postLikes, postLikedByYou, postTime } = selectedPost[0];



  const headerComponent = () => {
    return (
      <View>
        <View style={styles.profileContainer}>
          <Image
            style={styles.userImage}
            source={{ uri: userImage }}
          />
          <View style={styles.profile}>
            <Text style={styles.userName}>{name}</Text>
            <Text style = {styles.postTime}>{postTime}</Text>
          </View>
        </View>
        <View style={styles.postDetailsContainer}>
          <Text style={styles.postHeading}>{postHeading}</Text>
          <Text style={styles.postInfo}>{postInfo}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.likeContainer} onPress={() => navigation.navigate('LikesScreen', { likesDetails: postLikes })}>
              {/* <Icon style = {styles.likeIcon} name="like1" type="antdesign" size={22} color="blue" /> */}
              <Text>{likesCount} likes</Text>
            </TouchableOpacity>
            <Text>{commentCount} comments</Text>
          </View>
          <View style = {styles.userActions}>
            <TouchableOpacity style = {styles.likeAction} onPress={ ()=> addLike(id) }>
              <Icon style = {styles.likeIcon} name="like1" type="antdesign" size={22} color= {postLikedByYou ? '#59B8F1' : 'black'} />
              <Text style = { [styles.likeButton, {color: postLikedByYou ? '#59B8F1' : 'black'}] }>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.likeComment} >
              <Icon style = {styles.commentIcon} name="comment" type="fontisto" size={17} color="black" />
              <Text style= { styles.commentButton }>Comment</Text>
            </TouchableOpacity>
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
        keyExtractor={(commentIndividual) => commentIndividual.id}
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
          source={{ uri: userPhoto }}
        />
        <TextInput
          value={comment}
          onChangeText={(val) => setComment(val)}
          style={styles.commentInput}
          placeholder="Leave your thoughts here..."
          multiline
          autoFocus={openForComment}
        />
        <TouchableOpacity onPress={() => {
          if (comment) {
            addComment({ userId: userId, userName: userName, userImage: userPhoto, postId: id, comment });
            setComment('');
          }
        }}>
          <Icon name="send" type="feather" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// FOR HEADER TO BE USER DETAILS

// const HeaderBar = ({ navigation }) => {
//   const post = navigation.getParam('post');
//   const { state } = useContext(PostContext);
//   const { id } = post;
//   const selectedPost = state.postDetails.filter((postIteration) => postIteration.id === id);
//   const { name, userImage, postTime } = selectedPost[0];

//   return (
//     <View style={styles.profileContainer}>
//       <Image
//         style={styles.userImage}
//         source={{ uri: userImage }}
//       />
//       <View style={styles.profile}>
//         <Text style={styles.userName}>{name}</Text>
//         <Text style = {styles.postTime}>{postTime}</Text>
//       </View>
//     </View>
//   );
// };

PostScreen.navigationOptions = ({ navigation }) => {
  return {
      headerStyle: {
      backgroundColor: '#59B8F1',
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerTitle: '',
    // headerTitle: navigation.getParam('post').postHeading,
    // headerTitle: <HeaderBar navigation={navigation} />,
  };
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
  // likeIcon: {
  //   paddingRight: 4,
  // },
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
  userActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
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
  likeIcon: {
    color: 'blue',
    paddingLeft: 4,
  },
  commentIcon: {
    color: 'blue',
    paddingRight: 4,
    marginTop: 4,
  },
  commentButton: {
    fontSize: 18,
  },
  likeButton: {
    fontSize: 18,
  },
  postTime: {
    fontSize: 12,
    marginHorizontal: 10,
  },
});

export default PostScreen;
