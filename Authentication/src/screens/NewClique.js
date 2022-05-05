import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import Screen from "../components/Screen";
  import { height, width } from "../styles/Others";
  import Input from "../components/Input";
  import { moderateScale } from "../styles/Scalling";
  import { BLACK, GRAY, LIGHT_GRAY, WHITE } from "../styles/Colors";
  import { regularStyle } from "../styles/Typography";
  
  export default function NewClique({ navigation }) {
    return (
      <Screen page="newPost" title="New Clique">
        <ScrollView
          style={{ padding: 5,}}
          contentContainerStyle={{alignItems:'center'}}>
            <Image
              // source={{ uri: item.image }}
              style={styles.image}
            />
            <Input
              placeholder="TITLE"
              width={width * 0.84}
              mb={10}/>
            <Input
              placeholder="CAPTION"
              width={width * 0.84}
              height={height * 0.15}
              mb={10}/>
            <Input
              placeholder="TAGS"
              width={width * 0.84}
              height={70}
              mb={10}/>
        
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
        >
          <Image
            source={require("../assets/icons/fingerPrintWhite.png")}
            style={{ height: moderateScale(30), width: moderateScale(22) }}
          />
        </TouchableOpacity>
        </ScrollView>
      </Screen>
    );
  }
  

  const styles = StyleSheet.create({
    image: {
      width: width * 0.4,
      height: height * 0.35,
      borderRadius: moderateScale(15),
      marginVertical:15,
      marginBottom:20,
      backgroundColor: GRAY,
      borderWidth:2,
      borderColor:WHITE,
    },
   button:{
    height: 35 ,
    width: width*.4,
    borderRadius: moderateScale(50),
    backgroundColor: BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
  });
  