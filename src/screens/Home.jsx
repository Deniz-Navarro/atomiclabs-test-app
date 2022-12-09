import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ImageBackground} from 'react-native';
//Custom Components
import Atomic from '../components/atoms/Atomic';
import More from '../components/atoms/More';
import Button from '../components/atoms/Button';
import Carousel from '../components/molecules/Carousel';
import CustomList from '../components/molecules/CustomList';

const data = [
    {id: 1, title:'IMAGINA',image : 'Group4036.png', points: ['Estrategia Digital','Big Data & Analysis','Consultoría Tecnológica', 'Reducción de costos TI']},
    {id: 2, title:'EXPLORA',image : 'Group4035.png', points: ['Estrategia Digital','Big Data & Analysis','Consultoría Tecnológica', 'Reducción de costos TI']},
    {id: 3, title:'CONNQUISTA',image : 'Group4037.png', points: ['Estrategia Digital','Big Data & Analysis','Consultoría Tecnológica', 'Reducción de costos TI']},
];

const Home = ({ navigation }) => {
    const [workers, setWorkers] = useState([]);
    useEffect(()=>{
        const url = 'https://atomic-test-api.onrender.com/names';
        fetch(url,{
            method : 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }).then(res => res.json()).then(res => setWorkers(res)).catch(error => console.log('error: ', error));
    },[]);
    return (
        <ImageBackground
            style={[styles.fixed, styles.containter]}
            source={require('../assets/PaqueteAtomic/fondo.png')}>
            <ScrollView style={[styles.containter]}>
                {/* <ImageBackground source={require('./assets/PaqueteAtomic/MaskGroup1.png')} style={styles.image}> */}
                <View style={styles.header}>
                    <Atomic/>
                    <Text style={styles.title}>Desarrolla todo{'\n'}<Text style={styles.orangeText}>tu POTENCIAL{'\n'}</Text>dentro del equipo{'\n'}<Text style={styles.orangeText}>ATOMIC</Text>LABS</Text>
                </View>
                <More />
                <Image 
                    source={require('../assets/PaqueteAtomic/Group4032.png')}
                    style={styles.image1} 
                />
                {/* </ImageBackground> */}
                <Button 
                    text="¡Quiero ser parte!" 
                    onPress={() => navigation.navigate('StepOne')}
                />
                <Text style={styles.title}>SOMOS EL BRAZO{'\n'} DERECHO <Text style={styles.orangeText}>DE LA{'\n'} TECNOLOGÍA</Text></Text>
                <Carousel data={data} />
                <Text style={styles.title}>¡TE ENCANTARÁ{'\n'}<Text style={styles.orangeText}>TRABAJAR CON{'\n'} NOSOTROS!</Text></Text>
                <Image 
                    source={require('../assets/PaqueteAtomic/Group4040.png')} 
                    style={styles.image2} 
                />
                <Button 
                    text="¡Quiero ser parte!" 
                    onPress={() => navigation.navigate('StepOne')}
                />
                <Text style={styles.title}>NUESTRO <Text style={styles.orangeText}>EQUIPO</Text></Text>
                <CustomList data={workers} />
            </ScrollView>
        </ImageBackground>
    );
};

export default Home;
const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },
    fixed: {
        resizeMode: 'strech',
    },
    image1: {
        width: '90%',
        height: 320,
        alignSelf: 'center',
    },
    image2: {
        width: 350,
        height: 121,
        alignSelf: 'center',
    },
    header: {
        paddingTop: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    orangeText: {
        color: '#FF6100',
    }
});
