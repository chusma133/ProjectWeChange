import { TextInput } from "react-native";
import React from "react";
import { moderateScale } from "../styles/Scalling";
import { BLACK, WHITE } from "../styles/Colors";
import { helveticaRegular } from "../styles/Fonts";

export default function Input({mb=0,caption,width,height=50,borderRadius=20, ...props }) {
  return (
    <TextInput
    style={{
        padding: moderateScale(15),
        borderRadius,
        borderWidth: 2,
        borderColor: WHITE,
        backgroundColor:BLACK,
        fontFamily:helveticaRegular,
        color:WHITE,
        fontSize: moderateScale(14),
        textTransform:'uppercase',
        marginLeft:8,
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
