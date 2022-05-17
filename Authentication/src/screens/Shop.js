import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Switch,
} from 'react-native';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {SvgXml, WithLocalSvg} from 'react-native-svg';
import { WHITE } from '../styles/Colors';
import Fonts from '../styles/Fonts';

let Shop = ({navigation}) => {
  const [active, setactive] = useState('');
  const [text, settext] = useState('0');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  let transaction = [
    {
      email: 'we@monica4567',
      for: 'FOR BOMB WEED',
      price: '-56.00',
    },
    {
      email: 'we@monica4567',
      for: 'FOR BOMB WEED',
      price: '-56.00',
    },
    {
      email: 'we@monica4567',
      for: 'FOR BOMB WEED',
      price: '-56.00',
    },

    {
      email: 'we@monica4567',
      for: 'FOR BOMB WEED',
      price: '-56.00',
    },
    {
      email: 'we@monica4567',
      for: 'FOR BOMB WEED',
      price: '-56.00',
    },

    {
      email: 'we@monica4567',
      for: 'FOR BOMB WEED',
      price: '-56.00',
    },
    {
      email: 'we@monica4567',
      for: 'FOR BOMB WEED',
      price: '-56.00',
    },
  ];
  return (
    <SafeAreaView style={styles._container}>
      {active !== 'dollar' && (
        <>
          <View style={styles._header}>
            <ImageBackground
              source={require('../../assets/square.png')}
              style={styles._bg}
              resizeMode="contain">
              <View style={styles._square}></View>
              <Text style={styles._email}>we@Adrianph313</Text>
              <Text style={styles._price}>$2,460</Text>
              <Text style={styles._balance}>BALANCE</Text>

              {/*  */}
            </ImageBackground>
          </View>

          {/* transcation list */}
          {/*  */}
          {active !== 'setting' ? (
            <View style={styles._body}>
              <Text
                style={{
                  fontFamily: Fonts.regular,
                  color: 'white',
                  alignSelf: 'center',
                  marginBottom: 10,
                }}>
                TRANSACTIONS
              </Text>
              <ScrollView contentContainerStyle={{paddingBottom: 130}}>
                {transaction.map((val, i) => {
                  return (
                    <TouchableOpacity style={styles._list} key={i}>
                      <View style={styles._desc}>
                        <Text style={{fontFamily: Fonts.regular}}>
                          {val.email}
                        </Text>
                        <Text style={{fontFamily: Fonts.regular}}>
                          {val.for}
                        </Text>
                      </View>
                      <Text style={{fontFamily: Fonts.regular}}>
                        {val.price}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          ) : (
            <View style={[styles._body, {marginTop: 0}]}>
              <View style={styles._card}>
                <View style={styles._card_header}>
                  <TouchableOpacity
                    style={styles._back_square}></TouchableOpacity>
                  <Fontisto
                    name="close-a"
                    size={24}
                    color="grey"
                    onPress={() => setactive('')}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Switch
                    trackColor={{false: '#000000', true: '#000000'}}
                    thumbColor={'#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </View>
          )}
        </>
      )}
      {active === 'dollar' && (
        <View style={styles._keyboard_view}>
          <View style={styles._price_view}>
            <Feather name="dollar-sign" size={50} color={WHITE} />
            <Text style={styles.entered_price}>{text}</Text>
          </View>
          <VirtualKeyboard
            color="white"
            pressMode="string"
            decimal
            onPress={val => settext(val)}
            cellStyle={{
              borderBottomWidth: 1,
              borderColor: 'grey',
              margin: 5,
            }}
            fontSize={40}
          />
          <View
            style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 190}}>
            <View style={styles._row}>
              <ImageBackground
                source={require('../../assets/Requestprice.png')}
                style={{height: 61, width: 195}}>
                <TouchableOpacity
                  style={[styles._innter_section]}
                  onPress={() => navigation.navigate('RequestFund')}>
                  <Text style={styles._btn_text}>REQUEST</Text>
                </TouchableOpacity>
              </ImageBackground>
              <View style={styles._divider}></View>
              <ImageBackground
                source={require('../../assets/send.png')}
                style={{height: 61, width: 195}}>
                <TouchableOpacity
                  style={[styles._innter_section, {alignItems: 'flex-start'}]}>
                  <Text style={styles._btn_text}>SEND</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>

          {/* <DisplayKeyboard
            charCellHeight={100}
            charFontSize={30}
            charCellBackgroundColor={"red"}
            charCellTextColor={"red"}
            borderColor={"red"}
            optnlChar={{ key: "\u2022", value: "." }}

            // getInput={this.getInputChar}
            // getPressedChar={this.getPressedChar}
          /> */}
        </View>
      )}

      {/* footer */}
      <View style={styles._footer}>
        <TouchableOpacity
          style={styles._footer_icons}
          onPress={() => setactive('dollar')}>
          <WithLocalSvg
            asset={require('../../assets/Assets/dollor.svg')}
            width={30}
            height={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._footer_icons}
          onPress={() => {
            setactive('');
            navigation.navigate('RequestFund');
          }}>
          <WithLocalSvg
            asset={require('../../assets/Assets/Money.svg')}
            width={30}
            height={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._footer_icons}
          onPress={() => setactive('setting')}>
          <WithLocalSvg
            asset={require('../../assets/Assets/Settings.svg')}
            width={30}
            height={30}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    // backgroundColor: WHITE,
  },
  _footer: {
    height: 70,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 60,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderWidth: 0.1,
    borderColor: 'white',
    borderBottomWidth: 0,
  },
  _footer_icons: {
    marginHorizontal: 20,
  },
  _header: {
    flex: 1.7,
    backgroundColor: 'black',
    justifyContent: 'center',
    zIndex: -10,
    // alignItems: "center",
  },
  _body: {
    flex: 3,
    padding: 10,
    marginTop: -70,
    zIndex: 2,
    // backgroundColor: WHITE,
    // margin: 10,
    // paddingTop:10
  },
  _bg: {
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    // width: "100%",
  },
  _square: {
    height: 61,
    width: 61,
    borderRadius: 20,
    backgroundColor: WHITE,
  },
  _email: {
    fontFamily: Fonts.regular,
    color: WHITE,
    marginTop: 10,
    marginBottom: 20,
  },
  _price: {
    fontFamily: Fonts.bold,
    color: WHITE,
  },
  _balance: {
    fontFamily: Fonts.regular,
    color: WHITE,
    fontSize: 12,
  },
  _list: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
  _desc: {
    flex: 1,
  },
  _keyboard_view: {
    flex: 1,
    backgroundColor: 'black',
  },
  entered_price: {
    // fontFamily: Fonts.bold,
    color: WHITE,
    fontSize: 50,
    lineHeight: 55,
  },
  _price_view: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  _row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  _divider: {
    borderWidth: 0.3,
    height: 61,
    borderColor: 'grey',
    marginHorizontal: 5,
  },
  _innter_section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  _btn_text: {
    fontFamily:Fonts.regular,
    color: WHITE,
    paddingHorizontal: 10,
  },
  _card: {
    backgroundColor: 'white',
    height: 200,
    padding: 20,
  },
  _card_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: '#e6e1e1',
  },
  _back_square: {
    borderWidth: 1,
    height: 22,
    width: 32,
    borderRadius: 2,
    borderColor: '#333333',
  },
});
export default Shop;
