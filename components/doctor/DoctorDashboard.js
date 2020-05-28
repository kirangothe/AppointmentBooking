import   React, { useState, useEffect, useContext, useRef } from 'react'   
import { 
  Button, 
  View,
  Text, 
  StyleSheet,
  width, Image, TouchableOpacity
} from 'react-native' 
import { Avatar } from "react-native-elements" 
import HeaderLeft from '../../components/Header'  
import AsyncStorage from '@react-native-community/async-storage'
import  { BASE_API_URL, USER_KEY } from '../../settings/config'
import AppointmentScreen from './AppointmentScreen' 


const DoctorDashboard = ({ navigation: { navigate } }) => {    
  const [user, setUser]  = useState([]); 
  const isMounted        = useRef(null);

  const readUser = async () => {
    try {
      const storageData = await AsyncStorage.getItem(USER_KEY) 
  
      if (storageData !== null) {
        if (isMounted.current) {
          setUser(JSON.parse(storageData))  
        }  
      }
    } catch (e) {
      console.warn("error : "+ e)
    }
  }
  
    useEffect(() => {  
      isMounted.current = true;
      readUser ();
      return () => isMounted.current = false;
    }, []); 
    return (
      
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{user.name}</Text>
              {/* <Text style={styles.description}>{ specialist_title ? specialist_title : ''  }</Text> */}
              <Text style={styles.info}>{user.degree}</Text>
              <Text style={styles.description}>{user.email}, {user.address} - {user.mobile}</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={ () => navigate('AppointmentScreen') } >
                <Text>Appointments</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Messages</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View> 
    );
  }; 

 export default DoctorDashboard

 const styles = StyleSheet.create({
  header:{
    backgroundColor: "green",
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
    width:'60%',
    borderRadius:20,
    backgroundColor: "green",
  },
});