import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

const LikesScreen = ({navigation}) => {
  const likesDetails = navigation.getParam('likesDetails');
  const renderJSX = () => {
    return likesDetails && likesDetails.length ? <FlatList
      data = { likesDetails }
      keyExtractor = { item => item.userId}
      renderItem = { ({item}) => {
        return (
          <View style = { styles.userLike }>
            <Image
              style = { styles.userImage }
              source = {{ uri: item.userImage }}
            />
            <Text style = { styles.userName }>{ item.userName }</Text>
          </View>
        );

      }}
    /> : <Text style = {styles.noLikes}>May be you can be the first to like </Text>;
  };

  return (
    <View style = {styles.likesScreen}>
      <Text style = {styles.totalLikes}>{likesDetails && likesDetails.length ? likesDetails.length : 0} Likes</Text>
      {renderJSX()}
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginRight: 8,
    marginVertical: 8,
  },
  userName: {
    fontSize: 20,
    textTransform: 'capitalize',
    borderTopWidth: 1,
    flex: 1,
    borderTopColor: 'grey',
    textAlignVertical: 'center',
  },
  likesScreen: {
    backgroundColor: 'white',
    flex: 1,
  },
  userLike: {
    display: 'flex',
    flexDirection: 'row',
    // marginVertical: 6,
    marginHorizontal: 4,
  },
  noLikes: {
    textAlign: 'center',
    color: 'red',
    fontSize: 22,
  },
  totalLikes: {
    fontSize: 17,
    marginLeft: 10,
    color: '#23A9FA',
    marginVertical: 4,
  },
});

export default LikesScreen;
