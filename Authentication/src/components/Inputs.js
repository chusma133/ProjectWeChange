import React from "react";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "../styles/Colors";
import Fonts from "../styles/Fonts";
import {
  container,
  defaultStyle,
  error,
  input,
  inputContainer,
} from "../styles/Inputs";
export const RegularInput = ({ icon, onIconPress, ...props }) => {
  return (
    <Input
      containerStyle={container}
      inputContainerStyle={inputContainer}
      inputStyle={input}
      rightIcon={<Icon name={icon} size={24} onPress={onIconPress} />}
      errorStyle={error}
      style={defaultStyle}
      {...props}
    />
  );
};


export const SecondaryInput = ({title,big, ...props}) => (
  <Input
    placeholderTextColor="#aaa"
    label={title}
    labelStyle={{fontFamily:Fonts.regular,color:Colors.gray,fontSize:20,marginTop:25,}}
    containerStyle={{
      height:big?150:110,
      marginBottom: 0,
      borderBottomColor: Colors.gray,
      borderBottomWidth: 1.5,
    }}
    multiline
    inputContainerStyle={inputContainer}
    inputStyle={{...input,fontSize:16,letterSpacing:.6,
      height:big?100:50,}}
    errorStyle={error}
    style={defaultStyle}
    {...props}
  />
);
