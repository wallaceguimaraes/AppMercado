import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, AsyncStorage,TextInput } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default function Adicionar({}){
    const [task, setTask] = useState([]);
    const [open, setOpen]= useState(false);

    const [input, setInput] = useState('');




//Buscando todas as tarefas ao iniciar o app
useEffect(()=>{
    async function loadTasks(){
      const taskStorage = await AsyncStorage.getItem('@task')    
      if(taskStorage){
        setTask(JSON.parse(taskStorage))
      }
    }
    
    loadTasks()
    
    }, [])// quando a gente deixa ese carinha vazio, toda vz q o app for montado em tela essa funcao e chamada
    
    



    //Salvando caso tenha alguma coisa alterada
    useEffect(()=>{    
        async function saveTasks(){
          await AsyncStorage.setItem('@task', JSON.stringify(task))
        }    
        saveTasks()    
      }, [task])

    function handleAdd(){
        if(input ==='') return;     
        const data = {
        key: input,
        task: input    
        };
    setTask([...task, data ])
    setOpen(false)
    setInput('')
    }
    
    return (

        <Animatable.View> 
        <TextInput
        multiline={true}
        placeholderTextColor="#747474"
        autoCorrect={false}
        placeholder="O que você deseja adicionar na lista?"
        style={styles.input}
        value={input}
        onChangeText={ (texto) => setInput(texto)}
        />

        <TouchableOpacity style={styles.handleAdd} onPress={ handleAdd }>
        <Text style={styles.handleAddText}>Adicionar</Text>
        </TouchableOpacity>

        </Animatable.View>
    )
}


