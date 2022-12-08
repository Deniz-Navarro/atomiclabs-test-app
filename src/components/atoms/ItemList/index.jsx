import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ItemList = props => {
    const {name} = props;
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 350,
        padding: 15,
        margin: 20,
        backgroundColor: '#2E70BA',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    },
    image: {
        margin: 10,
        width: 120,
        height: 120,
    },
});

export default ItemList;