import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import {BLACK, WHITE} from '../styles/Colors';
import WeChangeButton from '../components/WeChangeButton';
import {height, width} from '../styles/Others';
import Fonts from '../styles/Fonts';

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUp = () => {
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {
      username: 'Default username',
    },
  });
  const pwd = watch('password');
  const {navigate} = useNavigation();

  const onRegisterPressed = async data => {
    const {username, password, email, name} = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
          preferred_username: username,
        },
      });

      navigate('ConfirmEmailScreen', {username});
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <Text style={styles.title}>SIGN UP</Text>

      <CustomInput
        name="name"
        placeholder="First Name"
        control={control}
        rules={{
          required: 'Name is required',
          minLength: {
            value: 1,
            message: 'Username should be at least 1 characters long',
          },
          maxLength: {
            value: 20,
            message: 'Username should be max 20 characters long',
          },
        }}
      />
      <CustomInput
        name="name"
        placeholder="Last Name"
        control={control}
        rules={{
          required: 'Name is required',
          minLength: {
            value: 1,
            message: 'Username should be at least 1 characters long',
          },
          maxLength: {
            value: 20,
            message: 'Username should be max 20 characters long',
          },
        }}
      />
      <CustomInput
        name="email"
        placeholder="Email Address"
        control={control}
        rules={{pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
      />
      <CustomInput
        name="phone"
        placeholder="Phone Number"
        control={control}
        rules={{pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
      />
      <View style={{height: 30}} />

      <CustomInput
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be minimum 8 characters long',
          },
          maxLength: {
            value: 30,
            message: 'Password should be max 30 characters long',
          },
        }}
      />

      <CustomInput
        name=" password-repeat"
        placeholder="Repeat Password"
        control={control}
        secureTextEntry={true}
        rules={{
          validate: value => value == pwd || 'Passwords do not match',
        }}
      />
      <WeChangeButton mv={20} onPress={() => navigate('BirthDay')} />

      {/* <Text style= {styles.text}> 
     By registering, you confirm that you accept our {' '}
      <Text style = {styles.link} onPress= {onTermsOfUsePressed}>Terms of Use </Text> and 
      <Text style = {styles.link} onPress= {onPrivacyPressed}>Privacy Policy </Text>
     </Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    backgroundColor: WHITE,
    flex: 1,
    paddingHorizontal: width * 0.1,
  },
  title: {
    fontFamily: Fonts.helveticaRegular,
    fontSize: 24,
    color: BLACK,
    marginVertical: height * 0.05,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUp;
