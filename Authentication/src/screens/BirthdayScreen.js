import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Alert, Dimensions} from 'react-native';
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
  <Text style= {styles.title}> Are you over 21? </Text>
  <View style= {styles.root}>
     
  <View style={styles.row}>

     <CustomInput 
     placeholder= "Month" 
     name = "month"
     control= {control}
     rules= {{
         required: 'Month is required'
     }}
     />
     
     <CustomInput 
     placeholder= "Day" 
     name = "day"
     control= {control}
     rules= {{
         required: 'Day is required'
     }}
     />

<CustomInput 
     placeholder= "Year" 
     name = "year"
     control= {control}
     secureTextEntry
     rules= {{
         required:'Year is required',
   minLength: {
       value: 4, 
       message: 'Year should be minimum 4 characters long'
},
   
     }}
     />
      </View>
      </View>
<View style= {styles.root2}>
<View style={styles.row}>

     <CustomButton text ="Sumbit" onPress={()=>navigation.navigate('Main')} />

<CustomButton 
text= " Back to Sign in"
onPress={onSignInPressed} 
type= 'TERTIARY'
     /> 
   </View>
    </View>
    </ScrollView>
  );
};
const {height, width} = Dimensions.get('window');
const styles= StyleSheet.create({
    root: {
        justifyContent: 'center',
        width: width*.43,
        height:width*1.2,
        padding: 30,
        
       
    },
    root2: {
        //justifyContent: 'center',
        width: width*.55,
        padding: 30,

    },
    row: {
        flexDirection:"row",
    },

title: {
    textAlign: 'center',
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