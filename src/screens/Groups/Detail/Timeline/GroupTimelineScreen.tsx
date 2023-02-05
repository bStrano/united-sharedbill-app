import React from 'react';
import {FlatList, View} from 'react-native';
import {GroupTimelineItem} from './Item/GroupTimelineItem';

interface IGroupDashboardScreenProps {}

const MOCK = [
  {
    date: new Date(),
    isUserCreator: true,
    debit: {
      name: 'Pastel de Queijo',
      price: 12.3,
    },
    creator: {
      name: 'Bruno Strano',
      id: 1,
    },
  },
  {
    date: new Date(),
    isUserCreator: true,
    debit: {
      name: 'Pastel de Queijo',
      price: 12.3,
    },
    creator: {
      name: 'Bruno Strano',
      id: 1,
    },
  },

  {
    date: new Date(),
    isUserCreator: true,
    debit: {
      name: 'Pastel de Queijo',
      price: 12.3,
    },
    creator: {
      name: 'Bruno Strano',
      id: 1,
    },
  },
  {
    date: new Date(),
    isUserCreator: false,
    debit: {
      name: 'Pastel de Carne',
      price: 14.3,
    },
    creator: {
      name: 'Gabriel Gondo',
      id: 2,
    },
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GroupDashboardScreen(props: IGroupDashboardScreenProps) {
  return (
    <View>
      <FlatList
        data={MOCK}
        renderItem={({item}) => <GroupTimelineItem item={item} />}
      />
    </View>
  );
}

export default GroupDashboardScreen;
