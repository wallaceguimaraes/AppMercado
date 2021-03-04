import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    container:{
        flex: 1,
        margin: 8,
        flexDirection: 'row',//icon fica do lado do texto
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 7,
        elevation: 1.5,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3,
        }
        },
        task:{
            color: '#121212',
            fontSize: 20,
            paddingLeft: 8,
            paddingRight: 20,
        },
        modal:{
            flex:1,
            backgroundColor:'#171d31' 
            
           },
           modalHeader:{
             marginLeft:10,
             marginTop: 20,
             flexDirection: 'row', //um do lado do outro
             alignItems: 'center'
           },
           modalTitle:{
             marginLeft: 15,
             fontSize: 20,
             color: '#FFF'
           },
           modalBody:{
             marginTop: 15,
         
           },
           
    input:{
        fontSize:15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        backgroundColor: '#FFF',
        padding: 9,
        height: 85,
        textAlignVertical: 'top',
        color: '#000',
        borderRadius: 5,
    
      },
      handleAdd:{
        backgroundColor: '#ff7514',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderRadius: 5,
      },
      handleAddText: {
        fontSize: 20,
        color: '#fff'
      }
    
})


