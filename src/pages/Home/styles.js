import {StyleSheet} from 'react-native';


export default StyleSheet.create({

  container: {
        flex: 1,
        backgroundColor: '#fff',
        
      },
      content: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',

      },
      botaoHome: {
        width: 320,
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor:'#ff7514',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
       // right: 25,
       // bottom: 25,
        elevation: 2,
        zIndex: 9,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        shadowOffset:{
          width:1,
          height: 3,
      }
      },
    textoBotaoHome: {
      fontSize: 20,
      color: '#fff'

    },
    botaoAdiciona: {
      position: 'absolute',
      width: 60,
      height: 60,
      backgroundColor:'#ff7514',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      right: 25,
      bottom: 25,
      elevation: 2,
      zIndex: 9,
      shadowColor:'#000',
      shadowOpacity: 0.2,
      shadowOffset:{
        width:1,
        height: 3,
      }
      },

})


