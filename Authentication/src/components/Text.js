import { Pressable, Text } from "react-native";
import React from "react";
import Fonts from "../styles/Fonts";
import Colors from "../styles/Colors";
import { width } from "../styles/Others";

export const PrimaryHeader = ({ text,style, ...props }) => {
  return (
    <Text
      style={{
        fontFamily: Fonts.bold,
        color: Colors.black,
        marginVertical: 8,
        fontSize: width*.06,
        letterSpacing:.1,
        ...style,
      }}
      {...props}
    >
      {text}
    </Text>
  );
};
export const HeaderCaption = ({ text, ...props }) => {
  return (
    <Text
      style={{
        fontFamily: Fonts.bold,
        color: Colors.deepGray,
        marginBottom: 5,
        fontSize: width*.04,
        letterSpacing:.02,
      }}
      {...props}
    >
      {text}
    </Text>
  );
};
export const Label = ({ text,color=Colors.gray,...props }) => {
  return (
    <Text
      style={{
        fontFamily: Fonts.bold,
        color,
        marginVertical: 5,
        fontSize: width*.04,
        letterSpacing:.5,
      }}
      {...props}
    >
      {text}
    </Text>
  );
};
export const RegularText = ({ text,...props }) => {
  return (
    <Text
      style={{
        fontFamily: Fonts.medium,
        color:Colors.black,
        fontSize:16,
        marginVertical: 5,
        fontSize: width*.037,
        letterSpacing:.5,
      }}
      {...props}
    >
      {text}
    </Text>
  );
};

export const Link = ({text,textStyle,...props}) => (
  <Pressable  {...props}>
    <Text
      style={{
        fontFamily: Fonts.medium,
        fontSize: 14,
        letterSpacing:.02,
        color: Colors.chineseOrange,
        ...textStyle
      }}>
      {text}
    </Text>
  </Pressable>
);