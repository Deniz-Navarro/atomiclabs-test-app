import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import TextLine from '../../atoms/TextLine';
import Circle from '../../atoms/Circle';

const Item = props => {
    const {title, points, id} = props;
    let localPath;
    switch(id){
    case 1:
        localPath = require('../../../assets/PaqueteAtomic/Group4036.png');
        break;
    case 2:
        localPath = require('../../../assets/PaqueteAtomic/Group4035.png');
        break;
    case 3:
        localPath = require('../../../assets/PaqueteAtomic/Group4037.png');
        break;
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image 
                    source={localPath} 
                    style={styles.image} />
                <Text style={styles.text}>____ _ ____</Text>
                <Text style={styles.text}>{title}</Text>
                {points.map((r,key) => <TextLine text={r} key={key}/>)}
            </View>
            <View style={styles.row}>
                <Circle on={id == 1 ? true : false} />
                <Circle on={id == 2 ? true : false} />
                <Circle on={id == 3 ? true : false}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        width: 350,
        padding: 10,
        margin: 20,
    },
    container: {
        width: '100%',
        height: 380,
        backgroundColor: '#FF6100',
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 5,
    },
    image: {
        width: 150,
        height: 150,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 20,
        width: '50%',
        justifyContent: 'space-around',
        alignSelf: 'center',
    }
});

export default Item;