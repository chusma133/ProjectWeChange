import React from 'react'
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import  { BLACK, gray1, LIGHT_GRAY } from "../styles/Colors";
import { caption } from "../styles/Typography";
import AntIcon from "react-native-vector-icons/AntDesign";

export default SearchBar = ({
  placeholder = "Search anything...",header,
  navigation,
  onSearch,
  ...props
}) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 7,
      paddingHorizontal:header?0:7,
      paddingLeft: header?0:15,
      borderRadius: 10,
      marginVertical: header?5:7,
      marginHorizontal:header?0:15,
      borderColor:LIGHT_GRAY,
      borderWidth:header?0:1.3,
    }}
  >
    {header && <AntIcon name="arrowleft" size={25} color={gray1} style={{marginRight:10}} 
          onPress={() => navigation.goBack()}/>}
    <Icon name="search" size={20} color={gray1} onPress={onSearch}/>
    <TextInput
      style={{
        width: "100%",
        height: 30,
        marginLeft: 10,
        ...caption,
        fontSize: 18,
        color: BLACK,
        letterSpacing: 0.4,
      }}
      placeholder={placeholder}
      placeholderTextColor={gray1}
      onSubmitEditing={onSearch}
      {...props}
    />
  </View>
);
