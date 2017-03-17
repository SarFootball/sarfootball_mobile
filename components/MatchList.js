import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


const Team = ({isLeft=false, id, name}) => (
    <View style={isLeft?styles.team:styles.team_right}>
        <Image resizeMode='contain' style={isLeft?styles.team_logo:styles.team_logo_right} source={require('../img/team_logo.png')} />
        <Text style={styles.team_name}>{name}</Text>
    </View>
)

const Result = ({status, goal1, goal2, date, time}) => {
    let str = null;
    if (status === 'planned'){
        str = <Text style={styles.planned_text}>{time.substring(0,5)}</Text> 
    }
    else if (status === 'live'){
        str = <View><Text style={styles.result_text}>{goal1}{'-'}{goal2}</Text><Text style={styles.live}>Live</Text></View>
    }
    else{
        str = <Text style={styles.result_text}>{goal1}{'-'}{goal2}</Text>
    }
    return (<View style={styles.result}>
        {str}
    </View>
)};

const Match = ({team1, team2, ...res}) => (
    <View style={styles.match}>
        <Team isLeft={true}  {...team1} />
        <Result {...res} />
        <Team {...team2} />
    </View>
);

const League = ({id, name, matches}) =>(
    <View>
        <Text>{name}</Text>
        <View style={styles.list}>
        {matches.map(match => <Match key={match.id} {...match} />)}
    </View>
    </View>
);


const MatchList = ({id, name, matches}) => {

    const firstL = matches.filter(m => m.league && m.league.id === 1);

    const secondL = matches.filter(m => m.league && m.league.id === 2);

    const friendL = matches.filter(m => !m.league);

    return(<View>
        {firstL.length > 0 &&
            <League {...firstL[0].league} matches={firstL}  />
        }
        {secondL.length > 0 &&
            <League {...secondL[0].league} matches={secondL}  />
        }
        {friendL.length > 0 &&
            <League {...friendL[0].league} matches={friendL}  />
        }
    </View>
    );

};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    
  },
  match: {
    flexDirection:'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 15,
    alignItems:'center',
     
  },
  team: {
    flexDirection:'row',
    alignItems: 'flex-start',
    flex:3,
  },
  team_right: {
    flexDirection:'row-reverse',
    alignItems: 'flex-end',
    flex:3,   
  },
  team_logo: {
     width: 28,
     height: 28,
     marginRight: 15,
  },
   team_logo_right: {
     width: 28,
     height: 28,
     marginLeft: 15,
  },
  team_name: {
     fontSize: 16,
     alignSelf: 'center',
  },
  result:{
    alignSelf:'center',
    alignItems:'center',
    flex:1,
  },
  result_text:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  planned_text:{
    fontSize: 16,
    color: '#999999',
  },
  live:{
      textAlign: 'center',
      fontSize: 10,
      color: 'red',
      borderWidth: 1,
      borderColor: 'red',
  }

});

export default MatchList;