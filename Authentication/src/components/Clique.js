import { Text, Image, TouchableOpacity,View } from "react-native";
import React from "react";
import { width } from "../styles/Others";
import { moderateScale } from "../styles/Scalling";
import { BLACK, GRAY, LIGHT_GRAY } from "../styles/Colors";
import { regularStyle } from "../styles/Typography";

export default function Clique({ item }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        width: width - moderateScale(10),
        height: 95,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: moderateScale(5),
        marginBottom: moderateScale(10),
        elevation: 2,
        borderRadius: moderateScale(5),
        padding: moderateScale(5),
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: item.avatar }}
          style={{
            width: moderateScale(45),
            height: moderateScale(45),
            borderRadius: moderateScale(10),
            backgroundColor: LIGHT_GRAY,
            margin:moderateScale(5)
          }}
        />
        <View style={{width:width*.6}}>
          <Text
            style={{
              ...regularStyle,
              fontSize: moderateScale(14),
              color: BLACK,
              textTransform: "uppercase",
              marginVertical: 5,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              ...regularStyle,
              fontSize: moderateScale(13),
              color: BLACK,
            }}
          >
            {item.username}
          </Text>
          <Text
            style={{
              ...regularStyle,
              fontSize: moderateScale(12),
              letterSpacing: moderateScale(.4),
              color: GRAY,
              textTransform: "uppercase",
            }}
          >
            Caption : {item.caption}
          </Text>
        </View>
      </View>
      <Image
        source={{ uri: item.image }}
        style={{
          width: width*.18,
          marginHorizontal:moderateScale(5),
          height: "100%",
          borderRadius: moderateScale(7),
          backgroundColor: LIGHT_GRAY,
        }}
      />
    </TouchableOpacity>
  );
}
