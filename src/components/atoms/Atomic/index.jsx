import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Atomic = () => {
    return (
        <View style={styles.container}>
            <Icon name="rocket-outline" size={45} color="white" />
            <View style={styles.textContainer}>
                <Text style={styles.text}>atomicLabs</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginBottom: 30,
        //backgroundColor: 'red',
    },
    textContainer: {
        justifyContent: 'center',
        marginLeft: 2,
        padding: 4,
        borderLeftColor: 'white',
        borderWidth: 1,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Atomic;