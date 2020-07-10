/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Context as SearchContext, SEARCH_LIMIT } from '../context/SearchContext';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const { state, searchUsers, resetSearchList } = useContext(SearchContext);
  const { users, showList } = state;

  useEffect(() => {
    if (searchText) {
      searchUsers(users, showList, searchText, 0, SEARCH_LIMIT, true);
    } else {
      resetSearchList();
    }
  }, [searchText]);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for friends..."
        value={searchText}
        onChangeText={(value) => {setSearchText(value)}}
      />
      <TouchableOpacity onPress={() => setSearchText('')}>
        <Icon name="cross" type="entypo" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    height: '90%',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    // color: 'white',
    backgroundColor: 'white',
  },
});

export default SearchComponent;
