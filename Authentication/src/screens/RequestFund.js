import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import Typography from "../typography";
import typography from "../typography";
import  Ionicons  from "react-native-vector-icons/Ionicons";
let RequestFund = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
          source={require("../../assets/Request.png")}
          style={{
            width: 62,
            height: 29,
            justifyContent: "center",
            paddingLeft: 8,
            alignSelf: "flex-end",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles._pay}>PAY</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles._header_inner}>
          <View style={styles.header_list}>
            <Text style={styles._to}>To: </Text>
            <TextInput
              placeholder="Name, $Cashtag, SMS, Email"
              placeholderTextColor={"#938f8f"}
              style={styles._input}
            />
          </View>

          <View style={styles.header_list}>
            <Text style={styles._to}>For: </Text>
            <TextInput
              placeholder="dinner, rent, etc"
              placeholderTextColor={"#938f8f"}
              style={styles._input}
            />
          </View>
        </View>

        {/*  */}
      </View>

      {/* transcation list */}
      {/*  */}
      <View style={styles._body}>
        <Text
          style={{
            fontFamily: typography.regular,
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
                <View style={styles._desc}></View>
                <View style={styles._circle}></View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Ionicons
                name="ios-finger-print"
                size={44}
                color="#DA5CE5"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: Typography.white,
  },

  _footer_icons: {
    marginHorizontal: 20,
  },
  _header: {
    // flex: 1.7,
    backgroundColor: "black",
    justifyContent: "center",
    zIndex: -10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingBottom: 30,
    // alignItems: "center",
  },
  _body: {
    flex: 3,
    padding: 10,
    // backgroundColor: typography.white,
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
    backgroundColor: typography.white,
  },
  _email: {
    fontFamily: typography.medium,
    color: typography.white,
    marginTop: 10,
    marginBottom: 20,
  },
  _price: {
    fontFamily: typography.bold,
    color: typography.white,
  },
  _balance: {
    fontFamily: typography.regular,
    color: typography.white,
    fontSize: 12,
  },
  _list: {
    flexDirection: "row",
    alignItems: "center",
    // elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: "grey",
    paddingVertical: 20,
    // marginBottom: 10,
  },
  _desc: {
    flex: 1,
  },
  _pay: {
    color: typography.white,
    fontFamily: typography.medium,
  },
  _header_inner: {
    marginTop: 50,
  },
  header_list: {
    borderBottomWidth: 0.5,
    borderColor: "#FFFFFF",
    padding: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  _to: {
    color: typography.white,
    fontFamily: typography.medium,
  },
  _input: {
    flex: 1,
    color: typography.white,
    fontFamily: typography.medium,
  },
  _circle: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 200,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default RequestFund;
