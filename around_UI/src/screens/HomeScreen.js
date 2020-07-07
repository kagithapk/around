import React, { useContext } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import 'react-native-vector-icons';
import { NavigationEvents } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Context as PostDataContext} from '../context/PostDataContext';
import PostComponent from '../components/PostComponent';

const HomeScreen = () => {

  const { state, fetchPostsData } = useContext(PostDataContext);
  return (
    <>
      <NavigationEvents onWillFocus = { fetchPostsData }/>
      <FlatList
        data = { state.postDetails }
        keyExtractor = {item => item.id.toString()}
        renderItem = { ({item}) => {
          return (
            <PostComponent item={item} />
          );
        }}
      />
    </>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home',
  tabBarIcon: <Icon name="home" type="antdesign" size={24} color="black" />,
};


const styles = StyleSheet.create({});

export default HomeScreen;
