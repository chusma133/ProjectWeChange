import {View} from 'react-native';
import React from 'react';
import LogoScreen from '../components/LogoScreen';
import { width} from '../styles/Others';
import {useNavigation} from '@react-navigation/native';
import {ImportantLink, Link} from '../components/Text';
import WeChangeButton from '../components/WeChangeButton';

export default function SocialLogIn() {
  const {navigate} = useNavigation();
  return (
    <LogoScreen page="LogIn">
      <View
        style={{width: width * 0.8, marginVertical: 10, alignItems: 'center',justifyContent:'flex-end',flex:1}}>
        <WeChangeButton mv={15} onPress={()=>navigate("Birthday")}/>
        <Link text="Don't have an account?" />
        <ImportantLink text="Sign up" onPress={()=>navigate("SignUp")}/>
        <View style={{height:40}}/>
      </View>
    </LogoScreen>
  );
}
