import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ProgressBar = props => {
    const {step} = props;
    return(
        <View>
            <View>
                <View style={styles.row}>
                    <Image source={step == 1 ? require('../../../assets/PaqueteAtomic/Group4015.png') : require('../../../assets/PaqueteAtomic/Group4016.png')}/>
                    <Image source={step == 1 ? require('../../../assets/PaqueteAtomic/Group4019.png') : require('../../../assets/PaqueteAtomic/Group4020.png')}/>
                </View>
                <View style={styles.bar}>
                    {/*Progress bar*/}
                    <View style={step == 1 ? [styles.progress,{width: '40%'}] : [styles.progress,{width: '100%'}]}></View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    bar: {
        alignSelf: 'center',
        width: '90%',
        height: 12,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    progress: {
        height: 12,
        borderRadius: 10,
        backgroundColor: '#FF6100',
    },
});

export default ProgressBar;