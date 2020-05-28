import   React, { useState, useContext } from 'react'  
import  { AuthContext } from '../../settings/AuthContext' 
import { ButtonGroup } from "react-native-elements" 
import {  
  StyleSheet,
  Text,
  View, 
  Button,
  TextInput ,TouchableOpacity
} from 'react-native'  
import HomeStyles from '../../styles/app-styles' 

const styles = HomeStyles;

const PatientRegister = ({ route, navigation }) => {
const { register } = useContext(AuthContext);  

const [name, setName]         = useState();
const [email, setEmail]       = useState();
const [password, setPassword] = useState();

const [address, setAddress]   = useState();
const [gender, setGender]     = useState(0);
const [mobile, setMobile]     = useState();


const role                    = 4 ;  

const buttons = ['Male', 'Female'] 

const updateIndex = selectedIndex => {
   setGender(selectedIndex)
   console.warn("selected : ", gender)
}

return (
  <View style={styles.login_container}>
        <Text style={styles.logo}>Patient Register</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name..." 
            placeholderTextColor="#003f5c"
            value={name}
            onChangeText={setName}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={setEmail}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText={setPassword}/>
        </View> 

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Address..." 
            placeholderTextColor="#003f5c"
            value={address}
            onChangeText={setAddress}/>
        </View>        

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Mobile..." 
            placeholderTextColor="#003f5c"
            value={mobile}
            onChangeText={setMobile}/>
        </View>
        <View> 
          <ButtonGroup 
            onPress={updateIndex}
            selectedIndex={gender}
            buttons={buttons}
            containerStyle={{height: 30, width:100, marginBottom:20}}
          />
        </View>

        
        <TouchableOpacity style={styles.loginBtn} onPress={
          () => register({ name, email, password, role, mobile, address, gender })}
          >
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity> 
      </View>  
  );
};
export default PatientRegister