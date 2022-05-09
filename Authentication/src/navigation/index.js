import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SvgXml, WithLocalSvg} from 'react-native-svg';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import BirthdayScreen from '../screens/BirthdayScreen/BirthdayScreen';
import {Auth, Hub} from 'aws-amplify';
import Login from './../screens/login';
import Discover from './../screens/discover';
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
          <Stack.Screen name="Comments" component={Comments} />
            <Stack.Screen name="AddClique" component={AddClique} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

            <Stack.Screen
              name="ConfirmEmailScreen"
              component={ConfirmEmailScreen}
            />
            <Stack.Screen
              name="ForgotPasswordScreen"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name="NewPasswordScreen"
              component={NewPasswordScreen}
            />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name= "BirthayScreen" component={BirthdayScreen} />
            <Stack.Screen name="NewClique" component={NewClique} />

            <Stack.Screen name="Login" component={Login} />
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
      <Tab.Screen name="Search" component={Shopping} />
      <Tab.Screen name="WeShop" component={NewPost} />
      <Tab.Screen name="WeChange" component={SelectClique} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default Navigation;
