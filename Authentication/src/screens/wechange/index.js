import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Typography from "../../typography";
let WeChange = () => {
  return (
    <SafeAreaView style={styles._container}>
      <Text>WeChange</Text>
     
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: Typography.white,
  },
 
});
export default WeChange;
