/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import SearchComponent from '../components/SearchComponent';
import { Context as SearchContext } from '../context/SearchContext';
import SearchProfileComponent from '../components/SearchProfileComponent';

const SearchScreen = ({ navigation }) => {
  const { state, getUsers, searchUsers } = useContext(SearchContext);
  const { users, searchList, searchText, showList, fromIndex, toIndex } = state;

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, []);

  return (
    <FlatList
      data={showList}
      keyExtractor={(user) => user.id}
      renderItem={({ item }) => {
        return (
          <SearchProfileComponent profile={item} navigation={navigation} />
        );
      }}
      horizontal={false}
      numColumns={2}
      ListFooterComponent={() => {
        if (searchList.length && searchList.length >= toIndex) {
          return (
            <TouchableOpacity
              style={styles.loadMore}
              onPress={() => searchUsers(users, showList, searchText, fromIndex, toIndex, false)}
            >
              <Text style={styles.loadText}>Load more</Text>
            </TouchableOpacity>
          );
        }
        return null;
      }}
    />
  );
};

SearchScreen.navigationOptions = () => {
  return {
    headerTitle: () => <SearchComponent />,
    headerStyle: {
      backgroundColor: '#59B8F1',
    },
  };
};

const styles = StyleSheet.create({
  loadMore: {
    color: 'blue',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    marginHorizontal: 15,
    alignItems: 'center',
  },
  loadText: {
    color: 'blue',
  },
});

export default SearchScreen;
