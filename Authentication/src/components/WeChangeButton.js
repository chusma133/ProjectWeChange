import {TouchableOpacity,Image,} from 'react-native'
import React from 'react'
import { width } from '../styles/Others'
import { BLACK } from '../styles/Colors'
import { moderateScale } from '../styles/Scalling'

export default function WeChangeButton({mv=0,...props}) {
  return (
    <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 40 ,
            width: width*.5,
            borderRadius: moderateScale(50),
            marginVertical:mv,
            backgroundColor: BLACK,
            alignItems: "center",
            justifyContent: "center",
          }}
          {...props}
        >
          <Image
            source={require("../../assets/icons/fingerPrintWhite.png")}
            style={{ height: moderateScale(30), width: moderateScale(22) }}
          />
        </TouchableOpacity>
  )
}