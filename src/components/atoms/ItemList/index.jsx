import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Component to render all workers.
const ItemList = props => {
    const {name, position, avatar} = props;
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: avatar}} 
                style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text2}>{position}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 350,
        padding: 15,
        margin: 10,
        backgroundColor: '#2E70BA',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        padding: 5,
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
    text2: {
        color: '#E5E2E2',
        fontSize: 15,
    },
    image: {
        margin: 10,
        width: 100,
        height: 100,
    },
});

export default ItemList;