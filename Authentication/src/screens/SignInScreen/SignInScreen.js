import React, {useState} from 'react'
import { View, Text,TextInput, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo.jpg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
const SignInScreen = () => {
    const{height} = useWindowDimensions();
    const navigation= useNavigation();

    const {control, handleSubmit, formState : {errors},}= useForm();
console.log(errors);
    const onSignInPressed = (data) => {
        console.log(data);
        // validate user
        navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
    };

    const onForgotPasswordPressed= () =>
    {
        navigation.navigate('ForgotPasswordScreen');
    };

    const onSignupPressed = () => {
        navigation.navigate('SignUpScreen');

    };

  return (
      <ScrollView>
    <View style= {styles.root}>
     <Image 
     source={Logo} 
     style={[styles.logo, {height: height* 0.3}]} 
     resizeMode="contain" 
     />

    <CustomInput 
    name= "username"
     placeholder= "Username" 
     control= {control}
     rules= {{required:'Username is required'}}
     />

     <CustomInput 
     name= "password"
     placeholder= "Password" 
     secureTextEntry
     control= {control}
     rules= {{required:'Password is required',
    minLength: {value: 8, message: 'Password should be minimum 8 characters long'},
    }}
     />


     <CustomButton text= "Sign in" onPress={handleSubmit(onSignInPressed)} /> 

     <CustomButton text= "Forgot password?" 
     onPress={onForgotPasswordPressed} 
     type= 'TERTIARY'
     />  

     <SocialSignInButtons />


<CustomButton 
text= "Dont have an account? Create one" 
onPress={onSignupPressed} 
type= 'TERTIARY'
     /> 
   
    </View>
    </ScrollView>
  );
};

const styles= StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F9FBFC'
    },
logo:{
    width: '100%',
    maxWidth: 300,
    height: '100%',
    maxHeight: 200,
},

})

export default SignInScreen