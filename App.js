import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Lista from './src/pages/Lista';
import Perfil from './src/pages/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Home}/>
      <Tab.Screen name="Lista" component={Lista}/>


    </Tab.Navigator>

  )
}



export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen 
name="Home" 
component={Tabs}
//component={Home}
/*
options={{
  title: 'Bem vindo',
  headerStyle:{
    backgroundColor:'#121212'
  },
  headerTintColor: '#FFF'

}}

*/
/>
<Stack.Screen name="Perfil" component={Perfil} />

</Stack.Navigator>

    </NavigationContainer>
  );
}


