import { FlatList} from 'react-native';
import React from 'react';
import Message from '../components/Message';
import {MESSAGES} from '../db/data';
import Screen from '../components/Screen';

const Messages = () => {
  return (
    <Screen page="Messages" title="Messages">
      <FlatList
        data={MESSAGES}
        renderItem={({item}) => <Message message={item} page="Messages"/>}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
};

export default Messages;

