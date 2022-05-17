import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import Screen from "../components/Screen";
  import { height, width } from "../styles/Others";
  import Input from "../components/Input";
  import { moderateScale } from "../styles/Scalling";
  import { BLACK, GRAY,  WHITE } from "../styles/Colors";
import WeChangeButton from "../components/WeChangeButton";
  
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
        
        <WeChangeButton/>
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
  });
  