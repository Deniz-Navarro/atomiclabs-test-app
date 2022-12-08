import React, {useState} from 'react';
import {View, StyleSheet } from 'react-native';
//Custom components
import Atomic from '../components/atoms/Atomic';
import ProgressBar from '../components/atoms/ProgressBar';
import Step from '../components/atoms/Step';
import CustomText from '../components/atoms/CustomText';
import InputContainer from '../components/atoms/InputContainer';

const StepOne = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header1}>
                <Atomic />
                <ProgressBar step={1} />
                <Step step={1} t1='TE QUEREMOS' t2='CONOCER' />
            </View>
            <CustomText text="Queremos saber que eres tú, por favor ingresa los siguientes datos:" />
            <InputContainer name="Nombre (s)" value={nombre} onChangeText={(a) => setNombre(a)}/>
            <InputContainer name="Apellidos" value={apellido} onChangeText={(a) => setApellido(a)}/>
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