import React from 'react'
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../styles/Colors";
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
      borderColor:Colors.lightGray,
      borderWidth:header?0:1.3,
    }}
  >
    {header && <AntIcon name="arrowleft" size={25} color={Colors.gray} style={{marginRight:10}} 
          onPress={() => navigation.goBack()}/>}
    <Icon name="search" size={20} color={Colors.gray} onPress={onSearch}/>
    <TextInput
      style={{
        width: "100%",
        height: 30,
        marginLeft: 10,
        ...caption,
        fontSize: 18,
        color: Colors.black,
        letterSpacing: 0.4,
      }}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
      onSubmitEditing={onSearch}
      {...props}
    />
  </View>
);
