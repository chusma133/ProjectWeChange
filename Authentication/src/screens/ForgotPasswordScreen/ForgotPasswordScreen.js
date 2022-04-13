import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSendPressed = async data => {

        try {
            await Auth.forgotPassword(data.username);
            navigation.navigate('NewPasswordScreen');
 
 
         } catch (e) {
             Alert.alert("Oops", e.message);
         }        
        
    };
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');

    };
    
  return (
      <ScrollView showsVerticalScrollIndicator={false}>

    <View style= {styles.root}>
     <Text style= {styles.title}> Reset your Password</Text>

     <CustomInput 
     name= "username"
     control = {control}
     placeholder= "Username" 
     rules = {{
         required : ' Username is required'
     }}
     />

     <CustomButton text ="Send" onPress={handleSubmit(onSendPressed)} />

<CustomButton 
text= " Back to Sign in"
onPress={onSignInPressed} 
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

title: {
    fontSize:24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
},
text: {
    color: 'gray',
    marginVertical:10,
    },
    link :
    {
        color: '#FDB075',
    }
})

export default ForgotPasswordScreen;