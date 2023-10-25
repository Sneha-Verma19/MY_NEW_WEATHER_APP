import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/home';
import secondscreen from './src/secondscreen';

 
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen  name = 'Home' component ={home} />
        <Stack.Screen name = 'Secondscreen' component={secondscreen}/>
        </Stack.Navigator>
        
       
    </NavigationContainer>
    
  )
}



