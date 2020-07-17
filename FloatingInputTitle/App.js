import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FloatingTitleTextInputField from './components/floatingInput';

export default App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const updateMasterState = (attrName, value) => {
    if([attrName] == 'firstName')
      setFirstName(value);
    else
      setLastName(value);
  }
   
  
    return (
      <View style={styles.container}>
        <Text  style = {styles.headerText}>Enter Details</Text>
        <FloatingTitleTextInputField
          attrName = 'firstName'
          title = 'First Name'
          value = {firstName}
          updateMasterState = {updateMasterState}
          textInputStyles = {{ 
            color: 'blue',
            fontSize: 20,
          }}
          otherTextInputProps = {{   
            maxLength: 12,
          }}
        />
        <FloatingTitleTextInputField
          attrName = 'lastName'
          title = 'Last Name'
          value = {lastName}
          updateMasterState = {updateMasterState}
          textInputStyles = {{ 
            color: 'blue',
            fontSize: 20,
          }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 26,
    color: 'black',
    fontWeight:'bold'
  }
});
