import React from 'react';
import { Text, View, Button, SafeAreaView, StatusBar,TouchableOpacity } from 'react-native';
import styles from './styles';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';



export default function Home({navigation}) {//recebo navigation para navegar

    const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);


    return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor="#000" />
      <View style={styles.content}>
     
       
        
            <TouchableOpacity
            style={styles.botaoHome}
            useNativeDriver
            animation="bounceInUp"
            duration= {1500}
//            onPress={()=> navigation.navigate('Perfil',{ idade: 27, nome:'Mateus'})}
            onPress={()=> navigation.navigate('Lista',{visibilidade:false})}

>
            <Text style={styles.textoBotaoHome}>Minha lista</Text>

            </TouchableOpacity>

      </View>
        
        <TouchableOpacity
        style={styles.botaoAdiciona}
        useNativeDriver
        animation="bounceInUp"
        duration= {1500}
        onPress={()=> navigation.navigate('Lista',{ visibilidade:true})}
       // onPress={ () => setOpen(true)}

    >
<Ionicons name="ios-add" styles={{marginLeft:10}} size={35} color="#fff" />
        </TouchableOpacity>     
    
    </SafeAreaView>
  );
}


