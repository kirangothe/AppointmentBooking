import React, { Component } from 'react'
import { Button, Text, View, FlatList } from 'react-native' 
import { ListItem } from "react-native-elements" 
import axios from 'axios'
import  { BASE_API_URL } from '../../settings/config' 

import HomeStyles from '../../styles/app-styles'

const styles = HomeStyles 

const  DoctorItem = (props) => {

  const onPressItem = (data)  => { 
    props.navigation.navigate('DoctorDetail', {item: data.item})
  } 

  return (
  <ListItem  
    onPress={() => onPressItem(props)}
    title={`${props.item.name}`}
    subtitle={`${props.item.specialist_title}-${props.item.degree}`}
    bottomDivider
    chevron
  /> 
  ) 
}

class DoctorsScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    }; 
  } 

  componentDidMount(){ 
    
    const {state} = this.props.navigation; 

    axios.get(BASE_API_URL+'doctors')
    .then(response => { 
      this.setState({ data: response.data.doctors });
    })
    .catch(error => {
      console.log(error);
    }); 
  } 

  
  render() {
    return ( 
        <FlatList 
          data={this.state.data} 
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => <DoctorItem  {...item} navigation = {this.props.navigation} />}
        /> 
    );
  }
}

export default DoctorsScreen; 