import React, { useState } from 'react';
import { View, Animated, StyleSheet, TextInput } from 'react-native';
import { string, func, object, number } from 'prop-types';

export default FloatingTitleTextInputField = (props) => {

    const [isFieldActive, setField] = useState(false);
    const { value } = props.value;

    const [position, setPosition] = useState(new Animated.Value(value ? 1 : 0));
    propTypes = {
        attrName: string.isRequired,
        title: string.isRequired,
        value: string.isRequired,
        updateMasterState: func.isRequired,
        keyboardType: string,
        titleActiveSize: number, 
        titleInActiveSize: number, 
        titleActiveColor: string, 
        titleInactiveColor: string, 
        textInputStyles: object,
        otherTextInputProps: object,
    }

  
   defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 11.5,
    titleInActiveSize: 15,
    titleActiveColor: 'black',
    titleInactiveColor: 'dimgrey',
    textInputStyles: {}, 
    otherTextInputAttributes: {},
  }
  
  const handleFocus = () => {
    if (!isFieldActive) {
      setField(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  }

  const handleBlur = () => {
    if (isFieldActive && !props.value) {
      setField(false);
      Animated.timing(position, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  }

  const onChangeText = (updatedValue) => {
    const { attrName, updateMasterState } = props; 
    updateMasterState(attrName, updatedValue);
  }

  const returnAnimatedTitleStyles = () => {
    const {
      titleActiveColor, titleInactiveColor, titleActiveSize, titleInActiveSize
    } = props;
  
    return {
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInactiveColor,
    }
  }

  return (
    <View style = {Styles.container}>
      <Animated.Text
        style = {[Styles.titleStyles, returnAnimatedTitleStyles()]}>
        {props.title}
      </Animated.Text>
      <TextInput
        value = {props.value}
        style = {[Styles.textInput, props.textInputStyles]}
        underlineColorAndroid = 'transparent'
        onFocus = {handleFocus}
        onBlur = {handleBlur}
        onChangeText = {onChangeText}
        keyboardType = {props.keyboardType}
        {...props.otherTextInputProps}
      />
    </View>
  )

  }
    
const Styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 0.5,
    height: 50,
    marginVertical: 4,
  },
  textInput: {
    fontSize: 15,
    marginTop: Platform.OS=='android'?5:20,
    marginLeft:5,
    fontFamily: 'Avenir-Medium',
    color: 'black',
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 3,
    left: 4,
  }
})