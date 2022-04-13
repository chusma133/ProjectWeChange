import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {
    const route= useRoute();
   const{control, handleSubmit, watch} = useForm({
       defaultValues:  { username: route?.params?.username},
   });

   const username= watch('username');

    const navigation = useNavigation();


    const onConfirmPressed = async data => {
        try {
           await Auth.confirmSignUp(data.username, data.code);
           navigation.navigate('SignInScreen');


        } catch (e) {
            Alert.alert("Oops", e.message);
        }
    };
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');
    };

    const onResendPressed = async () => {
        try {
            await Auth.resendSignUp(username);
            Alert.alert("Success", 'Code was resent!');

 
         } catch (e) {
             Alert.alert("Oops", e.message);
         }
    };

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style= {styles.root}>
     <Text style= {styles.title}> Confirm your email</Text>

     <CustomInput 
     name="username"
     control= {control}
     placeholder= "Username" 
     rules= {{
         required: 'Username code is required',
     }}
     />

     <CustomInput 
     name="code"
     control= {control}
     placeholder= "Enter your confirmation code" 
     rules= {{
         required: 'Confirmation code is required',
     }}
     />

     <CustomButton text ="Confirm" onPress={handleSubmit(onConfirmPressed)} />

     <CustomButton 
text= " Resend Code"
onPress={onResendPressed} 
type= 'SECONDARY'
     /> 
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

export default ConfirmEmailScreen;