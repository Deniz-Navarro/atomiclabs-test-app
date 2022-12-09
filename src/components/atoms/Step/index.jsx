import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const Step = props => {
    const {step, t1, t2} = props;
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={step == 1 ? 
                    require('../../../assets/PaqueteAtomic/Group4014.png') : 
                    require('../../../assets/PaqueteAtomic/Group4023.png')}/>
            </View>
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
        justifyContent: 'space-evenly',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    imageContainer: {
        justifyContent: 'center',
    }
});

export default Step;