import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
const Input = (props) => {
  return <TextInput style={{ ...styles.inputText, ...props.styles }} {...props}  />;
};

const styles = StyleSheet.create({
  inputText: {
    height: 30,
    width: 50,
    marginVertical: 20,
    borderBottomColor: 'darkgray',
    borderBottomWidth: 2,
    borderRadius: 5,
    textAlign: 'center',
    color: 'black',
  },
});

export default Input;
