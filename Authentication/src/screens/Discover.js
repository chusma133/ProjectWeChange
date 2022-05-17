import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import  Card  from "../components/card";
import  AntDesign  from "react-native-vector-icons/AntDesign";
import { BLACK, gray1, gray2, WHITE } from "../styles/Colors";
import Fonts from "../styles/Fonts";
let Discover = (props) => {
  const [search, setSearch] = React.useState();

  return (
    <SafeAreaView style={styles._container}>
      <View style={styles._header_main}>
        <View style={styles._search_main}>
          <AntDesign name="search1" size={24} color={WHITE} />
          <TextInput
            placeholder="Search..."
            value={search}
            onChangeText={(search) => setSearch(search)}
            style={styles._input}
            underlineColor={gray2}
            placeholderTextColor={gray2}
          />
        </View>
      </View>
      <ScrollView style={styles._scroll_view}>
        <Card path={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  _filter_btn: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
  _search_main: {
    height: 50,
    borderRadius: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: WHITE,
  },
  _header_main: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "black",
    height: 150,
    paddingTop: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  _input: {
    width: "100%",
    color: WHITE,
    fontFamily: Fonts.helveticaRegular,
    marginLeft: 10,
    flex: 1,
  },
  _heading: {
    marginHorizontal: 20,
    marginTop: 30,
    fontFamily: Fonts.bold,
    color: gray1,
    fontSize: 20,
  },
  _trending_heading: {
    color: gray1,
    fontFamily: Fonts.bold,
    marginHorizontal: 20,
    fontSize: 20,
    marginTop: 20,
  },
  _scroll_view: {
    marginTop: 10,
  },
});
export default Discover;
