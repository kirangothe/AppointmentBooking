import   React, { useState, useEffect, useContext } from 'react'   
import { 
  Button, 
  View,
  Text, 
  StyleSheet,
  width, Image,  TouchableOpacity
} from 'react-native' 
import { Avatar } from "react-native-elements" 
import HeaderLeft from '../../components/Header' ; 
import HomeStyles from '../../styles/app-styles' 
import AsyncStorage from '@react-native-community/async-storage'
import  { BASE_API_URL, USER_KEY } from '../../settings/config'

// const styles = HomeStyles;  

const PatientDashboard = (props) => {    
  const [user, setUser]  = useState([]); 

  const readUser = async () => {
    try {
      const storageData = await AsyncStorage.getItem(USER_KEY) 
  
      if (storageData !== null) {
        setUser(JSON.parse(storageData))    
      }
    } catch (e) {
      console.warn("error : "+ e)
    }
  }
  
    useEffect(() => {  
      readUser ();
    }, []);

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar7.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{user.name}</Text> 
              <Text style={styles.description}>{user.email}, {user.address} - {user.mobile}</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Book an Appointment</Text> 
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>My Appointments</Text> 
              </TouchableOpacity>           
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>My Messages</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Search Doctors</Text>  
              </TouchableOpacity>   
            </View>
        </View>
      </View>
    );
  }; 

 export default PatientDashboard
 const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});