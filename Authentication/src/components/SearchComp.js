import {StyleSheet,  View,  TextInput,Image} from 'react-native';
import React from 'react';
import {gray2, WHITE} from '../styles/Colors';
import Fonts from '../styles/Fonts';

const SearchComp = ({width="100%",mb=0}) => {
  return (
    <View style={{...styles._search_main,width,marginBottom:mb}}>
      <Image source={require('../../assets/icons/search2.png')}/>
      <TextInput
        placeholder="Search"
        style={styles._input}
        underlineColor={gray2}
        placeholderTextColor={WHITE}
      />
    </View>
  );
};

export default SearchComp;

let styles = StyleSheet.create({
  _search_main: {
    height: 42,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    backgroundColor: gray2,
  },
  _input: {
    width: '100%',
    color: WHITE,
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginLeft: 10,
  },
});
