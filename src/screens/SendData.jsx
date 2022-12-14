import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import Atomic from '../components/atoms/Atomic';
import CustomText from '../components/atoms/CustomText';
import Footer from '../components/atoms/Footer';

const SendData = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <ImageBackground
        source={require('../assets/PaqueteAtomic/fondo4.png')}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <Atomic />
          <Text style={styles.title}>
            TUS DATOS{'\n'} HAN SIDO
            <Text style={styles.orangeText}> ENVIADOS{'\n'} CON ÉXITO</Text>
          </Text>
        </View>
        {/* Text to show info */}
        <CustomText text="En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs." />
        <CustomText text="Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!" />
        <Image
          style={styles.image}
          source={require('../assets/PaqueteAtomic/Group4039.png')}
        />
        {/* Footer */}
        <Footer />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  orangeText: {
    color: '#FF6100',
  },
  image: {
    width: '100%',
    height: 450,
  },
});

export default SendData;
