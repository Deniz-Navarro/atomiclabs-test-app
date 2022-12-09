import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemList from '../../atoms/ItemList';

const CustomList = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <ItemList {...item} key={item.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    margin: 20,
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomList;
