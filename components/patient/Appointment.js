import   React, { useState, useEffect, useContext } from 'react'   
import {  
  StyleSheet,
  Text,
  View, 
  Button,
  TextInput ,TouchableOpacity
} from 'react-native'  
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import HomeStyles from '../../styles/app-styles' 
import  { BASE_API_URL, USER_KEY } from '../../settings/config'
import  { AuthContext } from '../../settings/AuthContext' 
import { Picker } from '@react-native-community/picker'
import DateTimePicker from '@react-native-community/datetimepicker'

const styles = HomeStyles;

function useDoctors() {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    axios.get(BASE_API_URL+'dropdownDoctors')
    .then(response => { 
      setDoctors(response.data.doctors); 
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return doctors
}

const book = async values => {
  var postData = {
    patient_id: values.patient_id,
    doctor_id: values.doctor_id,
    appoint_date: values.appoint_date.toISOString().split('T')[0],
    disease_description: values.disease_description  
  }; 

  let axiosConfig = {
    headers: {
        "Content-Type": "application/json", 
    }
  }; 

  axios.post(BASE_API_URL + 'appointment', postData, axiosConfig)
    .then(response => response.data)
    .then( resJson => { 
      console.warn("resJson :", resJson) 
    })
    .catch(error => {
      console.log("Error : ", error)
    }); 
}


const Appointment = () => {  
  
const [user, setUser]                  = useState([]); 
const [patient_id, setPatient]         = useState();
const [doctor_id, setDoctor]           = useState('');
const [appoint_date, setAppointDate]   = useState(new Date());
const [disease_description, setDesc]   = useState(''); 
const [status, setStatus]              = useState(false);

 const doctors = useDoctors()  ;   

 const showCalendar = () => setStatus(true);
 const hideCalendar = () => setStatus(false);

 const handleDatePicked = (event, date) => { 
    const currentDate = date || appoint_date ;
    setAppointDate(currentDate) ; 
    setPatient(user.id) ; 
    hideCalendar();
  }; 

  const onFocus = () => {
    showCalendar()
  }

  const onBlur = () => {
    hideCalendar()
   }
   
   
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
  <View style={styles.login_container}>
        <Text style={styles.logo}>Appointment Booking</Text>
        <View style={styles.inputView} > 
            <Picker
              selectedValue={doctor_id}
              onValueChange={(itemValue, itemIndex) => setDoctor(itemValue)}
              >
                <Picker.Item label="Choose Doctor" value="" key="" />
              { 
                Object.keys(doctors).map((key) => {
                return <Picker.Item label={doctors[key]} value={key} key={key} />
                })
              }
            </Picker>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Date..." 
            placeholderTextColor="#003f5c" 
            onFocus={onFocus}
            onBlur ={onBlur} 
            value={appoint_date.toISOString().split('T')[0]}
            /> 
           { status && (<DateTimePicker  
              onConfirm={handleDatePicked}
              onCancel={hideCalendar} 
              value={appoint_date}
              mode={'date'}
              is24Hour={false} 
              onChange={handleDatePicked}
            />) }
        </View>
        <View style={styles.textAreaViewAppointment} >
          <TextInput 
            multiline={true}
            style={styles.inputTextArea}
            numberOfLines={5}  
            textAlignVertical = "top"
            placeholder="Disease Description..." 
            placeholderTextColor="#003f5c"
            value={disease_description}
            onChangeText={setDesc}
            />
        </View> 
        <TouchableOpacity style={styles.loginBtn} onPress={
          () => book({patient_id, doctor_id, appoint_date, disease_description})
          }>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>  
      </View>  
  );
};
export default Appointment;