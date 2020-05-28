import React, { Component } from 'react' 
import {
  View,
  Text,
  StyleSheet, 
  Button
} from 'react-native'   
import HomeStyles from '../styles/app-styles' 

const styles = HomeStyles  

const Initialising = ({ navigation }) =>{ 
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Appointment booking App  
          </Text> 
          <View
          style={styles.buttonMargin}>
            <Button
              title="Patient Login"
              navigation = {navigation}
              onPress={() =>
                navigation.navigate('Login', { role: 4 })
              }
            />
          </View>
          <View
          style={styles.buttonMargin}>
            <Button 
              title="Patient Register"
              style={styles.buttonMargin}
              onPress={() =>
                navigation.navigate('Register', { role: '4' })
              }
            />
          </View>   

          <View
          style={styles.buttonMargin}>
            <Button
              title="Doctor Login"
              onPress={() =>
                navigation.navigate('Login', {role: 3})
              }
            />
          </View>
          <View
          style={styles.buttonMargin}>
            <Button
              title="Doctor Register"
              style={styles.buttonMargin}
              onPress={() =>
                navigation.navigate('Register', {role: 3})
              }
            />
          </View>         
        </View>
    )
  } 

  export default Initialising 
 
