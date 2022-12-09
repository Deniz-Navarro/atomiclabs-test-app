import React from 'react';
import { View, StyleSheet } from 'react-native';
//Component to show a circle
const Circle = (props) => {
  return (
    <View
      style={
        props.on
          ? [styles.container, { backgroundColor: '#FF6100' }]
          : styles.container
      }
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});

export default Circle;
