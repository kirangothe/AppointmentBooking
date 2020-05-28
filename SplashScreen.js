import   React  from 'react' 
import { View, Text, ActivityIndicator } from 'react-native' 
import HomeStyles from './styles/app-styles' 

const styles = HomeStyles  

function SplashScreen() {
    return (
      <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#6646ee' />
    </View>
    );
  }

  export default SplashScreen 