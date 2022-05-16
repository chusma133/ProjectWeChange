import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { BLACK, WHITE } from "../styles/Colors";
import { moderateScale } from "../styles/Scalling";

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: BLACK,
        borderColor: WHITE,
        borderTopWidth: 1,
        paddingVertical: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        let image;
        switch (route.name) {
          case "Home":
            image = require("../../assets/icons/home.png");
            break;
          case "Search":
            image = require("../../assets/icons/search.png");
            break;
          case "WeShop":
            image = require("../../assets/icons/weShop.png");
            break;
          case "WeChange":
            image = require("../../assets/icons/weChange.png");
            break;
          case "Profile":
            image = require("../../assets/icons/profile.png");
            break;
        }
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={image}
              style={{ transform: [{ scale: isFocused ? moderateScale(1.2) : moderateScale(1) }] }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
