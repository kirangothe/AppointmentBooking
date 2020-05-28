import {
  StyleSheet
} from 'react-native';

const HomeStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    // justifyContent: 'center', 
  },
  container_register: {
    flexDirection: 'row' 
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }, 
  dashboard_container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' ,
    padding: 20
  },
  item :{
    // width: '50%', 
    margin:5,
    backgroundColor: 'black' 
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  formHeading : {fontSize: 20},
  formPadding: {padding: 20},
  buttonMargin: {padding: 10 }, 
  bottomMargin: {marginBottom: 20 },  
  text: { fontSize: 16, padding: 10 },
  login_container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40
  },
  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"#fb5b5a",
    marginBottom:20
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:40,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },
  textAreaViewAppointment:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,  
    justifyContent:"center",
    padding:10,
    marginBottom:20
  },
  textAreaView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,  
    justifyContent:"center",
    padding:20
  },
  inputTextArea:{ 
    color:"white"
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:13,
    height:30,
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center" 
  },
  loginText:{
    color:"white" 
  }
});

export default HomeStyles;