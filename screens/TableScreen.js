import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Modal,
  TouchableHighlight,
  ListView
} from 'react-native';

import MenuItem from '../components/MenuItem';



class TableScreen extends Component {

    constructor(){
        super();
        this.state = {
			league:1,
            loading:false,
            error:false,
        } 
    };
    componentDidMount(){
        this.setState({loading:true});
        this.fetchData(this.state.league).done();
    };

    async fetchData(league) {
        try{
            const response = await fetch(`http://193.124.188.199:8080/logic/api/v1/league/stat/${league}?format=json`);
            const json = await response.json();
			const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			
            this.setState({teams:ds.cloneWithRows(json), loading:false, league: league});
        }
        catch(ex){
            this.setState({loading:false, error:true});
        }
        
    };
	
	changeLeague(league){
		this.setState({loading:true});
        this.fetchData(league).done();
	};
	
	leagueMenu1(league){
		return (
			<View style={styles.league_menu}>
			<MenuItem onClick={()=>this.changeLeague(1)} current={league===1} text='Высшая лига' />
			<MenuItem onClick={()=>this.changeLeague(2)} current={league===2} text='Первая лига' />
			</View>
		)
	};
	
	legueMenu(league){
		return (
			<View style={styles.league_menu}>
			<TouchableHighlight onPress={()=>this.changeLeague(1)} >
			<View style={league===1?styles.league_menu_current:styles.league_menu_link}>
				<Text style={league===1?styles.league_menu_current_text:styles.league_menu_text}>Высшая лига</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight onPress={()=>this.changeLeague(2)} >
			<View style={league===2?styles.league_menu_current:styles.league_menu_link}>
				<Text style={league===2?styles.league_menu_current_text:styles.league_menu_text}>Первая лига</Text>
			</View>
			</TouchableHighlight>
			</View>
		)
	};
	_renderRow(rowData,sectionID, rowID, highlightRow){
		return(<View>
          <View style={styles.row}>
            <Text style={styles.row_name}>
              {rowData.name}
            </Text>
			
			<Text style={styles.row_matches}>
              {rowData.matches}
            </Text>
			<Text style={styles.row_wins}>
              {rowData.wins}
            </Text>
			<Text style={styles.row_drawns}>
              {rowData.drawns}
            </Text>
			<Text style={styles.row_lesion}>
              {rowData.lesion}
            </Text>
			<Text style={styles.row_goals_positive}>
              {rowData.goals_positive}
            </Text>
			<Text style={styles.row_goals_negative}>
              {rowData.goals_negative}
            </Text>
			<Text style={styles.row_points}>
              {rowData.points}
            </Text>
          </View>
        </View>);
	};
    render(){
        if(this.state.loading){
            return( <ActivityIndicator size='large' style={{height:80}} />);
        }
        if (this.state.error){
            alert('Ошибка подключения к серверу.');
            return(<View>
            </View>);
    }
    if (this.state.teams){
		
        return(
            <View>
			{this.legueMenu1(this.state.league)}
			<ListView
				dataSource={this.state.teams}
				renderRow={this._renderRow}
			/>
            </View>
        );
    }
	else{
	return(
            <View>
			{this.legueMenu(this.state.league)}
            </View>
			);
			}
};

}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    
  },
  league_menu:{
	  flexDirection: 'row',
	justifyContent: 'space-around',
  },
  league_menu_link:{
	padding: 10,
      borderWidth: 1,
      borderColor: '#999999',
	  borderRadius: 5,
  },
  league_menu_current:{
	padding: 10,
      borderWidth: 1,
	  borderColor: '#999999',
      backgroundColor: '#999999',
	  borderRadius: 5,
  },
  league_menu_link_text:{
	textAlign: 'center',
      color: '#999999',
  },
  league_menu_current_text:{
	textAlign: 'center',
      color: '#ffffff',
  },
  row:{
	  flexDirection:'row',
	  justifyContent: 'space-between',
	  alignItems:'center',
	  paddingBottom:5,
	  paddingTop: 5,
	  borderColor: '#cccccc',
	  borderBottomWidth: 1
  },
  row_name:{
	  flex: 3,
	  fontSize: 16,
	  fontWeight: 'bold',
  },
  row_matches:{
	  flex:1,
  },
  row_wins:{
	  flex:1,
  },
  row_drawns:{
	  flex:1,
  },
  row_goals_negative:{
	  flex:1,
  },
  row_goals_positive:{
	  flex:1,
  },
   row_lesion:{
	  flex:1,
  },
  row_points:{
	  flex:1,
	  fontWeight: 'bold',
  }
});

export default TableScreen;