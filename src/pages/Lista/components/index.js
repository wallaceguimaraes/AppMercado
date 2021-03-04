import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default function TaskList({data, handleDelete}){

    return (
        <Animatable.View 
        animation="bounceIn"
        useNativeDriver
        style={styles.container}>
       <TouchableOpacity onPress={() => handleDelete(data)}>
           <Ionicons name="md-checkmark-circle" size={30} color={"#121212"}/>
       </TouchableOpacity>
        <View>
            <Text style={styles.task}>
                {data.task}
            </Text>
        </View>

        </Animatable.View>
    )
}


