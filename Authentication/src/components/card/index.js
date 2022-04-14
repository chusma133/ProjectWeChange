import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Typography from "./../../typography";
import Wishlist_Gray from "./../../../assets/Assets/Wishlist_Gray.svg";
import Wishlist_Red from "./../../../assets/Assets/Wishlist_Red.svg";
let Card = (props) => {
  let [cardData, setCardData] = useState([
    {
      cardImageUrl: require("./../../../assets/Assets/Product01.jpg"),
      off: 50,
      title: "Collar Jacket",
      isSave: false,
      currentPrice: 100,
      oldPrice: 200,
    },
    {
      cardImageUrl: require("./../../../assets/Assets/Product02.jpg"),
      off: 30,
      title: "Collar Jacket",
      isSave: false,
      currentPrice: 120,
      oldPrice: 240,
    },
    {
      cardImageUrl: require("./../../../assets/Assets/Product03.jpg"),
      off: 50,
      title: "Collar Jacket",
      isSave: false,
      currentPrice: 150,
      oldPrice: 240,
    },
    {
      cardImageUrl: require("./../../../assets/Assets/Product01.jpg"),
      off: 50,
      title: "Collar Jacket",
      isSave: false,
      currentPrice: 100,
      oldPrice: 200,
    },
    {
      cardImageUrl: require("./../../../assets/Assets/Product02.jpg"),
      off: 50,
      title: "Collar Jacket",
      isSave: false,
      currentPrice: 120,
      oldPrice: 240,
    },
    {
      cardImageUrl: require("./../../../assets/Assets/Product03.jpg"),
      off: 50,
      title: "Collar Jacket",
      isSave: false,
      currentPrice: 150,
      oldPrice: 240,
    },
  ]);
  return (
    <View style={styles._card_main}>
      {cardData.map((v, i) => {
        return (
          <TouchableOpacity
            style={styles._card}
            key={i}
            onPress={() => props.path.navigate("ProductDetail")}
          >
            <Image source={v.cardImageUrl} style={styles._card_image} />
           
            <View style={styles._card_title_main}>
              <Text style={styles._card_title}>{v.title}</Text>
             
            </View>
          
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
let styles = StyleSheet.create({
  _card_main: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  _card: {
    width: "48%",
    marginTop: 10,
    marginBottom: 10,
  },
  _card_image: {
    width: "100%",
    height: 170,
    borderRadius: 15,
  },
  _off_main: {
    position: "absolute",
    right: 0,
    top: 13,
    backgroundColor: Typography.white,
    elevation: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingHorizontal: 10,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  _off: {
    fontFamily: Typography.medium,
    color: Typography.greenLight,
    fontSize: 12,
  },
  _card_title_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  _card_title: {
    fontFamily: Typography.medium,
    color: Typography.gray1,
    fontSize: 14,
  },
  _price_main: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  _current_price: {
    fontFamily: Typography.semiBold,
    color: Typography.gray1,
    fontSize: 15,
  },
  _old_price: {
    fontFamily: Typography.medium,
    color: Typography.gray2,
    fontSize: 12,
    marginLeft: 5,
    textDecorationLine: "line-through",
  },
});
export default Card;
