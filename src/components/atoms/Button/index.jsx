import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
//Basic button
const Button = (props) => {
  const { text, onPress } = props;
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
  },
  text: {
    color: '#106BA2',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Button;
