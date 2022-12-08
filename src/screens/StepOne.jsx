import React from 'react';
import {View, StyleSheet } from 'react-native';
//Custom components
import Atomic from '../components/atoms/Atomic';
import ProgressBar from '../components/atoms/ProgressBar';
import Step from '../components/atoms/Step';

const StepOne = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header1}>
                <Atomic />
                <ProgressBar step={1} />
                <Step step={1} t1='TE QUEREMOS' t2='CONOCER' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header1: {
        paddingTop: 30,
        alignItems: 'center',
    },
});

export default StepOne;