import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)

this.state={
  meta:'2000',
  consumo:0,
  status:'',
  pct:0
}

this.beberAgua = this.beberAgua.bind(this)
this.atualizar = this.atualizar.bind(this)

  }

atualizar(){
let s = this.state
s.pct = Math.floor(((s.consumo/2000)*100))

if(s.pct < 100 ){
  s.status = 'Ruim'
    }else if(s.pct >= 100 && s.pct <=150 ) {
      s.status = 'Bom'
    }

     else {
      s.status = 'Excelente' 
    }
 
this.setState(s) 


}


beberAgua(){

  let s = this.state
  s.consumo += 200
  this.setState(s) 
  this.atualizar()
  

}



  render(){

  return (
    <View style={styles.container}>

      <ImageBackground source={require('./images/images.jpg')} style={styles.bgImage}>
      
        <View style={styles.infoArea}>
          <View style={styles.info}> 
            <Text style={styles.texto}>Meta</Text>
            <Text style={styles.valor}>{this.state.meta}ml</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.texto}>Consumo</Text>
            <Text style={styles.valor}>{this.state.consumo}ml</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.texto}>Status</Text>
            <Text style={styles.valor}>{this.state.status}</Text>
          </View>

        </View> 


        <View style={styles.pct}>
        <Text style={styles.pctTexto}>{this.state.pct}%</Text>
          <View><Button title='Beber 200ml' color='#000099' onPress={this.beberAgua}></Button></View>
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
