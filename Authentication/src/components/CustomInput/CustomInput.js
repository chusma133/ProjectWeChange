import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import { moderateScale } from '../../styles/Scalling';
import { BLACK, WHITE } from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,width='100%'
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              placeholderTextColor={WHITE}
              style={{...styles.container,width}}
              secureTextEntry={secureTextEntry}
            />
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height:47,
    padding: moderateScale(15),
    marginBottom: moderateScale(23),
        borderRadius:100,
        borderWidth: 2,
        borderColor: WHITE,
        backgroundColor:BLACK,
        fontFamily:Fonts.regular,
        color:WHITE,
        fontSize: moderateScale(16),
        elevation:3
  },
});

export default CustomInput;
