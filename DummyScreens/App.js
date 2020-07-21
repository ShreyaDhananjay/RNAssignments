
import React, {useEffect} from 'react';
import { StyleSheet, Button, View, Text, Platform, StatusBar, BackHandler, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

const RegistrationScreen = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Button 
      title="Registration"
      style={styles.button}
      onPress={() => { navigation.navigate('RegistrationSubmit'); } }/>
    </View>
  )
}

const RegisterSubmitScreen = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Button 
      title="RegistrationSubmit"
      style={styles.button}
      onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

const HomeScreen = () =>{
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen 
        name="Registration" 
        component={RegistrationScreen} />
        <Stack.Screen 
        name="RegistrationSubmit" 
        component={RegisterSubmitScreen} />
		    <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{headerLeft: null}} />
      </Stack.Navigator>
    </NavigationContainer>
      
      
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'steelblue'
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
    height: 50,
    width: 300
  }
});


export default App;