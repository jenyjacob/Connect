import React, { Component } from 'react';
import { ActivityIndicator, Image, ListView, FlatList, StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Container, Header, Content, Card, CardItem, Thumbnail, List, ListItem, Icon, Item, Input, Text, Title, Button, Left, Body, Right, H1, H2, H3 } from 'native-base';
import firebaseDbh from '../App';
import firebaseListNews from '../App';
import * as firebase from 'firebase';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
   return fetch('https://jonssonconnect.firebaseio.com/.json')
     .then((response) => response.json())
     .then((responseJson) => {
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({
         isLoading: false,
         dataSource: ds.cloneWithRows(responseJson.Events),
       }, function() {
         // do something with new state
       });
     })
     .catch((error) => {
       console.error(error);
     });
 }

  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ greencolor }) => (
      <Image
       source={require('../images/profileicon.png')}
       style={{width: 30, height: 30}}>
      </Image>
    )
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Container>
      <Header searchBar style={styles.searchbarColor}>
      <Thumbnail style={{width: 30, height: 30, margin: 10}} small source={{uri: 'https://joashpereira.com/templates/material_one_pager/img/avatar1.png'}} />
         <Item style={styles.search}><Input placeholder="Search" /></Item>
         <Button transparent>
           <Text style={styles.searchButton}>Search</Text>
         </Button>
       </Header>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  searchbarColor: {
    backgroundColor: '#008542',
  },
 searchButton: {
   fontSize: 12,
   color: '#ffffff',
 },
});
