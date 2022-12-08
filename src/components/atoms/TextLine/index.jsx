import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextLine = props => {
    //const boldWords = props.points.split('//');
    return (
        <View style={styles.container}>
            <Text style={styles.text}>• {props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent:'flex-end',
        width: 200,
        padding: 5,
    },
    text: {
        maxWidth: 200,
        fontWeight: '400',
        color: '#E5E2E2',
        fontSize: 14,
    },
    textBold: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TextLine;