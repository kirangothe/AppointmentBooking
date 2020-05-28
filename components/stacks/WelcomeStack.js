import   React from 'react'    

import { createStackNavigator } from '@react-navigation/stack';
import Initialising from './../Initialising'  
import HeaderLeft from './../Header' 
import Register from './../Register' 
import PatientRegister from './../patient/PatientRegister' 
import DoctorRegister from './../doctor/DoctorRegister' 
import Login from './../Login'  

const Stack = createStackNavigator();

export default function WelcomeStack() {
    return (
      <Stack.Navigator>      
        <Stack.Screen name="Initialising" component={Initialising} 
        options={{
            headerLeft: ({}) => <HeaderLeft />,
            title: 'Welcome',
          }} /> 
          <Stack.Screen name="Register" component={Register} 
        options={{
            headerLeft: ({}) => <HeaderLeft />,
            title: 'Register',
          }} /> 
          <Stack.Screen name="Login" component={Login} 
        options={{
            headerLeft: ({}) => <HeaderLeft />,
            title: 'Login',
          }} /> 
          <Stack.Screen name="PatientRegister" component={PatientRegister} 
        options={{
            headerLeft: ({}) => <HeaderLeft />,
            title: 'Patient Register',
          }} />
          <Stack.Screen name="Doctor Register" component={DoctorRegister} 
        options={{
            headerLeft: ({}) => <HeaderLeft />,
            title: 'Doctor Register',
          }} />
      </Stack.Navigator>
    );
  }
