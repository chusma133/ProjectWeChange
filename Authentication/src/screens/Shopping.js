import { FlatList,TouchableOpacity,Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { CATEGORIES } from "../db/data";
import { height, width } from "../styles/Others";
import { LIGHT_GRAY, WHITE } from "../styles/Colors";

export default function Shopping() {
  return (
    <Screen page="home">
      <FlatList
        data={CATEGORIES}
        style={{ marginTop: -30, zIndex: -1, paddingTop: 30 }}
        renderItem={({ item }) =><TouchableOpacity activeOpacity={0.8} style={{width:width-20,margin:10,height:height*.3,alignItems:'center',justifyContent:'center',borderRadius:4,backgroundColor:WHITE,borderColor:LIGHT_GRAY,borderWidth:1,elevation:3}}>
            <Image source={item}/>
        </TouchableOpacity>}
        contentContainerStyle={{ paddingBottom: 25 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.username}
      />
    </Screen>
  );
}

