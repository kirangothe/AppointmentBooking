import React, { Component } from "react";
import { View } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import  { USER_KEY } from '../settings/config.js' ;   

class LogoutScreen extends Component{
    componentDidMount(){
        AsyncStorage.clear();
        // AsyncStorage.removeItem(USER_KEY);
        this.props.navigation.navigate('Initialising');
    }
    render(){
        return(
         <View style={{alignItems:'center',justifyContent:'center',flex:1}}></View>
        );
    }
}
export default LogoutScreen;