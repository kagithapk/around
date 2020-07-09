import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommentComponent = ({ comment }) => {
  return (
    <View style={styles.commentsContainer}>
      <View>
        <Image source={{ uri: comment.userImage  }} style={styles.commentsUserImage} />
      </View>
      <View style={styles.commentDataContainer}>
        <Text style={styles.commentName}>{comment.userName}</Text>
        <Text>{comment.time}</Text>
        <Text style={styles.commentText}>{comment.comment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  commentsUserImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginTop: 5,
  },
  commentDataContainer: {
    marginLeft: 10,
    backgroundColor: '#ccc',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  commentName: {
    fontWeight: 'bold',
  },
  commentText: {
    marginTop: 5,
  },
});

export default CommentComponent;
