import   React, { useState, useEffect, createContext, useReducer, useMemo, useContext } from 'react' 
import { Button, View, TouchableOpacity, Text } from 'react-native' 
import { createDrawerNavigator } from '@react-navigation/drawer' 
import { NavigationContainer, DrawerActions  } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios' 
import  { USER_KEY, USER_TYPE, BASE_API_URL } from './settings/config' 

import HeaderLeft from './components/Header' 
import SplashScreen from './SplashScreen' 
import Initialising from './components/Initialising' 

import DoctorsScreen from './components/patient/DoctorsScreen' 
import DoctorDetail from './components/patient/DoctorDetail' 

import AppointmentScreen from './components/doctor/AppointmentScreen' 
import Appointment from './components/patient/Appointment' 
import AppointmentDetail from './components/doctor/AppointmentDetail' 

import Register from './components/Register' 
import PatientRegister from './components/patient/PatientRegister' 
import DoctorRegister from './components/doctor/DoctorRegister' 
import Login from './components/Login'  

import DoctorDashboard from './components/doctor/DoctorDashboard'  
import PatientDashboard from './components/patient/PatientDashboard'  
import Logout from './components/Logout'

import MyAppointments from './components/patient/MyAppointments'  
import MyMessages from './components/patient/MyMessages'  

import  { AuthContext } from './settings/AuthContext'  

const Drawer = createDrawerNavigator();
const Stack  = createStackNavigator(); 


const retrieveUser = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_KEY);
      if (value !== null) { 
        console.log(value);
        return value;
      }
  } catch (e) { 
      console.log("Error : ", e);
  }
}
 
function BookAppointmentStack() {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="Appointment" component={Appointment} 
       options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'Appointment Booking',
        }} /> 
    </Stack.Navigator>
  );
}

function MyAppointmentsStack() {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="MyAppointments" component={MyAppointments} 
       options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'My Appointments',
        }} />
        <Stack.Screen name="AppointmentDetail" component={AppointmentDetail} 
       options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'My Appointments',
        }} /> 
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="Login" component={Login} 
       options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'Login',
        }} /> 
    </Stack.Navigator>
  );
}

function DoctorRegisterStack() {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="DoctorRegister" component={DoctorRegister} 
      options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'Doctor Register',
        }} />
    </Stack.Navigator>
  );
}

function PatientRegisterStack() {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="PatientRegister" component={PatientRegister} 
      options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'Patient Register',
        }} />
    </Stack.Navigator>
  );
}

function DcotorsStack() {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="DoctorsScreen" component={DoctorsScreen} 
      options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'Doctors',
        }} />
        <Stack.Screen name="DoctorDetail" component={DoctorDetail} 
          options={{
            title: 'Details'
          }} />
    </Stack.Navigator>
  );
}

function HomeStack() {
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
    </Stack.Navigator>
  );
}


function DoctorDashboardStack() {
  return (
    <Stack.Navigator initialRoute="DoctorDashboard">      
      <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} 
      options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'Dashboard',
        }} />
        <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} 
      options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'Appointment',
        }} />
    </Stack.Navigator>
  );
}

function PatientDashboardStack() {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="PatientDashboard" component={PatientDashboard} 
      options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'My Profile',
        }} />
    </Stack.Navigator>
  );
}

function AppointmentStack() {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="Appointments" component={AppointmentScreen} 
      options={{
          headerLeft: ({}) => <HeaderLeft />,
          title: 'Appointments',
        }} />
      <Stack.Screen name="AppointmentDetail" component={AppointmentDetail} 
          options={{
            title: 'Details'
          }} />
    </Stack.Navigator>
  );
}
  
function App({ navigation }) {  

const initialState = {
  isAuthenticated: false, 
  isLoading: true,
  role:4 
}; 

 const storeUser = async (user)=>{
  try {
     await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':       
      return {
        ...prevState, 
        isLoading: false 
      }; 
    case "LOGIN": 
       storeUser(action.payload.user) ; 
      //  console.warn("Saved : ", savedUser);
      return {
        ...prevState,
        isAuthenticated: true, 
        role:action.role
      };
    case "REGISTER": 
       storeUser(action.payload.user) ; 
      return {
        ...prevState,
        isAuthenticated: true, 
       role:action.role
      };
    case "LOGOUT":
      AsyncStorage.clear(); 
      return {
        ...prevState,
        isAuthenticated: false, 
      };
    default:
      return prevState;
  }
};

  const [state, dispatch] = useReducer(reducer, initialState)
  const [data, setData] = useState([])  

  useEffect(() => {
    let data  ;
   const bootstrapAsync  = async () => {   
     try { 
       const storageData = await AsyncStorage.getItem(USER_KEY)     
      //  console.warn("logged user : "+ storageData)
       setData(JSON.parse(storageData))     
     } catch (e) {
       console.warn("error : "+ e)
     }
     dispatch({ type: 'RESTORE_TOKEN' , payload:data});
   } ;

   bootstrapAsync ();
  }, []); 

  const authContext = useMemo(
    () => ({ 
      signIn: async values => {
        var postData = {
          email: values.email,
          password: values.password
        }; 

        let axiosConfig = {
          headers: {
              "Content-Type": "application/json", 
          }
        }; 
    
        axios.post(BASE_API_URL + 'login', postData, axiosConfig)
          .then(response => response.data)
          .then(        
            resJson => {  
              // console.log("Post Data :", resJson.user.role) ;
            dispatch({
                type: "LOGIN",
                payload: resJson,
                role: resJson.user.role
            })
          })
          .catch(error => {
            console.log("Error : ", error)
          }); 
      },
      signOut: () => dispatch({ type: 'LOGOUT' }),
      register: async values => {
        AsyncStorage.clear(); 
        
        let postData ;

        if(values.role == 4){
          postData = {
            email: values.email,
            password: values.password,
            name: values.name,
            role: values.role,
            address: values.address,
            gender: values.gender == 0 ? 'Male' : 'Female',
            mobile: values.mobile
          }; 
        }else if(values.role == 3){
          postData = {
            email: values.email,
            password: values.password,
            name: values.name,
            role: values.role,
            address: values.address,
            gender: values.gender,
            mobile: values.mobile,
            degree:values.degree,  
            specialist_id :values.specialist_id,  
            content:values.content
          };  
        }

        let axiosConfig = {
          headers: {
              "Content-Type": "application/json", 
          }
        }; 
    
        axios.post(BASE_API_URL + 'register', postData, axiosConfig)
          .then(response => response.data)
          .then(        
            resJson => {   
            dispatch({
                type: "REGISTER",
                payload: resJson,
                role:resJson.user.role
            })
          })
          .catch(error => {
            console.log("Error : ", error)
          }); 
      }
    }),
    []
  ); 

  
  return (
    <AuthContext.Provider value={authContext}>      
    <NavigationContainer>
      <Drawer.Navigator>          
      { state.isLoading ? (
         <Drawer.Screen name="SplashScreen" component={SplashScreen}/> 
      ) :
        state.isAuthenticated || data != null ? 
        <>
          {  state.role == 3 || ( data  && data.role == 3)   ? 
          <>
            <Drawer.Screen name="Dashboard" component={DoctorDashboardStack}/>  
            <Drawer.Screen name="Appointments" component={AppointmentStack}/> 
          </>  
          :
          <>  
            <Drawer.Screen name="My Profile" component={PatientDashboardStack}/>
            <Drawer.Screen name="My Appointments" component={MyAppointmentsStack}/>
            <Drawer.Screen name="Appointment" component={BookAppointmentStack}/>   
            <Drawer.Screen name="Doctors" component={DcotorsStack} />      
          </>
          }
          <Drawer.Screen name="Logout" component={Logout} /> 
        </>
        :
        <>
          <Drawer.Screen name="Home" component={HomeStack} /> 
          <Drawer.Screen name="Patient Register" component={PatientRegisterStack}/>
          <Drawer.Screen name="Doctor Register" component={DoctorRegisterStack}/>
          <Drawer.Screen name="Login" component={LoginStack} />
        </>  
        }
      </Drawer.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App ;