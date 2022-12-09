import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Atomic from '../components/atoms/Atomic';
import ProgressBar from '../components/atoms/ProgressBar';
import Step from '../components/atoms/Step';
import CustomText from '../components/atoms/CustomText';
import InputContainer from '../components/atoms/InputContainer';
import SendButton from '../components/atoms/SendButton';
import Footer from '../components/atoms/Footer';
import { sendData } from '../utils/utils';

const StepTwo = ({ route, navigation }) => {
  //Get the data by route params
  const { nombre, apellidos } = route.params;
  //Hooks
  const [number, setNumber] = useState();
  const [validation, setValidation] = useState(false);
  const [disabled, setDisabled] = useState(true);
  //Validation function
  useEffect(() => {
    if (number) {
      if (number.length >= 10) {
        setDisabled(false);
        setValidation(false);
      } else {
        setDisabled(true);
        setValidation(true);
      }
    }
  }, [number]);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../assets/PaqueteAtomic/fondo4.png')}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header1}>
          <Atomic />
          <ProgressBar step={2} />
          <Step step={2} t1="VALIDA TU" t2="CELULAR" />
        </View>
        <CustomText text="Necesitamos validar tu número para continuar" />
        <CustomText text="Ingresa tu número a 10 digitos y te enviaremos un código SMS." />
        {/* Input */}
        <InputContainer
          name="Número de Celular"
          value={number}
          onChangeText={(a) => setNumber(a)}
          keyboardType="numeric"
          validation={validation}
          textValidation="Ingresa un número de 10 digitos"
          maxLength={10}
        />
        {/* Button to send data to the endpoint */}
        <SendButton
          text="Continuar"
          disabled={disabled}
          onPress={() => sendData(nombre, apellidos, navigation, number)}
        />
        <Image
          style={styles.image}
          source={require('../assets/PaqueteAtomic/Group4034.png')}
        />
      </ImageBackground>
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
  image: {
    width: '100%',
    height: 400,
    alignSelf: 'center',
  },
});

export default StepTwo;
