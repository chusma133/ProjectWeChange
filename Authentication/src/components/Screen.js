import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BLACK, WHITE} from '../styles/Colors';
import {titleStyle, regularStyle} from '../styles/Typography';
const {width} = Dimensions.get('screen');
import {moderateScale} from '../styles/Scalling';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../styles/Fonts';
import SearchComp from './SearchComp';

export default function Screen({page, goBack, title, children}) {
  const navigation = useNavigation();
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    checkUser();
  });
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log(authUser);
      setUser(authUser);
      console.log(user);
    } catch (e) {
      console.log(e);
      setUser(null);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <StatusBar backgroundColor={BLACK} barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.row}>
            {/* Homepage */}
            {page == 'home' && (
              <>
                <Image
                  source={require('../../assets/icons/weShop.png')}
                  style={styles.logo}
                />
                <Image
                  source={require('../../assets/images/ELITE.png')}
                  style={styles.logoElite}
                />
              </>
            )}
            {/* Others page */}
            {goBack && (
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  source={require('../../assets/icons/leftArrow.png')}
                  style={styles.logo}
                />
              </Pressable>
            )}
          </View>
          {/* Middle part */}
          {page == 'home' ? (
            <Text style={styles.userId}>
              {user ? user.username : 'username'}
            </Text>
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
          <View style={styles.row}>
            {/* Home page */}
            {page == 'home' && (
              <>
                <Pressable onPress={() => navigation.navigate('AddClique')}>
                  <Image
                    source={require('../../assets/icons/verticalLoad.png')}
                  />
                </Pressable>
                <Image
                  source={require('../../assets/icons/potleafoutline.png')}
                  style={{marginHorizontal: moderateScale(10)}}
                />
                <Pressable onPress={() => navigation.navigate('Messages')}>
                  <Image source={require('../../assets/icons/inbox.png')} />
                </Pressable>
              </>
            )}
            {/* Others page */}
            {page == 'addClique' && (
              <Image
                source={require('../../assets/icons/cog.png')}
                style={styles.logo}
              />
            )}
            {page == 'selectClique' && (
              <Image
                source={require('../../assets/icons/fingerPrintWhite.png')}
                style={styles.fingerLogo}
              />
            )}
          </View>
        </View>
        {page == 'Messages' && (
          <View
            style={{
              ...styles.row,
              width,
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <SearchComp width={width * 0.75} mb={10} />
                <Pressable onPress={() => navigation.navigate('NewMessage')}>
            <Image
              source={require('../../assets/icons/createMessage.png')}
              style={{...styles.fingerLogo, marginBottom: 17}}
            /></Pressable>
          </View>
        )}
        {page == 'NewMessage' && (
          <View
            style={{
              ...styles.row,
              paddingBottom: 5,
              paddingRight: 10,
              alignSelf: 'flex-end',
            }}>
            <Image
              source={require('../../assets/icons/users.png')}
              style={{...styles.fingerLogo, marginRight: 3}}
            />
            <Text
              style={{color: WHITE, fontFamily: Fonts.regular, fontSize: 10}}>
              NEW GROUP
            </Text>
          </View>
        )}
      </View>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  headerContainer: {
    width: width + 2,
    backgroundColor: BLACK,
    borderBottomLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
    borderColor: WHITE,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginLeft: -1,
  },
  header: {
    width: width + 2,
    padding: 5,
    paddingHorizontal: moderateScale(14),
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    marginRight: moderateScale(1),
  },
  logoElite: {
    height: moderateScale(22),
    width: moderateScale(51),
    marginRight: moderateScale(1),
  },
  fingerLogo: {
    marginRight: moderateScale(1),
  },
  logoText: {
    ...titleStyle,
    fontSize: moderateScale(23),
  },
  title: {
    fontFamily: Fonts.helveticaRegular,
    color: WHITE,
    fontSize: moderateScale(17),
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  userId: {...regularStyle, fontSize: moderateScale(16)},
});
