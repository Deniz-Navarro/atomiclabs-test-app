import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const Step = props => {
    const {step, t1, t2} = props;
    return(
        <View style={styles.container}>
            <Image source={step == 1 ? require('../../../assets/PaqueteAtomic/Group40152x.png') : require('../../../assets/PaqueteAtomic/Group40232x.png')}/>
            <View>
                <Text style={styles.text}>{t1}</Text>
                <Text style={[styles.text,{color: '#FF6100'}]}>{t2}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 20,
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Step;