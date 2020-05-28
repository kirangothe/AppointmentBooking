import   React, { useContext, useEffect } from 'react'  
import  { AuthContext } from '../settings/AuthContext' 
import {   
    Text,
    View,
    Button,
    Alert
  } from 'react-native' 

const Logout = () => {    
    const { signOut } = useContext(AuthContext);

    useEffect(() => { 
        // Alert.alert(
        //     'Log Out',
        //     'Are you sure ?',
        //     [ 
        //       {
        //         text: 'Cancel',
        //         onPress: () => console.log('Cancel Pressed'),
        //         style: 'cancel'
        //       },
        //       { text: 'OK', onPress: () => signOut  }
        //     ],
        //     { cancelable: false }
        //   );
        signOut() ;
    }, [signOut]);
    
    return ( 
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>  
            <Button title="Sign Out"  onPress={() => signOut()} /> 
        </View>
    )
}

export default Logout;
