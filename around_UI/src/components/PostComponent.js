import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import 'react-native-vector-icons';
import { Context as PostDataContext} from '../context/PostDataContext';

const PostComponent = ({ item, navigation }) => {
  const { addLike } = useContext(PostDataContext);
  return (
    <View style = { styles.postCard }>
      <View style = { styles.userInfo}>
        <Image
          style = {styles.userImage}
          source = {{uri: item.userImage}}
        />
        <Text style = {styles.name}>{item.name}</Text>
      </View>
      <Text style = {styles. heading}>{item.postHeading}</Text>
      <Text style = {styles. userInfo}>{item.postInfo}</Text>
      <View style={styles.actionInfo}>
        <TouchableOpacity style = {styles.checkLikes}>
          <Text style = {styles.likeCount}>{item.likesCount} Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.checkLikes}>
          <Text style = {styles.likeCount}> . {item.commentCount} Comments </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.userActions}>
        <TouchableOpacity style = {styles.likeAction} onPress={ ()=> addLike(item.id) }>
          <Icon style = {styles.likeIcon} name="like1" type="antdesign" size={22} color="black" />
          <Text style = { styles.likeButton }>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.likeComment} onPress={ () => navigation.navigate('LikesScreen')}>
          <Icon style = {styles.commentIcon} name="comment" type="fontisto" size={17} color="black" />
          <Text style= { styles.commentButton }>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
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
    paddingHorizontal: 2,
    paddingVertical: 4,
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
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 18,
    paddingHorizontal:8,
    paddingBottom: 8,
  },
});

export default PostComponent;
