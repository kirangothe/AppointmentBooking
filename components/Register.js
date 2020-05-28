import   React, { useState, useContext } from 'react'   
import {  
  StyleSheet,
  Text,
  View, 
  Button,
  TextInput ,TouchableOpacity 
} from 'react-native'  

import PatientRegister from './patient/PatientRegister' 
import DoctorRegister from './doctor/DoctorRegister' 
 
const Register = ({ route, navigation }) => { 
const  role    = route.params.role ? route.params.role : 4;  

return ( 
          role == 3 ? <DoctorRegister /> :  <PatientRegister />  
          
  );
};
export default Register;