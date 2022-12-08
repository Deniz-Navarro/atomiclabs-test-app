import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Atomic from '../components/atoms/Atomic';
import More from '../components/atoms/More';
import Button from '../components/atoms/Button';
import Carousel from '../components/atoms/Carousel';

const data = [
    {id: 1, title:'IMAGINA',image : 'Group4036.png', points: ['Estrategia Digital','Big Data & Analysis','Consultoría Tecnológica', 'Reducción de costos TI']},
    {id: 2, title:'EXPLORA',image : 'Group4035.png', points: ['Estrategia Digital','Big Data & Analysis','Consultoría Tecnológica', 'Reducción de costos TI']},
    {id: 3, title:'CONNQUISTA',image : 'Group4037.png', points: ['Estrategia Digital','Big Data & Analysis','Consultoría Tecnológica', 'Reducción de costos TI']},
];

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
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
        </ScrollView>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    image1: {
        width: 300,
        height: 250,
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
        color: '#FF7713',
    }
});
