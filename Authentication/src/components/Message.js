import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {WHITE, GREEN, BLACK, LIGHT_GRAY, SEC_GRAY} from '../styles/Colors';
import Fonts from '../styles/Fonts';

const Message = ({message,page}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.messageItemContainer}>
      <View style={styles.surnameDiv}>
        <Text style={styles.surName}>
          {message.name.split(' ').map(i => i[0])}
        </Text>
        {page=="Messages" && message.active && <View style={styles.activeBtn} />}
      </View>
      <View style={styles.textDiv}>
        <View style={styles.textDateDiv}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: Fonts.regular,
              color: BLACK,
            }}>
            {message.name}
          </Text>
          {page=="Messages" && <Text
            style={{fontSize: 14, fontFamily: Fonts.regular, color: SEC_GRAY}}>
            {message.time}
          </Text>}
        </View>
        {page=="Messages" && <View style={styles.messageContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {message.seen ? (
              <Image
                source={require('../../assets/icons/double-tick.png')}
                style={{marginRight: 5}}
              />
            ) : (
              <>
                {message.sent && (
                  <Image
                    source={require('../../assets/icons/tick.png')}
                    style={{marginRight: 5}}
                  />
                )}
              </>
            )}
            {message.audio && (
              <Image source={require('../../assets/icons/headphone.png')} />
            )}
            {message.video && (
              <Image source={require('../../assets/icons/photo.png')} />
            )}
            <Text
              style={{
                fontSize: 18,
                fontFamily: Fonts.regular,
                color: SEC_GRAY,
              }}>
              {message.text}
            </Text>
          </View>
          {message.newMessage && (
            <Text style={styles.messageNotification}>2</Text>
          )}
        </View>}
      </View>
    </TouchableOpacity>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  surName: {
    textTransform: 'capitalize',
    fontSize: 22,
    fontFamily: Fonts.regular,
    color: BLACK,
  },
  surnameDiv: {
    width: 60,
    height: 60,
    backgroundColor: LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 5,
    position: 'relative',
  },
  textDiv: {
    marginLeft: 10,
    width: '75%',
  },
  textDateDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeBtn: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: GREEN,
    bottom: 4,
    right: 4,
    borderWidth: 1,
    borderColor: WHITE,
  },
  messageNotification: {
    backgroundColor: BLACK,
    borderRadius: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    color: WHITE,
    paddingVertical: 2,
    paddingHorizontal: 7,
    fontFamily: Fonts.regular,
  },
});
