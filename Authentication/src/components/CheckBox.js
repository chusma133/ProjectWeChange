import React from 'react';
import {CheckBox} from 'react-native-elements';
import Colors from '../styles/Colors';

export default function MyCheckBox({...props}) {
  return (
    <CheckBox
        checkedColor={Colors.limeGreen}
        {...props}
        containerStyle={{margin:0,padding:0,paddingVertical:5,backgroundColor:'transparent',borderWidth:0,marginLeft:0,width:'50%'}}
        textStyle={{color:Colors.gray}}
        disabled
      />
  );
}
