import { FlatList,SafeAreaView,StatusBar,View,StyleSheet,Image,Text,TouchableOpacity} from "react-native";
import React from "react";
import { BLACK, LIGHT_GRAY, LIGHT_REDISH_WHITE, MID_GRAY, WHITE } from "../styles/Colors";
import { moderateScale } from "../styles/Scalling";
import { USER_INFO } from "../db/data";
import { helveticaBold, helveticaRegular } from "../styles/Fonts";
import { height, width } from "../styles/Others";

export default function Profile() {
  return (<SafeAreaView style={{ flex: 1, backgroundColor: MID_GRAY }}>
    <StatusBar backgroundColor={MID_GRAY} barStyle="light-content" />
    <View style={{flex:1,padding:5,}}>
      <Image style={styles.avatar} source={{uri:USER_INFO.avatar}}/>
      <View style={styles.infoContainer}>
        <Content count={USER_INFO.uploads} title="UPLOADS"/>
        <Content count={USER_INFO.followers} title="FOLLOWERS"/>
        <Content count={USER_INFO.likes} title="LIKES"/>
      </View>
      <Text style={styles.bio}>{USER_INFO.bio}</Text>
      <FlatList
        data={USER_INFO.images}
        renderItem={({ item }) => <TouchableOpacity activeOpacity={0.9} style={styles.image}><Image style={{width:'100%',height:'100%'}} source={{uri:item}}/></TouchableOpacity>}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        numColumns={3}
        style={{ flex: 1, paddingLeft: moderateScale(10)}}
        contentContainerStyle={{paddingTop:12 }}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
avatar:{width:moderateScale(90),height:moderateScale(100),borderRadius:moderateScale(20),
borderWidth:2,borderColor:LIGHT_REDISH_WHITE,alignSelf:'center',marginTop:3},
infoContainer:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginVertical:10,
  marginTop:20,
},
infoText:{
  fontFamily:helveticaBold,
  fontSize:moderateScale(17),
  color:BLACK,
  lineHeight:22
},
bio:{
  fontFamily:helveticaRegular,
  fontSize:moderateScale(14),
  borderRadius:moderateScale(5),
  textAlign:'justify',
  color:WHITE,
  lineHeight:23,
  backgroundColor:BLACK,
  padding:moderateScale(7),
  paddingHorizontal:moderateScale(25),
  paddingTop:23,
},
image:{width: (width - moderateScale(54)) / 3,
height: height * 0.2,
backgroundColor:LIGHT_GRAY,
marginRight: moderateScale(12),
marginBottom: moderateScale(12),
elevation: 2,
borderRadius: moderateScale(2),}
})

const Content = ({count,title})=><View style={{alignItems:'center'}}>
  <Text style={styles.infoText}>{count}</Text>
  <Text style={styles.infoText}>{title}</Text>
</View>
