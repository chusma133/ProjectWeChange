import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Keyboard,
} from 'react-native';
import {BLACK, GRAY, WHITE} from '../styles/Colors';
import Fonts from '../styles/Fonts';
import {SecText} from '../components/Text';
import WeChangeButton from '../components/WeChangeButton';
import {height, width} from '../styles/Others';
import {useNavigation} from '@react-navigation/native';
const OTP = () => {
  const [part1, setPart1] = useState('');
  const [part2, setPart2] = useState('');
  const [part3, setPart3] = useState('');
  const [part4, setPart4] = useState('');
  const [part5, setPart5] = useState('');
  const [part6, setPart6] = useState('');
  const part1Ref = useRef();
  const part2Ref = useRef();
  const part3Ref = useRef();
  const part4Ref = useRef();
  const part5Ref = useRef();
  const part6Ref = useRef();
  const proceed = useRef();
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <View style={{paddingHorizontal: width * 0.05, alignItems: 'center'}}>
        <Text style={styles.title}>PHONE VERIFICATION</Text>
        <SecText text="Enter your OTP code here" mt={height * 0.05} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width * 0.77,
          }}>
          <TextInput
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            placeholder=""
            textAlign="center"
            maxLength={1}
            value={part1}
            returnKeyType="next"
            keyboardType="number-pad"
            ref={part1Ref}
            onChangeText={value => {
              setPart1(value);
              value && part2Ref.current.focus();
            }}
            style={styles.input}
          />
          <TextInput
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            value={part2}
            textAlign="center"
            maxLength={1}
            keyboardType="number-pad"
            placeholder=""
            returnKeyType="next"
            ref={part2Ref}
            onChangeText={value => {
              setPart2(value);
              value && part3Ref.current.focus();
            }}
            style={styles.input}
          />
          <TextInput
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            value={part3}
            textAlign="center"
            maxLength={1}
            placeholder=""
            returnKeyType="next"
            keyboardType="number-pad"
            ref={part3Ref}
            onChangeText={value => {
              setPart3(value);
              value && part4Ref.current.focus();
            }}
            style={styles.input}
          />
          <TextInput
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            value={part4}
            textAlign="center"
            maxLength={1}
            keyboardType="number-pad"
            placeholder=""
            returnKeyType="next"
            ref={part4Ref}
            onChangeText={value => {
              setPart4(value);
              value && part5Ref.current.focus();
            }}
            style={styles.input}
          />
          <TextInput
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            value={part5}
            textAlign="center"
            maxLength={1}
            placeholder=""
            keyboardType="number-pad"
            returnKeyType="next"
            ref={part5Ref}
            onChangeText={value => {
              setPart5(value);
              value && part6Ref.current.focus();
            }}
            style={styles.input}
          />
          <TextInput
            autoComplete="sms-otp"
            textContentType="oneTimeCode"
            value={part6}
            textAlign="center"
            maxLength={1}
            placeholder=""
            keyboardType="number-pad"
            returnKeyType="next"
            ref={part6Ref}
            onChangeText={value => {
              setPart6(value);
              value && Keyboard.dismiss();
            }}
            style={styles.input}
          />
        </View>
        <SecText text="Didn't you recieved any code?" mt={40} />
        <SecText text="Resend new code" />
      </View>
      <WeChangeButton
        mt={height * 0.08}
        onPress={() => navigate('Username')}
        ref={proceed}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: WHITE,
    flex: 1,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.2,
  },
  title: {
    fontFamily: Fonts.helveticaRegular,
    fontSize: 24,
    color: BLACK,
    marginTop: height * 0.05,
  },
  input: {
    width: (width * 0.65) / 6,
    borderBottomColor: GRAY,
    borderBottomWidth: 1.5,
    fontFamily: Fonts.bold,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: (width - 80) * 0.2,
    marginVertical: 10,
    marginTop: 30,
    color: BLACK,
  },
});

export default OTP;
