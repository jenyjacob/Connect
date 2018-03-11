import React, { Component } from 'react';
import {
  StyleSheet,View,Image,Button
} from 'react-native';
import Loginform from '../Screens/loginform'

export default class login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style= {styles.logoContainer}>
          <Image
             style={styles.logo}
             source={require('../images/link1logo.png')}/>

         </View>

        <View style={styles.formContainer}>
        <Loginform/>
         <Button onPress={()=> this.props.navigation.navigate('TabNav')} title="LOGIN"/>
        </View>
      </View>
  //<Button rounded onPress={()=> this.props.navigation.navigate('TabNav')} title="LOGIN"/>

    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:'#ADD8E6'
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:20,
    justifyContent:'center'
  },
  logo:{
    width: 300,
    height:100,
    resizeMode:'contain'
  },
  title:{
    color:'#3498db',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity:0.9,
  }})
