import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = props => {
    return(
        <Text style={styles.text}>{props.text}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 15,
        fontSize: 20,
        margin: 10,
        color: '#EAE5E2',
    },
});

export default CustomText;