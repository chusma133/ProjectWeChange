import {View, TextInput, StyleSheet,Text} from 'react-native';
import React from 'react';
import LogoScreen from '../components/LogoScreen';
import {height, width} from '../styles/Others';
import {useNavigation} from '@react-navigation/native';
import WeChangeButton from '../components/WeChangeButton';
import {moderateScale} from '../styles/Scalling';
import {BLACK, GRAY, WHITE} from '../styles/Colors';
import Fonts from '../styles/Fonts';
import LinearGradient from 'react-native-linear-gradient';

export default function Username() {
  const {navigate} = useNavigation();
  return (
    <LogoScreen page="Username">
      <View
        style={{width: width * 0.8, marginVertical: 10, alignItems: 'center'}}>
        <LinearGradient
          colors={[BLACK, GRAY]}
          style={styles.linearGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
              <Text style={{fontFamily:Fonts.bold,fontSize:18,color:WHITE,marginLeft:10}}>WE @</Text>
          <TextInput style={styles.input} placeholderTextColor={WHITE} placeholder="Username"/>
        </LinearGradient>
        <WeChangeButton onPress={() => navigate('Main')} />
      </View>
    </LogoScreen>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 100,
    width: '100%',
    height: 50,
    marginBottom: height * 0.12,
    borderWidth: 2,
    borderColor: WHITE,
    elevation: 3,
    borderRadius: 100,
    flexDirection:'row',
    alignItems:'center'
  },
  input: {
    padding: moderateScale(15),
    width: '100%',
    height: 50,
    // backgroundColor:BLACK,
    fontFamily: Fonts.regular,
    color: WHITE,
    fontSize: moderateScale(16),
    textTransform: 'uppercase',
  },
});
