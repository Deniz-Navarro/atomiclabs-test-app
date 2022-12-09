import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Footer = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>© 2020 AtomicLabs. Todos los derechos reservados.</Text>
            <Text style={[styles.text,{textDecorationLine: 'underline'}]}>Aviso de privacidad</Text>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../../../assets/PaqueteAtomic/linkedin.png')} 
                    style={styles.image}/>
                <Image 
                    source={require('../../../assets/PaqueteAtomic/twitter.png')} 
                    style={styles.image}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        height: 200,
        alignItems: 'center',
    },
    text: {
        color: '#E5E2E2',
        fontSize: 16,
        fontWeight: '500',
        padding: 10,
        marginTop: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '20%',
        margin: 20,
    },
    image: {
        width: 30,
        height: 30,
    }
});

export default Footer;