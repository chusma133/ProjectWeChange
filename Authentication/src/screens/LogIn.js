import {View} from 'react-native';
import React from 'react';
import LogoScreen from '../components/LogoScreen';
import { width} from '../styles/Others';
import {useNavigation} from '@react-navigation/native';
import Input from '../components/Input';
import {ImportantLink, Link} from '../components/Text';
import WeChangeButton from '../components/WeChangeButton';

export default function LogIn() {
  const {navigate} = useNavigation();
  return (
    <LogoScreen page="LogIn">
      <View
        style={{width: width * 0.8, marginVertical: 10, alignItems: 'center'}}>
        <Input placeholder="Email/Mobile Number" borderRadius={100} mb={20} />
        <Input placeholder="Password" borderRadius={100} mb={10} />

        <Link text="Or login with Social network" onPress={()=>navigate("SocialLogIn")}/>
        <WeChangeButton mv={15} onPress={()=>navigate("Birthday")}/>
        <Link text="Forgot Your Password?" onPress={()=>navigate("ForgotPassword")}/>
        <View style={{height: 10}} />
        <Link text="Don't have an account?" />
        <ImportantLink text="Sign up" onPress={()=>navigate("SignUp")}/>
      </View>
    </LogoScreen>
  );
}
