import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,Text
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {BLACK, WHITE} from '../styles/Colors';
import {height, width} from '../styles/Others';
import Fonts from '../styles/Fonts';
import { Link } from './Text';

export default function LogoScreen({page, children}) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <View style={styles.container}>
        {page== "LogIn"&& <Text style={styles.welcome}>WELCOME</Text>}
        <Image
          source={require('../../assets/images/panda.png')}
          style={styles.logo}
        />
        <Link text="Login to your account"/>
      </View>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{height: height * 0.43,paddingBottom: height * 0.02, justifyContent: 'flex-end',alignItems:'center'},
  logo: {
    width: width * 0.45,
    height: width * 0.45,
  },
  screen: {
    alignItems: 'center',
    backgroundColor: WHITE,
    flex: 1,
  },
  welcome:{
    fontFamily:Fonts.helveticaRegular,
    fontSize:24,
    color:BLACK,
  marginBottom:height*.035  }
});
