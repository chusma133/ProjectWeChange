import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import {BLACK, WHITE} from '../styles/Colors';
import Fonts from '../styles/Fonts';
import {  SecText } from '../components/Text';
import WeChangeButton from '../components/WeChangeButton';
const BirthDay = () => {
  const {control, handleSubmit} = useForm();
  const {navigate} = useNavigation();

  const onSubmitPressed = async data => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigate('SignInScreen');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPressed = () => {
    navigate('SignInScreen');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <Text style={styles.title}> Are you over 21? </Text>
<SecText text="Enter your date of birth" size={11} mt={10}/>
      <View style={styles.row}>
        <CustomInput
        width="27%"
          placeholder="DD"
          name="day"
          control={control}
          rules={{
            required: 'Day is required',
          }}
        />
        <CustomInput
        width="27%"
          placeholder="MM"
          name="month"
          control={control}
          rules={{
            required: 'Month is required',
          }}
        />

        <CustomInput
        width="40%"
          placeholder="YYYY"
          name="year"
          control={control}
          secureTextEntry
          rules={{
            required: 'Year is required',
            minLength: {
              value: 4,
              message: 'Year should be minimum 4 characters long',
            },
          }}
        />
      </View>
      <WeChangeButton mv={height*.12} onPress={()=>navigate('Verification')}/>
    </SafeAreaView>
  );
};
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: height * 0.08,
    width:'100%'
  },

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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default BirthDay;
