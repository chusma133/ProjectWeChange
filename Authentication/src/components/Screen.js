import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,Pressable
} from "react-native";
import React,{useEffect,useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BLACK, WHITE } from "../styles/Colors";
import { titleStyle, regularStyle } from "../styles/Typography";
const { width } = Dimensions.get("screen");
import { moderateScale } from "../styles/Scalling";
import { Auth } from 'aws-amplify';
import { useNavigation } from "@react-navigation/native";

export default function Screen({ page, goBack, title, children }) {
  const navigation = useNavigation()
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    checkUser();
  }
  )
  const checkUser = async() => {
    try {
    const authUser= await Auth.currentAuthenticatedUser ({ bypassCache: true});
    console.log(authUser)
    setUser(authUser);
    console.log(user)
    } catch (e) {
      console.log(e)
      setUser(null);
    }
  
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <StatusBar backgroundColor={BLACK} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.row}>
          {/* Homepage */}
          {page == "home" && <><Image
            source={require("../assets/icons/weShop.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>ELITE</Text></>}
          {/* Others page */}
          {goBack && 
          <Pressable onPress={()=>navigation.goBack()}><Image source={require("../assets/icons/leftArrow.png")} style={styles.logo} /></Pressable>}
        </View>
        {/* Middle part */}
        {page == "home" ? <Text style={styles.userId}>{user? user.username:"username"}</Text>:<Text style={styles.title}>{title}</Text>}
        <View style={styles.row}>
        {/* Home page */}
          {page == "home" &&<><Pressable onPress={()=>navigation.navigate("AddClique")}><Image source={require("../assets/icons/verticalLoad.png")} /></Pressable>
          <Image
            source={require("../assets/icons/potleafoutline.png")}
            style={{ marginHorizontal: moderateScale(10) }}
            />
          <Image source={require("../assets/icons/inbox.png")} /></>}
            {/* Others page */}
          {page == "addClique" && 
          <Image source={require("../assets/icons/cog.png")} style={styles.logo} />}
          {page == "selectClique" && 
          <Image source={require("../assets/icons/fingerPrintWhite.png")} style={styles.fingerLogo} />}
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  header: {
    width: width + 2,
    backgroundColor: BLACK,
    height:60,
    padding: 5,
    paddingHorizontal: moderateScale(14),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
    borderColor: WHITE,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginLeft: -1,
  },
  logo: {
    height: moderateScale(23),
    width: moderateScale(23),
    marginRight: moderateScale(1),
  },
  fingerLogo: {
    height: moderateScale(28),
    width: moderateScale(26),
    marginRight: moderateScale(1),
  },
  logoText: {
    ...titleStyle,
    fontSize: moderateScale(23),
  },
  title: {
    ...regularStyle,
    fontSize: moderateScale(15),
    textTransform:'uppercase'
  },
  userId: { ...regularStyle, fontSize: moderateScale(13) },
});
