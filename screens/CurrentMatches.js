import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Modal,
  TouchableHighlight
} from 'react-native';

import MatchList from '../components/MatchList';

class CurrentMatches extends Component {
    constructor(){
        super();
        this.state = {
            matches:[],
            loading:false,
            error:false,
        } 
    };
    componentDidMount(){
        this.setState({loading:true});
        this.fetchData().done();
    };

    async fetchData() {
        try{
            const response = await fetch('http://193.124.188.199:8080/logic/api/v1/matchs?format=json');
            const json = await response.json();
            this.setState({matches:json, loading:false});
        }
        catch(ex){
            this.setState({loading:false, error:true});
        }
        
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
    if (this.state.matches){
        return(
            <View>
                 <MatchList {...this.state}  />
            </View>
        );
    };
};

}

export default CurrentMatches;