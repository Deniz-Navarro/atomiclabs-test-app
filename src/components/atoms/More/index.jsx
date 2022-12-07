import React from 'react';
import {Pressable, Text, StyleSheet, Image} from 'react-native';

const More = props => {
    return (
        <Pressable onPress={props.onPress} style={styles.container}>
            <Image source={require('../../../assets/PaqueteAtomic/Group4013.png')} style={styles.image}/>
            <Text style={styles.text}>Quiero saber más</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        margin: 10,
        //backgroundColor: 'red',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    image: {
        width: 60,
        height: 60,
    },
});

export default More;