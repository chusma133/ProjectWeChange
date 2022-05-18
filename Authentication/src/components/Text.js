import { Pressable, Text } from "react-native";
import React from "react";
import Fonts from "../styles/Fonts";
import Colors, { BLACK, BLUE } from "../styles/Colors";
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
        fontFamily: Fonts.regular,
        fontSize: 18,
        letterSpacing:.043,
        color: BLACK,
        ...textStyle
      }}>
      {text}
    </Text>
  </Pressable>
);
export const ImportantLink = ({text,textStyle,...props}) => (
  <Pressable  {...props}>
    <Text
      style={{
        fontFamily: Fonts.regular,
        fontSize: 18,
        letterSpacing:.02,
        color: BLUE,
        ...textStyle
      }}>
      {text}
    </Text>
  </Pressable>
);
    export const SecText = ({size=18,text,mt=0,mb=0,mv=0,...props}) => (
      <Pressable  {...props}>
        <Text
          style={{
            fontFamily: Fonts.regular,
            fontSize: size,
            letterSpacing:.043,
            color: BLACK,
            marginTop:mt,
            marginBottom:mb,
            marginVertical:mv,
            textAlign:'center',
            paddingHorizontal:10
          }}>
          {text}
        </Text>
      </Pressable>
    );