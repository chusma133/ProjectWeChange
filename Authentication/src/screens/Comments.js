import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,FlatList
} from 'react-native';
import typography from '../typography';
import { COMMENTS } from '../db/data';
import {LIGHT_GRAY} from '../styles/Colors'
import Screen from '../components/Screen'

let Comments = ({navigation}) => {
  return (
    
    <Screen page="Comments" title="Comments" navigation={navigation}>
      <ScrollView
          style={{ padding: 5,}}>
      <FlatList data={Array(5).fill("")}
      horizontal
      keyExtractor={(item,index)=>item+index}
      renderItem={({item})=><TouchableOpacity style={styles._item} activeOpacity={0.9}/>}
      showsHorizontalScrollIndicator={false}
      />

        <Text
          style={{
              fontFamily: typography.regular,
              alignSelf: 'center',
              marginBottom: 20,
            }}>
          POST TITLE THREE
        </Text>
            <FlatList data={COMMENTS}
            keyExtractor={(item,index)=>item+index}
            renderItem={({item})=><TouchableOpacity style={styles._list} activeOpacity={0.9}>
            <TouchableOpacity
              style={styles._placeholder_icons}></TouchableOpacity>
            <View style={styles._desc}>
              <Text style={{fontFamily: typography.regular,color:"black"}}>
                {item.email}
              </Text>
              <Text style={{fontFamily: typography.regular,color:"grey"}}>
                {item.for}
              </Text>
            </View>
            <Text style={{fontFamily: typography.regular}}>
             4 h
            </Text>
          </TouchableOpacity>}
            />
      </ScrollView>
    </Screen>
  );
};
let styles = StyleSheet.create({
  _container: {
    flex: 1,
    // backgroundColor: Typography.white,
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
  },
  _footer_icons: {
    marginHorizontal: 20,
  },
  _header: {
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 80,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    borderTopWidth: 0,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  _bg: {
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  _square: {
    height: 61,
    width: 61,
    borderRadius: 20,
    backgroundColor: typography.white,
  },
  _email: {
    fontFamily: typography.medium,
    color: typography.white,
    marginTop: 10,
    marginBottom: 20,
  },
  _price: {
    fontFamily: typography.bold,
    color: typography.white,
  },
  _balance: {
    fontFamily: typography.regular,
    color: typography.white,
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
  _comments: {
    fontFamily: typography.bold,
    color: typography.white,
  },
  _back_icon: {
    position: 'absolute',
    left: 0,
  },
  _item: {
    height: 109,
    width: 66,
    borderRadius: 20,
    backgroundColor: '#C4C4C4',
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _placeholder_icons: {
    height: 30,
    width: 30,
    backgroundColor: LIGHT_GRAY,
    borderRadius: 5,
    marginRight: 10,
  },
});
export default Comments;
