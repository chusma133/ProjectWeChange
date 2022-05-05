import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import { height, width } from "../styles/Others";
import { moderateScale } from "../styles/Scalling";
import { OVERLAY } from "../styles/Colors";
import { regularStyle } from "../styles/Typography";

export default function HomePost({ item }) {
  return (
    <ImageBackground
      style={styles.item}
      source={{ uri: item.image }}
      borderRadius={moderateScale(5)}
    >
      <View style={styles.user}>
        <Image source={{ uri: item.avatar }} style={styles.userImg} />
        <Text style={{ ...regularStyle, fontSize: moderateScale(13) }}>
          {item.username}
        </Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  item: {
    width: width - 10,
    marginHorizontal: 5,
    height: height * 0.6,
    marginBottom: 6,
    justifyContent: "flex-end",
  },
  user: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: OVERLAY,
    borderBottomLeftRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    height: moderateScale(50),
  },
  userImg: {
    margin: moderateScale(5),
    width: moderateScale(60),
    height: moderateScale(65),
    marginTop: -moderateScale(10),
    borderRadius: moderateScale(8),
  },
});
