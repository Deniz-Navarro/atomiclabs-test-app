import React from 'react';
import { Text, StyleSheet } from 'react-native';

//Component to show long texts.

const CustomText = (props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: '#EAE5E2',
  },
});

export default CustomText;
