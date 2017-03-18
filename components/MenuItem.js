import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


const MenuItem = ({onClick, current, text})=>(
<TouchableHighlight onPress={onClick} >
			<View style={current?styles.menu_current:styles.menu_link}>
				<Text style={current?styles.menu_current_text:styles.menu_text}>{text}</Text>
				</View>
			</TouchableHighlight>
);

const styles = StyleSheet.create({
 
  menu_link:{
	padding: 10,
      borderWidth: 1,
      borderColor: '#999999',
	  borderRadius: 5,
  },
  menu_current:{
	padding: 10,
      borderWidth: 1,
	  borderColor: '#999999',
      backgroundColor: '#999999',
	  borderRadius: 5,
  },
  menu_link_text:{
	textAlign: 'center',
      color: '#999999',
  },
  menu_current_text:{
	textAlign: 'center',
      color: '#ffffff',
  },

});

export default MenuItem;