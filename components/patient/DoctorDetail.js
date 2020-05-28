import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'   

const DoctorDetail = (props) => {   
  let data = props.route.params;
  const item = data.item;
  const schedules = data.item.schedules ;

  console.warn("Schedules :",  schedules)

  let name = "";
  let specialization =""; 
  let degree = "" ;
  let address = ""; 
  let mobile = ""; 
  let content = ""; 

  if (item != null) {
    name = item.name; 
    specialization = item.specialist_title; 
    degree = item.degree; 
    address = item.address; 
    mobile = item.mobile; 
    content = item.content; 
  }
  return ( 
    <ScrollView>
        <View style={styles.container}>
          <View style={[styles.card, styles.profileCard]}> 
            <Image style={styles.avatar} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />
            <Text  style={styles.name}>Dr. {name}</Text>
            <Text  style={styles.desc}>{specialization}</Text>
            <Text  style={styles.desc}>{degree}</Text>
            {/* <Text  style={styles.desc}>{address}, {mobile }</Text> */}
          </View> 

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Description</Text>   
            <Text>{ content }</Text>   
          </View>

          <View style={styles.card}>
                  <Text style={styles.cardTittle}>Schedules ( Block {schedules[0].schedule_block})</Text>  
                  <Text>Sun :- { schedules[0].schedule_sun }</Text>
                  <Text>Mon :- { schedules[0].schedule_mon }</Text>
                  <Text>Tue :- { schedules[0].schedule_tue }</Text>  
                  <Text>Wed :- { schedules[0].schedule_wed }</Text>  
                  <Text>Thurs :- { schedules[0].schedule_thu }</Text>  
                  <Text>Fri :- { schedules[0].schedule_fri }</Text>  
                  <Text>Sat :- { schedules[0].schedule_sat }</Text>  
          </View>
 
          <TouchableOpacity style={styles.buttonContainer}>
                <Text>Book an Appointment</Text> 
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Message Doctor</Text> 
              </TouchableOpacity>   
        </View>
    </ScrollView>
  );
} 

export default DoctorDetail

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor : "#DCDCDC"
  },
  cardTittle:{
    color:"#808080",
    fontSize:22,
    marginBottom:5,
  },
  avatar:{
    width:100,
    height:100,
  },
  card:{
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    padding:15,
    marginTop:10,
  },
  profileCard:{
    // height:'40%',
    padding:10,
    alignItems: 'center',
    marginTop:5,
  },
  name:{
    marginTop:10,
    fontSize:22,
    color:"#808080",
  } ,
  desc:{
    marginTop:10,
    fontSize:16,
    color:"#808080",
  } ,  
  buttonContainer: {
    marginTop:15,
    height:'8%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    // width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  }
});