import   React, { useState, useContext, useEffect } from 'react'  
import  { AuthContext } from '../../settings/AuthContext' 
import {  
  StyleSheet,
  Text,
  View, 
  Button,
  TextInput ,TouchableOpacity , ScrollView, ActivityIndicator
} from 'react-native'  
import HomeStyles from '../../styles/app-styles' 
import  { BASE_API_URL } from '../../settings/config' 
import { Picker } from '@react-native-community/picker'
import axios from 'axios'

const styles = HomeStyles;

function useSpecialists() {
  const [specialists, setSpecialists] = useState([])

  useEffect(() => {
    axios.get(BASE_API_URL+'dropdownSpecialists')
    .then(response => { 
      setSpecialists(response.data.specialists); 
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return specialists
}

const DoctorRegister = ({ route, navigation }) => {
const { register } = useContext(AuthContext);  

const [spinner, setSpinner]   = useState(false);
const [name, setName]         = useState();
const [email, setEmail]       = useState();
const [password, setPassword] = useState();

const [address, setAddress]   = useState();
const [gender, setGender]     = useState('Male');
const [mobile, setMobile]     = useState();

const [degree, setDegree]     = useState();
const [specialist_id, setSpecialist]     = useState();
const [content, setContent]    = useState();
 
const role                     = 3;  

const specialists = useSpecialists()  ; 

return (
  <ScrollView style={{ flex: 1 }}> 
  <View style={styles.login_container}><View style={ styles.bottomMargin } ></View>
        <Text style={styles.logo}>Doctor Register</Text>
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
        <View style={styles.inputView} > 
            <Picker
              selectedValue={specialist_id}
              onValueChange={(itemValue, itemIndex) => setSpecialist(itemValue)}
              >
                <Picker.Item label="Choose Specialist" value="" key="" />
              { 
                Object.keys(specialists).map((key) => {
                return <Picker.Item label={specialists[key]} value={key} key={key} />
                })
              }
            </Picker>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Degree..." 
            placeholderTextColor="#003f5c"
            value={degree}
            onChangeText={setDegree}/>
        </View> 
        <View style={styles.textAreaView} >
          <TextInput 
            multiline={true}
            style={styles.inputTextArea}
            numberOfLines={3}  
            textAlignVertical = "top"
            placeholder="Description..." 
            placeholderTextColor="#003f5c"
            value={content}
            onChangeText={setContent}
            />
        </View> 
        <View style={ styles.bottomMargin } ></View>
        { spinner && <ActivityIndicator size='large' color='#fff' /> }
        { !spinner && 
          <TouchableOpacity style={styles.loginBtn} onPress={() =>
            { 
              setSpinner(true) ;
              register({ name, email, password, role, mobile, address, gender, content, degree, specialist_id }) ;
            }
           } >
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity> 
        }
        <View style={ styles.bottomMargin } ></View>
      </View>  
      </ScrollView>
  );
};
export default DoctorRegister