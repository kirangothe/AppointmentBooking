import  React from 'react';
import { View } from 'react-native';
import {  useNavigation, DrawerActions  } from '@react-navigation/native';
import { Icon } from 'react-native-elements';


const HeaderLeft = () => {
    const navigation = useNavigation();
    return (
      <View style={{flexDirection: 'row'}}> 
        <Icon name='menu' size={32} color='blue'
          onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}  />
      </View>
    );
  };

  export default HeaderLeft ;