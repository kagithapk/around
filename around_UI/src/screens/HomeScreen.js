import React, { useContext } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import 'react-native-vector-icons';
import { NavigationEvents } from 'react-navigation';
import { View } from 'react-native';
import { Context as PostDataContext} from '../context/PostDataContext';
import PostComponent from '../components/PostComponent';

const HomeScreen = ({navigation}) => {

  const { state, fetchPostsData } = useContext(PostDataContext);
  return (
    <>
      <NavigationEvents onWillFocus = { fetchPostsData }/>
      <View style = {styles.homeScreen}>
      <FlatList
        data = { state.postDetails }
        keyExtractor = {item => item.id.toString()}
        renderItem = { ({item}) => {
          return (
            <PostComponent item={item} navigation={navigation} />
          );
        }}
      />
      </View>
    </>
  );
};

HomeScreen.navigationOptions = {
  title: 'around',
  headerStyle: {
    backgroundColor: '#59B8F1',
  },
  headerTitleStyle: {
    color: 'white',
  },
};


const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HomeScreen;
