

import React from 'react' 
import { Text, View } from 'react-native'   
import { ListItem } from "react-native-elements"  
import HomeStyles from '../../styles/app-styles' 

const styles = HomeStyles;

const AppointmentDetail = (props) => {   
      let data = props.route.params;
      const item = data.item;
      let name = "";
      let address ="";
      let age = "";
      let height ="";
      let gender = "";
      let date ="";
      let disease_description = disease_description ;
      if (item != null) {
        name = item.patientname; 
        address = item.address;
        age = item.age; 
        height = item.height;
        gender = item.gender; 
        date = item.appoint_date;
        disease_description = item.disease_description ;
      }
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Name: {name}</Text>          
          <Text  style={styles.text}>Address: {address}</Text> 
          <Text  style={styles.text}>Age: {age}</Text> 
          <Text  style={styles.text}>Height: {height}</Text> 
          <Text  style={styles.text}>Gender: {gender}</Text> 
          <Text  style={styles.text}>Appointment Date: {date}</Text> 
          <Text  style={styles.text}>Specification: {disease_description}</Text> 
        </View>
      );
    } 

  export default  AppointmentDetail
   