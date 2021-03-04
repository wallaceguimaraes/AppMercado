import React, {useState, useCallback, useEffect} from 'react';

import { Text, View, FlatList, SafeAreaView,Modal, AsyncStorage, TextInput, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import styles from './components/styles'

import TaskList from './components/index';



export default function Lista({navigation,route}) {


    const [task, setTask] = useState([]);
    let visibilidade = route.params?.visibilidade;
    let [open, setOpen]= useState(visibilidade);
    const [input, setInput] = useState('')


    function muda(){
       // visibilidade=false;
        setOpen(false);
    }

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
    
    
   handleAdd(); 
   
    const handleDelete = useCallback( (data) =>{
    
      const find = task.filter(r => r.key !==data.key)
      setTask(find)
    
    })


    return (
  
  
     
  
  <SafeAreaView >
    
      <FlatList 
    marginHorizontal={10}
    showsHorizontalScrollIndicator={false}
    data={task}
    keyExtractor={(item) =>String(item.key)}
    renderItem={({item}) => <TaskList data={item} handleDelete={handleDelete} /> }
    />
    
 
    <Modal animationType="slide" name="modal" transparent={false} visible={open}>
<SafeAreaView style={styles.modal}>

<View style={styles.modalHeader}>
    <TouchableOpacity onPress={ ()=> setOpen(false)}>
      <Ionicons styles={{marginLeft: 5, marginRight: 5,}} name="md-arrow-back" size={40} color="#FFF"/>
    </TouchableOpacity>
<Text style={styles.modalTitle}>Novo item</Text>
</View>

<Animatable.View style={styles.modalBody} animation="fadeInUp" useNativeDriver>
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


</SafeAreaView>

</Modal>
    
    </SafeAreaView>
  );

}


