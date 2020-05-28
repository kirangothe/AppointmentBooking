import React, { Component,useState, useEffect } from 'react' 
import { Button, Text, View, FlatList, StyleSheet } from 'react-native'  
import { ListItem } from "react-native-elements"   
import axios from 'axios'
import  { BASE_API_URL, USER_KEY } from '../../settings/config'  
import AsyncStorage from '@react-native-community/async-storage' 

const AppointmentItem = (props) => { 
  const date = new Date(props.item.appoint_date).toDateString();
  // const onPressItem = (data) => {     
  //   props.navigation.navigate('AppointmentDetail', {item: data.item})
  // }  
  
    return (
      // <ListItem  
      //   onPress={() => onPressItem(props)}
      //   title={`${props.item.appoint_date}`}
      //   subtitle={`${props.item.doctorname}, ${props.item.address}, ${props.item.gender}`} 
      //   bottomDivider
      //   chevron
      // /> 
      <View style={styles.eventBox}>
        {/* <View style={styles.eventDate}>
          <Text  style={styles.eventDay}>12</Text>
          <Text  style={styles.eventMonth}>{date}</Text>
        </View> */}
        <View style={styles.eventContent}> 
          <Text  style={styles.eventTime}>{ date }</Text>
          <Text  style={styles.userName}>{ props.item.doctorname }</Text>
          <Text  style={styles.description}>{` ${props.item.degree}, ${props.item.specialist_title}`}</Text>
        </View>
      </View>
    );
} 


const MyAppointments = ({ route, navigation }) => {      
       
const [user, setUser]  = useState([]);   

const readAppointments = async () => {
  try {
    const storageData = await AsyncStorage.getItem(USER_KEY) 

    if (storageData !== null) {
      const myUser = JSON.parse(storageData) 

      if(myUser){
        axios.get(BASE_API_URL+'patientAppointments/'+myUser.id)
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
          <View style={ styles.container } >
            <FlatList 
              data={user} 
              keyExtractor={(item, index) => index.toString()}
              renderItem={(data) =>  <AppointmentItem  {...data} navigation ={navigation}  /> }
            /> 
            </View>
        ); 
    } 
 
 export default  MyAppointments 

 const styles = StyleSheet.create({
  container:{
    backgroundColor: "#00BFFF",
  },
  eventList:{
    // marginTop:20,
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
   