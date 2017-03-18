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
  View,
  Navigator
} from 'react-native';

import CurrentMatches from './screens/CurrentMatches';
import MatchScreen from './screens/MatchScreen';
import TableScreen from './screens/TableScreen';



export default class sarfootball_mobile extends Component {

  navScene(route, navigator) {
		if(route.id == 'main'){
			return (<CurrentMatches navigator={navigator} />);
		}
		if(route.id == 'table'){
			return (<TableScreen navigator={navigator} />);
		}
	}

  render() {
    return (
      <View style={styles.container}>
        <Navigator
					initialRoute={{id: 'table'}}
					renderScene={this.navScene}
				/>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
	  flex: 1,
    width:'100%',
    padding:15,
  },
  
});

AppRegistry.registerComponent('sarfootball_mobile', () => sarfootball_mobile);
