import React, { Component } from 'react';
import {
  StyleSheet,View,TextInput
} from 'react-native';


export default class loginform extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder="e-mail"
        placeholderTextColor='rgba(0, 0, 0, 0.8)'
        returnKeyType="next"
        onSubmitEditing={()=>this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}/>
        <TextInput
        placeholder="Password"
        placeholderTextColor='rgba(0, 0, 0, 0.8)'
        returnKeyType="go"
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput=input}/>
      </View>
  //<Button rounded onPress={()=> this.props.navigation.navigate('TabNav')} title="LOGIN"/>

    );
  }
}

const styles = StyleSheet.create({
  container :{
    padding :20,
  },
   input:{
     height: 40,
     backgroundColor:'rgba(255,255,255,0.2)',
     marginBottom:20,
     color: '#000',
     paddingHorizontal:10,
   }
})
