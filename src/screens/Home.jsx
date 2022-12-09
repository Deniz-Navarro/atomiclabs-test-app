import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View, Image, ScrollView, ImageBackground, ActivityIndicator} from 'react-native';
//Custom Components
import Atomic from '../components/atoms/Atomic';
import More from '../components/atoms/More';
import Button from '../components/atoms/Button';
import Carousel from '../components/molecules/Carousel';
import CustomList from '../components/molecules/CustomList';
import Footer from '../components/atoms/Footer';

//Data object
const data = [
    {id: 1, title:'IMAGINA',image : 'Group4036.png', points: ['Estrategia Digital','Big Data & Analysis','Consultoría Tecnológica', 'Reducción de costos TI']},
    {id: 2, title:'EXPLORA',image : 'Group4035.png', points: ['Innovación y creación tecnológica','UI / UX','Innovación']},
    {id: 3, title:'CONNQUISTA',image : 'Group4037.png', points: ['Desarrollo tecnológico y creación tecnológica', 'Ciberseguridad', 'Servicios de la Nube']},
];

const Home = ({ navigation }) => {
    const [workers, setWorkers] = useState([]); //Hook to save the api data
    //Scroll Constans
    const [scroller, setScroller] = useState(null);
    let screenHeight = Dimensions.get('window').height;
    //Scroll Fuction
    const scrollToB = () => {
        scroller.scrollTo({x: 0, y: screenHeight + 50});
    };
    //Promise, fetch api 
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
        <ImageBackground /* Background */ 
            style={[styles.fixed, styles.containter]}
            source={require('../assets/PaqueteAtomic/fondo.png')}>
            <ScrollView 
                style={styles.containter}
                ref={(scroller) => {setScroller(scroller);}}
            >
                {/* Header */}
                <View style={styles.header}> 
                    <Atomic/>
                    {/* Title */}
                    <Text style={styles.title}>Desarrolla todo{'\n'}
                        <Text style={styles.orangeText}>tu POTENCIAL{'\n'}</Text>
                    dentro del equipo{'\n'}
                        <Text style={styles.orangeText}>ATOMIC</Text>
                    LABS</Text>
                </View>
                <More onPress={scrollToB} />
                <Image 
                    source={require('../assets/PaqueteAtomic/Group4032.png')}
                    style={styles.image1} 
                />
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
                <Text style={styles.title}>NUESTRO 
                    <Text style={styles.orangeText}>EQUIPO</Text>
                </Text>
                {
                    /* Render worker list */
                    workers ? 
                        (<CustomList data={workers} />) : 
                        (<ActivityIndicator size="large" />)
                }
                <Footer />
            </ScrollView>
        </ImageBackground>
    );
};

export default Home;

//Styles bench
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
        width: '100%',
        height: 130,
        margin: 20,
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
