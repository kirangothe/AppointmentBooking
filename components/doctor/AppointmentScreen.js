import React, { Component,useState, useEffect } from 'react' 
import { Button, Text, View, FlatList, StyleSheet } from 'react-native'    
import axios from 'axios'
import  { BASE_API_URL, USER_KEY } from '../../settings/config' 
import AsyncStorage from '@react-native-community/async-storage' 

const AppointmentItem = (props) => { 
  const date = new Date(props.item.appoint_date).toDateString(); 

    return ( 
      <View style={styles.eventBox}> 
        <View style={styles.eventContent}> 
          <Text  style={styles.eventTime}>{ date }</Text>
          <Text  style={styles.userName}>{ props.item.patientname }</Text>
          <Text  style={styles.description}>{`${props.item.age}, ${props.item.gender}, ${props.item.address}`}</Text>
          <Text  style={styles.description}>{`${props.item.disease_description}`}</Text>
        </View>
      </View>
    );
}

const AppointmentScreen = ({ route, navigation }) => { 
  const [user, setUser]  = useState([]);   

const readAppointments = async () => {
  try {
    const storageData = await AsyncStorage.getItem(USER_KEY) 

    if (storageData !== null) {
      const myUser = JSON.parse(storageData) 

      if(myUser){
        axios.get(BASE_API_URL+'doctorAppointments/'+myUser.id)
        .then(response => {  
          setUser(response.data.appointments); 
        })
        .catch(error => {
          console.log(error);
        })
      }else{
        console.warn("error : ")
      }

    }
  } catch (e) {
    console.warn("error : "+ e)
  }
}
  
    useEffect(() => {  
      readAppointments ();
    }, []);  

    return ( 
        <FlatList 
          data={user} 
          keyExtractor={(item, index) => index.toString()}
          renderItem={(data) => <AppointmentItem  {...data} navigation ={navigation}  /> }
        /> 
    ); 
} 
 
 export default  AppointmentScreen  

 const styles = StyleSheet.create({
  container:{
    backgroundColor: "#00BFFF",
  }, 
  eventBox: {
    padding:8,
    // marginTop:10,
    marginBottom:5,
    flexDirection: 'row',
  },
  eventDate:{
    flexDirection: 'column',
  },
  eventDay:{
    fontSize:50,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventMonth:{
    fontSize:16,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
    backgroundColor: '#FFFFFF',
    padding:10,
    borderRadius:10
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  eventTime:{
    fontSize:16,
    color:"#151515",
  },
  userName:{
    fontSize:16,
    color:"#151515",
  },
});
   