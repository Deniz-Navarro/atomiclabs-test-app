import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Atomic from '../components/atoms/Atomic';

const Home = () => {
    return (
        <View style={styles.container}>
            {/* <ImageBackground source={require('./assets/PaqueteAtomic/MaskGroup1.png')} style={styles.image}> */}
            <View style={styles.header}>
                <Atomic/>
                <Text style={styles.title}>Desarrolla todo{'\n'}<Text style={styles.orangeText}>tu POTENCIAL{'\n'}</Text>dentro del equipo{'\n'}<Text style={styles.orangeText}>ATOMIC</Text>LABS</Text>
            </View>
            {/* </ImageBackground> */}
        </View>
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
