import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/index';
import BirthdayScreen from '../screens/BirthdayScreen/BirthdayScreen';
import {Auth, Hub} from 'aws-amplify';
import Login from './../screens/login';
import Home from './../screens/home';
import Discover from './../screens/discover';
import Profile from './../screens/profile';
import Shop from './../screens/shop';
import WeChange from './../screens/wechange';
import Comments from './../screens/comments';
import RequestFund from './../screens/comments';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Typography.secondry,
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          position: "absolute",
          bottom: 0,
          // elevation: 9,
          height: 60,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles._tab_icon_main}>
              <Home_Active
                fill={Typography.primary}
                height={30}
                width={30}
                style={styles._tab_icon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles._tab_icon_main}>
              <Dicover_Active height={30} width={30} style={styles._tab_icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles._tab_icon_main}>
              <Shop_Active
                fill={Typography.primary}
                height={30}
                width={30}
                style={styles._tab_icon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="WeChange"
        component={WeChange}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles._tab_icon_main}>
              <WeCover height={30} width={30} style={styles._tab_icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles._tab_icon_main}>
              <Profile_Active height={30} width={30} style={styles._tab_icon} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
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
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{headerShown: false}}
          />
        ) : (
          // <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <>
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
            {/*<Stack.Screen name= " BirthayScreen" component={BirthdayScreen} />*/}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="Comments"
              component={Comments}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RequestFund"
              component={RequestFund}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
