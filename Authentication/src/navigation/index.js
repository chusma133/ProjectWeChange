import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SvgXml, WithLocalSvg} from 'react-native-svg';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import BirthdayScreen from '../screens/BirthdayScreen';
import {Auth, Hub} from 'aws-amplify';
import Discover from './../screens/Discover';
import Home from '../screens/Home';
import Shopping from '../screens/Shopping';
import NewPost from '../screens/NewPost';
import SelectClique from '../screens/SelectClique';
import Profile from '../screens/Profile';
import AddClique from '../screens/AddClique';
import NewClique from '../screens/NewClique';
import MyTabBar from '../components/MyTabBar';
import Comments from './../screens/Comments';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Typography from './../typography';
import CliquePrimeVideo from '../screens/CliquePrimeVideo';
import RequestFund from '../screens/RequestFund';
import Shop from '../screens/Shop';
import Transactions from '../screens/Transactions';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  useEffect(() => {
    checkUser();
  });
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  {
    /*useEffect(() => {
    const listener = data => {
if (data.payload.event == 'signIn' || data.payload.event == 'signOut') {
  checkUser();
}
    };

    Hub.listen ('auth', listener);
    return () => Hub.remove ('auth', listener);
  }, []);

  if (user==undefined){
    return (
      <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator/>
      </View>
    )
  }*/
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="Main" component={Main} />
          </>     
        ) : ( 
          <>
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name= "BirthdayScreen" component={BirthdayScreen} />
          <Stack.Screen name="Comments" component={Comments} />
          <Stack.Screen name= "NewPasswordScreen" component={NewPasswordScreen} />
          <Stack.Screen name= "Shop" component={Shop} />
          <Stack.Screen
          name="ConfirmEmailScreen" 
          component={ConfirmEmailScreen}  
        />
          <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="AddClique" component={AddClique} />

          <Stack.Screen name= "RequestFund" component={RequestFund} /> 
            
            <Stack.Screen
              name="ForgotPasswordScreen"
              component={ForgotPasswordScreen}
            />
          <Stack.Screen name="Transactions" component={Transactions} />
            
            <Stack.Screen name="CliquePrimeVideo" component={CliquePrimeVideo} />
            <Stack.Screen name="NewClique" component={NewClique} />
            <Stack.Screen name="SelectClique" component={SelectClique} />
            <Stack.Screen name="NewPost" component={NewPost} />
            <Stack.Screen name="Shopping" component={Shopping} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function Main() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Discover} />
      <Tab.Screen name="WeShop" component={Shopping} />
      <Tab.Screen name="WeChange" component={SelectClique} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  ); 
}
export default Navigation;
