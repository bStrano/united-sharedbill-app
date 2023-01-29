import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';
import FriendItem from './Item/FriendItem';

interface FriendScreenPropsInterface {}

const DATA = [
  {
    id: 1,
    name: 'Bruno Strano',
    balance: 1500,
    groupsInCommun: 2,
  },
  {
    id: 1,
    name: 'Bruno Strano',
    balance: 1500,
    groupsInCommun: 2,
  },
  {
    id: 1,
    name: 'Bruno Strano',
    balance: 1500,
    groupsInCommun: 3,
  },
];

function FriendScreen(props: FriendScreenPropsInterface) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <FriendItem item={item} />}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default FriendScreen;
