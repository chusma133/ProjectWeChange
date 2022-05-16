import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
const NewPasswordScreen = () => {
  
    const {control, handleSubmit} = useForm();
    const navigation= useNavigation ();

    const onSubmitPressed = async data => {

        try {
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password)
            navigation.navigate('SignInScreen');
 
 
         } catch (e) {
             Alert.alert('Oops', e.message);
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
     placeholder= "Username" 
     name = "username"
     control= {control}
     rules= {{
         required: 'Username is required'
     }}
     />
     
     <CustomInput 
     placeholder= "Code" 
     name = "code"
     control= {control}
     rules= {{
         required: 'code is required'
     }}
     />

<CustomInput 
     placeholder= "Enter your new password" 
     name = "password"
     control= {control}
     secureTextEntry
     rules= {{
         required:'Password is required',
   minLength: {
       value: 8, 
       message: 'Password should be minimum 8 characters long'
},
   
     }}
     />

     <CustomButton text ="Sumbit" onPress={handleSubmit(onSubmitPressed)} />

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

export default NewPasswordScreen;