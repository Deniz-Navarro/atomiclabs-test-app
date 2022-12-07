import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import StepOne from '../screens/StepOne';
import StepTwo from '../screens/StepTwo';
import SendData from '../screens/SendData';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="StepOne" component={StepOne} />
                <Stack.Screen name="StepTwo" component={StepTwo} />
                <Stack.Screen name="SendData" component={SendData} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;