import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Item from '../Item';

const Carousel = props => {
    const {data} = props;
    return (
        <ScrollView horizontal={true} style={styles.container}>
            {data.map((item) => ( 
                <Item {...item} key={item.id}/>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 0, 
        margin: 20,
    },
    text: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Carousel;