import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

let Login = (props) => {
  return (
    <SafeAreaView style={styles._container}>
      <Text>Login page</Text>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
});
export default Login;
