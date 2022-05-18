import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React,{useEffect} from 'react';
import {width} from '../styles/Others';
import {WHITE} from '../styles/Colors';
import {useNavigation} from '@react-navigation/native'

export default function SplashScreen() {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(async () => {
        navigation.reset({
          index: 0,
          routes: [{ name: "OnBoarding" }]
     })
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <Image
        source={require('../../assets/images/panda.png')}
        style={styles.logo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: width * 0.84,
    height: width * 0.84,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    flex: 1,
  },
});
