import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default class App extends Component {
  render(){

  return (
    <View style={styles.container}>

      <ImageBackground source={require('./images/images.jpg')} style={styles.bgImage}>
      
        <View style={styles.infoArea}>
          <View style={styles.info}> 
            <Text style={styles.texto}>Meta</Text>
            <Text style={styles.valor}>2000 ml</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.texto}>Consumo</Text>
            <Text style={styles.valor}>0</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.texto}>Status</Text>
            <Text style={styles.valor}>Ruim</Text>
          </View>

        </View> 


        <View style={styles.pct}>
          <Text style={styles.pctTexto}>0%</Text>
          <View><Button title='Beber 200ml' color='#000099'></Button></View>
        </View>
        
      </ImageBackground>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgImage:{
    flex:1,
    alignSelf:"stretch"

  },

  infoArea:{

    flex:1,
    flexDirection:'row',
    marginTop:80,
    
  
  },

  info:{
    flex:1,
    alignItems:"center"
    
  
  }, 
  texto:{
    fontSize:20,
    color:'#9999ff',
    

  },
  valor:{
    fontSize:20,
    color:'#0033cc',
    fontWeight:"bold"



  },

  pct:{
    flex:1,
    alignItems:"center",
    marginTop:-80,
  
  },
  pctTexto:{
    fontSize:40,
    color:'#002080'
  },

 
});
