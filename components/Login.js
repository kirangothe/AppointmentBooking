import   React, { useState, useContext } from 'react'  
import  { AuthContext } from './../settings/AuthContext' 
import {  
  StyleSheet,
  Text,
  View,  
  TextInput , TouchableOpacity, ActivityIndicator
} from 'react-native' 
import { Button } from "react-native-elements" 
import HomeStyles from '../styles/app-styles' 

const styles = HomeStyles;

const Login = ({ route, navigation }) => {
const { signIn }              = useContext(AuthContext);  
//Doctor
const [email, setEmail]       = useState('drgeharajdahal@alkahospital.com'); 
const [password, setPassword] = useState('isnepalpvt');
//Patient  
// const [email, setEmail]       = useState('sandhya@gmail.com');
// const [password, setPassword] = useState('isnepalpvt');  
const [spinner, setSpinner]   = useState(false);

return (
  <View style={styles.login_container}>
        <Text style={styles.logo}>Login</Text> 
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
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        { spinner && <ActivityIndicator size='large' color='#fff' /> }
        { !spinner && 
        <TouchableOpacity style={styles.loginBtn} onPress={() =>
          { 
            setSpinner(true) ; 
            signIn({ email, password });
          }
          }>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity> 
        }
      </View>  
  );
};
export default Login;