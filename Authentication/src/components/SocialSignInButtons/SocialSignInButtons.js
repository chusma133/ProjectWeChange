import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
    const onSignInFacebook= () => {
        console.warn('onSignInFacebook');
    };

    const onSignInGoogle= () => {
        console.warn('onSigninGoogle');
    };

    const onSignInApple= () => {
        console.warn('onSigninApple');
    };
  return (
    <>
   <CustomButton 
     text= "Sign in with Facebook"
     onPress={onSignInFacebook}
     bgColor= "#E7EAF4"
     fgColor= "gray"
     />

     <CustomButton 
     text= "Sign in with Google" 
     onPress={onSignInGoogle} 
     bgColor= "#FAE9EA"
     fgColor= "red"
     /> 
     <CustomButton 
     text= "Sign in with Apple" 
     onPress={onSignInApple} 
     bgColor= '#e3e3e3'
     fgColor="gray"
     /> 
    </>
  );
};

export default SocialSignInButtons