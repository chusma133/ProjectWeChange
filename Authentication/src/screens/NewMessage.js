import {FlatList, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import Message from '../components/Message';
import {MESSAGES} from '../db/data';
import Screen from '../components/Screen';
import {BLACK} from '../styles/Colors';
import Fonts from '../styles/Fonts';
import SearchComp from '../components/SearchComp';
import { width } from '../styles/Others';

const NewMessage = () => {
  return (
    <Screen page="NewMessage" title="New Message" goBack>
      <Text style={styles.text}>To :</Text>
      <View style={{marginHorizontal:width*.1,marginBottom:10}}>
        <SearchComp />
      </View>
      <Text style={styles.text}>Suggested</Text>
      <FlatList
        data={MESSAGES}
        renderItem={({item}) => <Message message={item} />}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.regular,
    color: BLACK,
    marginLeft: 15,
    fontSize: 20,
    marginBottom: 5,
  },
});
export default NewMessage;
