import {
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  View,
} from "react-native";
import React from "react";
import { height, width } from "../styles/Others";
import { moderateScale } from "../styles/Scalling";
import { BLACK, WHITE } from "../styles/Colors";
import { regularStyle } from "../styles/Typography";

export default function GalleryImage({ item, onPress }) {
  return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          width: (width - moderateScale(20)) / 3,
          height: height * 0.3,
          backgroundColor: item == "roll" ? BLACK : WHITE,
          alignItems: "center",
          justifyContent: "center",
          marginRight: moderateScale(5),
          marginBottom: moderateScale(5),
          elevation: 3,
          borderRadius: moderateScale(5),
        }}
        onPress={onPress}
      >
        {item == "roll" ? (
          <>
            <Image
              source={require("../../assets/icons/camRoll.png")}
              style={{
                width: moderateScale(45),
                height: moderateScale(30),
                marginBottom: 10,
              }}
            />
            <Text style={{ ...regularStyle }}>CAM ROLL</Text>
          </>
        ) : (
          <ImageBackground
            style={{
              width: "100%",
              height: "100%",
              borderRadius: moderateScale(5),
            }}
            source={{ uri: item.node.image.uri }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                zIndex: -1,
                position: "absolute",
              }}
            >
              <ActivityIndicator size="large" color={BLACK} />
            </View>
          </ImageBackground>
        )}
      </TouchableOpacity>
  );
}
