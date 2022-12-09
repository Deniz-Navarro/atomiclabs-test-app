import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const SendButton = props => {
    const {text, onPress, disabled} = props;
    return (
        <Pressable 
            onPress={onPress}
            //Ternary to show styles when the button is disabled
            style={disabled ? 
                [styles.container,{backgroundColor: '#C15F24',}] : 
                [styles.container,{backgroundColor: '#FF6100',}]}
            disabled={disabled}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 15,
        margin: 20,
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default SendButton;