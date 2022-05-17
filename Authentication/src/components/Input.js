import { TextInput } from "react-native";
import React from "react";
import { moderateScale } from "../styles/Scalling";
import { BLACK, WHITE } from "../styles/Colors";
import Fonts from "../styles/Fonts";

export default function Input({mb=0,caption,width="100%",textTransform="none",height=50,borderRadius=20, ...props }) {
  return (
    <TextInput
    style={{
        padding: moderateScale(15),
        borderRadius,
        borderWidth: 2,
        borderColor: WHITE,
        backgroundColor:BLACK,
        fontFamily:Fonts.regular,
        color:WHITE,
        fontSize: moderateScale(16),
        marginLeft:8,
        textTransform,
        width,
        height,
        elevation:3,
        marginBottom:mb
    }}
    multiline={!!caption}
    placeholderTextColor={WHITE}
    {...props}
    />
  );
}
