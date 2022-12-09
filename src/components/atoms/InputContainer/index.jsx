import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Pressable} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

//Custom Input Container

const InputContainer = props => {
    //Destructuring the properties
    const {
        placeholder,
        onChangeText, 
        keyboardType, 
        value, 
        secure,
        name,
        validation,
        textValidation,
    } = props;
    //Hooks
    const [changeSecure, setchangeSecure] = useState(secure);
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            {/* Text Input */}
            <TextInput
                style={validation ? [styles.input,styles.input2] : styles.input}
                placeholder={placeholder}
                secureTextEntry={changeSecure}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                value={value}
            />
            {/* Clickable to hide text*/}
            <Pressable style={styles.icon} onPress={() => setchangeSecure(!changeSecure)}>
                <Icon name={changeSecure ? 'lock' : 'lock-open'} size={30} color="gray" />
            </Pressable>
            { 
                //Text to validate the field
                validation && 
                (<Text style={styles.validation}>{textValidation}</Text>)
            }
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
    validation: {
        color: '#CD4714',
        fontSize: 18,
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
    input2: {
        borderColor: '#CD4714', 
        borderWidth: 2,
    },
    icon: {
        position: 'absolute',
        top: 60,
        right: 20,
        alignItems: 'flex-end',
    }
});