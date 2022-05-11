import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { height, width } from "../styles/Others";
import Input from "../components/Input";
import { moderateScale } from "../styles/Scalling";
import { BLACK, GRAY, LIGHT_GRAY, WHITE } from "../styles/Colors";
import { regularStyle } from "../styles/Typography";

export default function NewPost({ navigation }) {
  return (
    <Screen page="newPost" title="New Post">
      <ScrollView
        style={{ padding: 5 }}>
        <View style={{ flexDirection: "row", width: width - 10, marginVertical: 6 }}>
          <Image
            // source={{ uri: item.image }}
            style={styles.captionImage}
          />
          <Input
            placeholder="CAPTION"
            width={width * 0.8 - 18}
            height={height * 0.15}/>
        </View>
        <PostItem
          placeholder="TAG PEOPLE"
          onClique={() => {}}
          width={width - moderateScale(75)}
          borderRadius={50}
        />
        <PostItem
          placeholder="ADD LOCATION"
          onClique={() => {}}
          width={width - moderateScale(75)}
          borderRadius={50}
        />
        <View style={styles.buttons}>
          <TouchableOpacity activeOpacity={0.8} style={styles.upload} onPress={()=>navigation.navigate('SelectClique')}>
            <Text style={styles.buttonText}>UPLOAD TO CLIQUE</Text>
          </TouchableOpacity>
          <View style={{width:1,height:'100%',backgroundColor:WHITE}}/>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.upload,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,}}
              onPress={()=>navigation.navigate('NewClique')}>
            <Text style={styles.buttonText}>NEW CLIQUE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}

const PostItem = ({ onClique, ...props }) => (
  <View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
      }}
    >
      <Input {...props} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          height: moderateScale(47),
          width: moderateScale(45),
          borderRadius: moderateScale(50),
          backgroundColor: BLACK,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={onClique}
      >
        <Image
          source={require("../assets/icons/fingerPrintWhite.png")}
          style={{ height: moderateScale(33), width: moderateScale(25) }}
        />
      </TouchableOpacity>
    </View>
    <Image
      // source={{ uri: item.image }}
      style={{
        width: width - 24,
        marginHorizontal: 7,
        height: 150,
        borderRadius: moderateScale(12),
        backgroundColor: GRAY,
      }}
    />
  </View>
);
const styles = StyleSheet.create({
  captionImage: {
    width: width * 0.2,
    height: height * 0.15,
    borderRadius: moderateScale(10),
    backgroundColor: LIGHT_GRAY,
  },
  buttons: {
    width: width - 40,
    flexDirection: "row",
    height: 50,
    backgroundColor: BLACK,
    margin: 20,
    borderRadius: 15,
  },
  upload: {
    height: "100%",
    width: "50%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...regularStyle,
    fontSize: moderateScale(15),
    textAlign: "center",
  },
});
