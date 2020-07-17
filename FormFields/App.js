import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import VirtualKeyboard from 'react-native-virtual-keyboard';


export default App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [active, setActive] = useState(true);
  //const ref_input2 = useRef();
  const showAlert = () =>{
    Alert.alert(
       'Welcome!.'
    )
 }
  return(
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
      style={styles.input}
      placeholder="John Doe"
      autoFocus={true}
      onChangeText={(val) => setName(val)}
      returnKeyType="next"/>
      <Text>Mobile Number</Text>
      <Text>{number}</Text>
      <VirtualKeyboard pressMode='string' onPress={(val) => {
        setNumber(val);
        if(number)
        setActive(false)
        else
        setActive(true)}}/>
      <Button
      disabled={active}
      title="Submit"
      onPress={showAlert}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20
  },
  container2: {
    flex: 1, 
    alignItems: 'flex-start', 
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100
  },
  input: {
    height: 50,
    width: 300,
    fontSize: 25,
    marginBottom: 20,
    borderColor: 'skyblue',
    borderWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
    height: 50,
    width: 300
  }
});