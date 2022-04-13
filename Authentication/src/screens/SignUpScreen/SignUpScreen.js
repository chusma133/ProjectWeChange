import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const EMAIL_REGEX= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const SignUpScreen = () => {
    const {control, handleSubmit, watch} = useForm({
        defaultValues: 
        {
            username : 'Default username'
        },
    });
    const pwd= watch('password');
    const navigation= useNavigation();

    const onRegisterPressed = async(data) => {
        const {username, password, email, name} = data;
        try {
            await Auth.signUp({
                username,
                password,
                attributes : {
                    email,
                    name,
                    preferred_username: username},
            });

            navigation.navigate('ConfirmEmailScreen', {username}) ;

        } catch (e) {
            Alert.alert('Oops', e.message);
        }
    };
    
    const onSignInPressed = () => {
        navigation.navigate('SignInScreen');
    };

    const onTermsOfUsePressed = () => {
        console.warn('OnTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style= {styles.root}>
     <Text style= {styles.title}> Create an account</Text>

     <CustomInput 
     name= "name"
     placeholder= "Name" 
     control= {control}
     rules= {{required:'Name is required', 
    minLength : { 
        value: 1,
        message: 'Username should be at least 1 characters long',
    },
    maxLength: 
    {
        value: 20,
        message: 'Username should be max 20 characters long',
    },
    }}
     />

     <CustomInput 
     name= "username"
     placeholder= "Username" 
     control= {control}
     rules= {{required:'Username is required', 
    minLength : { 
        value: 4,
        message: 'Username should be at least 4 characters long',
    },
    maxLength: 
    {
        value: 20,
        message: 'Username should be max 20 characters long',
    },
    }}
     />

     <CustomInput
     name= "email"
     placeholder= "Email"
     control= {control}
     rules ={{pattern : {value: EMAIL_REGEX, message : 'Email is invalid' }}}
     />

     <CustomInput 
     name= "password"
     placeholder= "Password" 
     control= {control}
     secureTextEntry={true}
     rules= {{required:'Password is required',
   minLength: {value: 8, message: 'Password should be minimum 8 characters long'},
   maxLength: 
    {
        value: 30,
        message: 'Password should be max 30 characters long',
    },
    }}
     />

     <CustomInput 
    name= " password-repeat"
    placeholder= "Repeat Password" 
    control= {control}
    secureTextEntry={true}
    rules = {{ 
        validate: value => 
        value == pwd || 'Passwords do not match',
    }}
     />

     <CustomButton text= "Register" onPress={handleSubmit(onRegisterPressed)} /> 

     <Text style= {styles.text}> 
     By registering, you confirm that you accept our {' '}
      <Text style = {styles.link} onPress= {onTermsOfUsePressed}>Terms of Use </Text> and 
      <Text style = {styles.link} onPress= {onPrivacyPressed}>Privacy Policy </Text>
     </Text>

     <SocialSignInButtons/>

<CustomButton 
text= "Have an account? Sign in" 
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

export default SignUpScreen