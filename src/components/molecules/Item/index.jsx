import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import TextLine from '../../atoms/TextLine';

const Item = props => {
    const {title, id, points} = props;
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/PaqueteAtomic/Group4035.png')} style={styles.image} />
            <Text style={styles.text}>____ _ ____</Text>
            <Text style={styles.text}>{title}</Text>
            {points.map((r,key) => <TextLine text={r} key={key}/>)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 350,
        padding: 15,
        margin: 20,
        backgroundColor: '#FF6100',
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

export default Item;