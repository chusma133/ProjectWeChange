import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import DolorIcon from "../../assets/Assets/dollor.svg";
import MoneyIcon from "../../assets/Assets/Money.svg";
import SettingIcon from "../../assets/Assets/Settings.svg";
import { WHITE } from "../styles/Colors";
import Fonts from "../styles/Fonts";

let Transactions = ({ navigation }) => {
  let transaction = [
    {
      email: "we@monica4567",
      for: "FOR BOMB WEED",
      price: "-56.00",
    },
    {
      email: "we@monica4567",
      for: "FOR BOMB WEED",
      price: "-56.00",
    },
    {
      email: "we@monica4567",
      for: "FOR BOMB WEED",
      price: "-56.00",
    },

    {
      email: "we@monica4567",
      for: "FOR BOMB WEED",
      price: "-56.00",
    },
    {
      email: "we@monica4567",
      for: "FOR BOMB WEED",
      price: "-56.00",
    },

    {
      email: "we@monica4567",
      for: "FOR BOMB WEED",
      price: "-56.00",
    },
    {
      email: "we@monica4567",
      for: "FOR BOMB WEED",
      price: "-56.00",
    },
  ];
  return (
    <SafeAreaView style={styles._container}>
      <View style={styles._header}>
        <ImageBackground
          source={require("../../assets/square.png")}
          style={styles._bg}
          resizeMode="contain"
        >
          <View style={styles._square}></View>
          <Text style={styles._email}>we@Adrianph313</Text>
          <Text style={styles._price}>$2,460</Text>
          <Text style={styles._balance}>BALANCE</Text>
        </ImageBackground>
      </View>

      {/* transcation list */}
      {/*  */}
      <View style={styles._body}>
        <Text
          style={{
            fontFamily: Fonts.regular,
            color: "white",
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          TRANSACTIONS
        </Text>
        <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
          {transaction.map((val, i) => {
            return (
              <TouchableOpacity style={styles._list} key={i}>
                <Image
                  source={require("../../assets/avatar2.png")}
                  height={30}
                  width={30}
                  style={{ borderRadius: 100, marginRight: 10 }}
                />
                <View style={styles._desc}>
                  <Text style={{ fontFamily: Fonts.regular }}>
                    {val.email}
                  </Text>
                  <Text style={{ fontFamily: Fonts.regular }}>
                    {val.for}
                  </Text>
                </View>
                <Text style={{ fontFamily: Fonts.regular }}>
                  {val.price}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* footer */}
      <View style={styles._footer}>
        <TouchableOpacity style={styles._footer_icons}>
          <DolorIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._footer_icons}
          onPress={() => navigation.navigate("RequestFund")}
        >
          <MoneyIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles._footer_icons}>
          <SettingIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  _footer: {
    height: 70,
    backgroundColor: "black",
    position: "absolute",
    bottom: 60,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  _footer_icons: {
    marginHorizontal: 20,
  },
  _header: {
    flex: 1.7,
    backgroundColor: "black",
    justifyContent: "center",
    zIndex: -10,
    // alignItems: "center",
  },
  _body: {
    flex: 3,
    padding: 10,
    marginTop: -70,
    zIndex: 2,
    // backgroundColor: WHITE,
    // margin: 10,
    // paddingTop:10
  },
  _bg: {
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    // width: "100%",
  },
  _square: {
    height: 61,
    width: 61,
    borderRadius: 20,
    backgroundColor: WHITE,
  },
  _email: {
    fontFamily: Fonts.regular,
    color: WHITE,
    marginTop: 10,
    marginBottom: 20,
  },
  _price: {
    fontFamily: Fonts.bold,
    color: WHITE,
  },
  _balance: {
    fontFamily: Fonts.regular,
    color: WHITE,
    fontSize: 12,
  },
  _list: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  _desc: {
    flex: 1,
  },
});
export default Transactions;
