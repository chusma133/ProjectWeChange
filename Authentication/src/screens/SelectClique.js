import {
    FlatList,
    StyleSheet,
    View,
    Text,
    Image,
  } from "react-native";
  import React from "react";
  import Screen from "../components/Screen";
  import { moderateScale } from "../styles/Scalling";
  import { regularStyle } from "../styles/Typography";
  import { BLACK } from "../styles/Colors";
import { CLIQUES } from "../db/data";
import Clique from "../components/Clique";
  
  export default function SelectClique({ navigation }) {
    return (
      <Screen page="selectClique" goBack title="Select Clique">
        <View style={styles.labelView}>
            <Text style={styles.label}>
            FILTER
            </Text>
            <Image source={require("../../assets/icons/phoneDown.png")} style={{}} />
          </View>
        <FlatList
          data={CLIQUES}
          renderItem={({ item }) => <Clique item={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.username+index}
        />
      </Screen>
    );
  }
  
  const styles = StyleSheet.create({
    labelView: {
      flexDirection: "row",
      alignItems: "center",
      margin: moderateScale(10),
    },
    label: {
      ...regularStyle,
      color: BLACK,
      fontSize: moderateScale(14),
      marginHorizontal: moderateScale(5)
    },
  });
  