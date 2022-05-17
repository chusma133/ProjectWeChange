import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {WHITE} from '../styles/Colors';
import {height, width} from '../styles/Others';

export default function LogoScreen({page, children}) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <View style={{height: height * 0.35, justifyContent: 'flex-end'}}>
        <Image
          source={require('../../assets/images/panda.png')}
          style={styles.logo}
        />
      </View>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: width * 0.5,
    height: width * 0.5,
  },
  screen: {
    alignItems: 'center',
    backgroundColor: WHITE,
    flex: 1,
  },
});
