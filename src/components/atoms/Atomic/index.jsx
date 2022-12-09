import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
//Component to show the logo of AtomicLabs
const Atomic = () => {
    return (
        <View style={styles.container}>
            <Icon 
                name="rocket-outline" 
                size={45} 
                color="white" />
            <View style={styles.textContainer}>
                <Text style={styles.text}>atomicLabs</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 10,
        marginBottom: 15,
    },
    textContainer: {
        justifyContent: 'center',
        marginLeft: 2,
        padding: 4,
        borderLeftColor: 'white',
        borderLeftWidth: 1,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Atomic;