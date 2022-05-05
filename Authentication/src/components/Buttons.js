import React from "react";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../styles/Colors";
import Fonts from "../styles/Fonts";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export const ButtonOutlined = ({ ...props }) => {
  return (
    <Button
      buttonStyle={{
        borderColor: Colors.lightGray,
        borderWidth: 2,
        borderRadius: 50,
        paddingHorizontal: 14,
        overflow: "hidden",
      }}
      type="outline"
      containerStyle={{ overflow: "hidden",borderRadius: 50,marginLeft:10,}}
      titleStyle={{ color: Colors.black }}
      {...props}
    />
  );
};
export const RegularButton = ({ icon,...props }) => {
  return (
    <Button
      containerStyle={{ overflow: "hidden", borderRadius: 5,marginVertical:10}}
      ViewComponent={LinearGradient}
      titleStyle={{ color: Colors.white, fontFamily: Fonts.bold, fontSize: 20 }}
      linearGradientProps={{
        colors: [Colors.lightSalmon,Colors.chineseOrange,Colors.vermilion,Colors.smokeyTopaz],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      icon={
        <MaterialIcon
          name={icon}
          size={22}
          color="#fff"
          style={{ marginRight: 10 }}
        />
      }
      {...props}
    />
  );
};
