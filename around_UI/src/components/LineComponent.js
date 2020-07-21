import React from 'react';
import {View, StyleSheet} from 'react-native';

const LineComponent = () => {
  return (
    <View style = {styles.borderLine}/>
  );
};

const styles = StyleSheet.create({
  borderLine: {
    backgroundColor: 'grey',
    height: 2,
    marginHorizontal: 20,
  },
});

export default LineComponent;
