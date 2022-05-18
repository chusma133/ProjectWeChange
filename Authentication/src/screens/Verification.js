import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import {BLACK, WHITE} from '../styles/Colors';
import Fonts from '../styles/Fonts';
import {SecText} from '../components/Text';
import WeChangeButton from '../components/WeChangeButton';
import {height, width} from '../styles/Others';

import CountryPicker, {
  DARK_THEME,
} from 'react-native-country-picker-modal';
import {moderateScale} from '../styles/Scalling';
import { useNavigation } from '@react-navigation/native';
const Verification = () => {
  const {navigate} = useNavigation()
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <View style={{paddingHorizontal: width * 0.05, alignItems: 'center'}}>
        <Text style={styles.title}>Verify your phone number</Text>
        <SecText text="We will send you an SMS with a code to ..." mt={20} />
        <SecText text="enter number" mt={20} />
        <View style={styles.picker}>
          <CountryPicker
            onSelect={country => console.log(country)}
            theme={DARK_THEME}
            withFilter
            withAlphaFilter
            withCallingCode
            withCallingCodeButton
            placeholder="+91"
            countryCode="CA"
            containerButtonStyle={{
              height: 50,
              marginRight: 5,
              alignItems: 'center',
              justifyContent: 'center',
              color: WHITE,
            }}
          />
          <Image source={require('../../assets/icons/dropDown.png')} />
          <TextInput
            style={styles.input}
            placeholderTextColor={WHITE}
            placeholder="9483943974"
          />
        </View>
      </View>
      <WeChangeButton mt={height * 0.25} onPress={() => navigate('OTP')} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: WHITE,
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.3,
  },
  title: {
    fontFamily: Fonts.helveticaRegular,
    fontSize: 24,
    color: BLACK,
    marginTop: height * 0.05,
  },
  picker: {
    borderRadius: 100,
    width: width * 0.88,
    height: 50,
    marginTop: height * 0.05,
    borderWidth: 2,
    borderColor: WHITE,
    elevation: 3,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BLACK,
    paddingLeft:10,
  },
  input: {
    padding: moderateScale(15),
    width: '100%',
    height: 50,
    fontFamily: Fonts.bold,
    color: WHITE,
    fontSize: moderateScale(16),
  },
});

export default Verification;
