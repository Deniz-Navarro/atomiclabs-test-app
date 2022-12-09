import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, ScrollView } from 'react-native';
//Custom components
import Atomic from '../components/atoms/Atomic';
import ProgressBar from '../components/atoms/ProgressBar';
import Step from '../components/atoms/Step';
import CustomText from '../components/atoms/CustomText';
import InputContainer from '../components/atoms/InputContainer';
import SendButton from '../components/atoms/SendButton';
import Footer from '../components/atoms/Footer';

const StepOne = ({navigation}) => {
    //Hooks
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [disabled, setDisabled] = useState(true);
    const [namev, setNamev] = useState(false);
    //Validation function
    useEffect(() => {
        if(nombre){
            if(nombre.length >= 5){
                setNamev(false);
                setDisabled(true);
                if(apellido){
                    setDisabled(false);
                }
            }else{
                setNamev(true);
                setDisabled(true);
            }
        }
    } , [nombre, apellido]);
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header1}>
                <Atomic />
                <ProgressBar step={1} />
                <Step 
                    step={1} 
                    t1='TE QUEREMOS' 
                    t2='CONOCER' />
            </View>
            <CustomText text='Queremos saber que eres tú, por favor ingresa los siguientes datos:' />
            {/* Inputs */}
            <InputContainer 
                name='Nombre (s)' 
                value={nombre} 
                onChangeText={(a) => setNombre(a)} 
                validation={namev}
                textValidation='El nombre deberá tener minimo 5 caracteres'/>
            <InputContainer 
                name='Apellidos' 
                value={apellido} 
                onChangeText={(a) => setApellido(a)}/>
            {/* Button to send data */}
            <SendButton 
                text='Enviar' 
                disabled={disabled} 
                onPress={() => {
                    navigation.navigate('StepTwo', {
                        nombre: nombre,
                        apellidos: apellido,
                    });
                }}/>
            <Image source={require('../assets/PaqueteAtomic/Group4033.png')} />
            <Footer />
        </ScrollView>
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