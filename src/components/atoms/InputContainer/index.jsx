import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Pressable} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const InputContainer = props => {
    const {
        placeholder,
        onChangeText, 
        keyboardType, 
        value, 
        secure,
        name
    } = props;
    const [changeSecure, setchangeSecure] = useState(secure);
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={changeSecure}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                value={value}
            />
            <Pressable style={styles.icon} onPress={() => setchangeSecure(!changeSecure)}>
                <Icon name={changeSecure ? 'lock' : 'lock-open'} size={30} color="gray" />
            </Pressable>
        </View>
    );
};

export default InputContainer;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
    },
    name: {
        fontSize: 20,
        color: '#EAE5E2',
    },
    input: {
        height: 50,
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        fontSize: 20,
        color: 'black',
    },
    icon: {
        position: 'absolute',
        top: 60,
        right: 20,
        alignItems: 'flex-end',
    }
});