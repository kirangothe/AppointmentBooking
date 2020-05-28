import React, { Component } from 'react' 
import {
  View,
  Text,
  StyleSheet, 
  Button, ImageBackground, TouchableOpacity
} from 'react-native'    

const Initialising = ({ navigation: { navigate } }) =>{ 
return (
  <View style={styles.container}>
      <View style={styles.backgroundContainer}>
          <ImageBackground style={styles.bakcgroundImage} source={require('../images/w1.png')}> 
          <View style={styles.buttonMargin}>
                <TouchableOpacity style={styles.loginBtn} onPress={() =>navigate('Login') } >
                  <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>  
            </View>
              <View style={styles.buttonMargin}> 
                <TouchableOpacity style={styles.loginBtn} onPress={() =>navigate('Register', {role: 4}) } >
                  <Text style={styles.loginText}>Patient Registration</Text>
                </TouchableOpacity> 
              </View> 
              
              <View style={styles.buttonMargin}>
                <TouchableOpacity style={styles.loginBtn} onPress={() =>navigate('Register', {role: 3}) } >
                  <Text style={styles.loginText}>Doctor Registration</Text>
                </TouchableOpacity>  
              </View>  
          </ImageBackground>                
      </View> 
  </View> 
)
} 

  export default Initialising 

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       
        justifyContent: 'flex-end',
    },
    backgroundContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }, 
    bakcgroundImage: {
        flex: 1, 
        width: null, 
        height: null 
    }, 
    buttonMargin: {
      padding: 8, 
      opacity: 0.88,        
      alignItems:"center",
      position: 'relative',
      top: 150 
    },  
    loginBtn:{
      width:"50%",
      backgroundColor:"#003f5c",
      borderRadius:12, 
      alignItems:"center",
      padding: 12, 
    },
    loginText:{
      color:"white" 
    }
});
 
