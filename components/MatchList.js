import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


const Match = ({team1, team2}) => (
    <View style={styles.match}>
        <Text>{team1.name}</Text>
        <Text>{team2.name}</Text>
    </View>
);

const MatchList = ({matches}) => (
    <View style={styles.list}>
        {matches.map(match => <Match key={match.id} {...match} />)}
    </View>
);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  match: {
    flexDirection:'row',
  },
});

export default MatchList;