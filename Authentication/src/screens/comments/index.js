import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import typography from "../../typography";
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";

let Comments = ({ navigation }) => {
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
  const slider = [
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },

    {
      title: "",
    },
    {
      title: "",
    },
  ];
  return (
    <SafeAreaView style={styles._container}>
      <View style={styles._header}>
        <TouchableOpacity
          style={styles._back_icon}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={44}
            color={typography.white}
          />
        </TouchableOpacity>
        <Text style={styles._comments}>COMMENTS</Text>
      </View>
      <ScrollView horizontal>
        {slider.map(() => {
          return (
            <TouchableOpacity style={styles._item}>
              <Text>lsd</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* transcation list */}
      {/*  */}
      <View style={styles._body}>
        <Text
          style={{
            fontFamily: typography.regular,
            color: "white",
            alignSelf: "center",
          }}
        >
          TRANSACTIONS
        </Text>
        <ScrollView>
          {transaction.map((val, i) => {
            return (
              <TouchableOpacity style={styles._list} key={i}>
                <Image
                  source={require("./../../../assets/avatar2.png")}
                  height={30}
                  width={30}
                  style={{ borderRadius: 100, marginRight: 10 }}
                />
                <View style={styles._desc}>
                  <Text style={{ fontFamily: typography.regular }}>
                    {val.email}
                  </Text>
                  <Text style={{ fontFamily: typography.regular }}>
                    {val.for}
                  </Text>
                </View>
                <Text style={{ fontFamily: typography.regular }}>
                  {val.price}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* footer */}
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    // backgroundColor: Typography.white,
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
    backgroundColor: "black",
    justifyContent: "center",
    height: 80,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderWidth: 1,
    borderColor: "white",
    borderTopWidth: 0,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  _body: {},
  _bg: {
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
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
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
  _desc: {
    flex: 1,
  },
  _comments: {
    fontFamily: typography.bold,
    color: typography.white,
  },
  _back_icon: {
    position: "absolute",
    left: 0,
  },
  _item: {
    height: 109,
    width: 66,
    borderRadius: 20,
    backgroundColor: "#C4C4C4",
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Comments;
