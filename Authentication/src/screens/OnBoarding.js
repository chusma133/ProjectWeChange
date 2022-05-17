import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LogoScreen from '../components/LogoScreen';
import Fonts from '../styles/Fonts';
import {BLACK} from '../styles/Colors';
import {height, width} from '../styles/Others';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../styles/Scalling';
const data = [
  {image: require('../../assets/images/WE.ELITE.png'), text: 'CONNECT'},
  {image: require('../../assets/images/WE.CHANGE.png'), text: 'PAY'},
  {image: require('../../assets/images/WE.SHOP.png'), text: 'SHOP'},
];
export default function OnBoarding() {
  const navigation = useNavigation();
  return (
    <LogoScreen>
      <FlatList
        data={data}
        keyExtractor={item => item.text}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.view}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>"We Change the way you</Text>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.text}>in the cannabis community."</Text>
            {index == 2 && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{}}
                onPress={() => navigation.navigate('LogIn')}>
                <Image
                  source={require('../../assets/icons/fingerprint.png')}
                  style={styles.finger}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </LogoScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: BLACK,
    letterSpacing: 0.1,
    lineHeight: 22,
  },
  view: {width, alignItems: 'center'},
  image: {marginBottom: height * 0.1},
  text: {
    fontFamily: Fonts.regular,
    fontSize: 18,
    lineHeight: 40,
    color: BLACK,
  },
  finger:{
    height: moderateScale(80),
    width: moderateScale(70),
    marginVertical: moderateScale(35),
  }
});
