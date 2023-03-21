import React from 'react';
import {SectionList, View} from 'react-native';
import {GroupTimelineItem} from './Item/GroupTimelineItem';
import {GroupActivityTimelineSectionInterface} from 'types/GroupActivityTimelineSectionInterface';
import {GroupTimelineHeader} from '@screens/Groups/Detail/Timeline/Header/GroupTimelineHeader';

interface IGroupDashboardScreenProps {}

const MOCK: GroupActivityTimelineSectionInterface[] = [
  {
    title: 'Teste 1',
    data: [
      {
        type: 'NEW_EXPENSE',
        date: new Date(),
        isUserCreator: true,
        debit: {
          name: 'Pastel de Queijo',
          total: 12.3,
          value: 6,
        },
        creator: {
          name: 'Bruno Strano',
          id: 1,
        },
      },
      {
        date: new Date(),
        type: 'NEW_EXPENSE',
        isUserCreator: true,
        debit: {
          name: 'Pastel de Queijo',
          total: 12.3,
          value: 6,
        },
        creator: {
          name: 'Bruno Strano',
          id: 1,
        },
      },
    ],
  },
  {
    title: 'TITULO 2',
    data: [
      {
        date: new Date(),
        type: 'NEW_EXPENSE',
        isUserCreator: true,
        debit: {
          name: 'Pastel de Queijo',
          total: 12.3,
          value: 6,
        },
        creator: {
          name: 'Bruno Strano',
          id: 1,
        },
      },
      {
        date: new Date(),
        isUserCreator: false,
        type: 'NEW_EXPENSE',
        debit: {
          name: 'Pastel de Carne',
          total: 14.3,
          value: 6,
        },
        creator: {
          name: 'Gabriel Gondo',
          id: 2,
        },
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GroupDashboardScreen(props: IGroupDashboardScreenProps) {
  return (
    <View>
      <SectionList
        renderItem={({item}) => <GroupTimelineItem data={item} />}
        renderSectionHeader={({section: {title}}) => (
          <GroupTimelineHeader title={title} />
        )}
        sections={MOCK}
      />
    </View>
  );
}

export default GroupDashboardScreen;
