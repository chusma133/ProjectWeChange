import React from 'react'
import { ActivityIndicator } from "react-native";
import Colors from "../styles/Colors";
import { height } from "../styles/Others";

export const Loading = () => (
  <ActivityIndicator
    size="large"
    style={{ marginTop: height * 0.3 }}
    color={Colors.chineseOrange}
  />
);
