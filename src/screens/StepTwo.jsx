import React, {useState, useEffect} from 'react';
import {ScrollView, View, Image, StyleSheet, Alert } from 'react-native';
import Atomic from '../components/atoms/Atomic';
import ProgressBar from '../components/atoms/ProgressBar';
import Step from '../components/atoms/Step';
import CustomText from '../components/atoms/CustomText';
import InputContainer from '../components/atoms/InputContainer';
import SendButton from '../components/atoms/SendButton';
import Footer from '../components/atoms/Footer';

const sendData = async(nombre, apellidos, navigation, number) => {
    const url = 'https://atomic-test-api.onrender.com/form';
    const body = {
        firstname : nombre,
        lastname : apellidos,
        phoneNumber : number,
    };
    await fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then((response) => response.json()).then(() => {
        navigation.navigate('SendData');
    })
        .catch(err => Alert.alert(err));
};

const StepTwo = ({route, navigation}) => {
    const {nombre, apellidos} = route.params;
    const [number, setNumber] = useState();
    const [validation, setValidation] = useState(false);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if(number){
            if(number.length >= 10){
                setDisabled(false);
                setValidation(false);
            }else{
                setDisabled(true);
                setValidation(true);
            }
        }
    },[number]);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header1}>
                <Atomic />
                <ProgressBar step={2} />
                <Step 
                    step={2} 
                    t1='VALIDA TU' 
                    t2='CELULAR' />
            </View>
            <CustomText text='Necesitamos validar tu número para continuar' />
            <CustomText text='Ingresa tu número a 10 digitos y te enviaremos un código SMS.'/>
            <InputContainer 
                name='Número de Celular' 
                value={number} 
                onChangeText={(a) => setNumber(a)}
                keyboardType='number'
                validation={validation}
                textValidation='Ingresa un número de 10 digitos'/>
            <SendButton 
                text='Continuar' 
                disabled={disabled} 
                onPress={() => sendData(nombre, apellidos, navigation, number)}/>
            <Image 
                style={styles.image} 
                source={require('../assets/PaqueteAtomic/Group4034.png')} />
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
    image:{
        width: '100%',
        height: 400,
        alignSelf: 'center',
    }
});

export default StepTwo;