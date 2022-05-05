import { View, StatusBar, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Colors from "../styles/Colors";
import { ButtonOutlined } from "./Buttons";
import { width } from "../styles/Others";
import Fonts from "../styles/Fonts";

export default function Header({style, navigation, changeLang,title, onChangeLang, skip }) {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.white,
          alignItems: "center",
          height:50,
          ...style
        }}
      >
        <Icon
          name="arrowleft"
          size={25}
          color={Colors.black}
          onPress={() => navigation.goBack()}
        />
          {title && (
            <Text style={{position:'absolute',left:width*.33,fontFamily:Fonts.bold,color:Colors.black,fontSize:20}}>{title}</Text>
          )}
        <View style={{ flexDirection: "row" }}>
          {changeLang && (
            <ButtonOutlined title="Change Language" onPress={onChangeLang} />
          )}
          {/* {skip && (
            <ButtonOutlined
              title="Skip"
              onPress={() => navigation.navigate("Main")}
            />
          )} */}
        </View>
      </View>
    </>
  );
}
