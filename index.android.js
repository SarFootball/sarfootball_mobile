/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CurrentMatches from './screens/CurrentMatches';

const DATA = {
 matches: [{
id: 10,
 team1:{
  id: 1,
  name: 'Sokol'
 },
 team2:{
  id: 2,
  name: 'Spartak'
 },
 location:{
  id: 2,
  name: 'Avangard'
 },
 status: "complete",
 league: {
  id:4,
  name: 'First league ADFS'
 },
 date: '1212121212',
 tour: 1,
 goal1: 3,
 goal2: 5
},
{
id: 101,
 team1:{
  id: 12,
  name: 'Sokol1'
 },
 team2:{
  id: 22,
  name: 'Spartak1'
 },
 location:{
  id: 2,
  name: 'Avangard1'
 },
 status: "complete",
 league: {
  id:4,
  name: 'First league ADFS'
 },
 date: '1212121212',
 tour: 1,
 goal1: 3,
 goal2: 5
}
]};

export default class sarfootball_mobile extends Component {

  render() {
    return (
      <View style={styles.container}>
       <CurrentMatches />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding:15,
  },
  
});

AppRegistry.registerComponent('sarfootball_mobile', () => sarfootball_mobile);
