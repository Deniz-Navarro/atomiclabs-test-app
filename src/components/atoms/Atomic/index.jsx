import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Atomic = () => {
    return (
        <View style={styles.container}>
            <Icon name="rocket-outline" size={40} color="white" />
            <Text style={styles.text}>atomicLabs</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 30,
        //backgroundColor: 'red',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Atomic;