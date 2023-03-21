import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GroupActivityTimelineInterface} from 'types/GroupActivityTimelineInterface';
import {GroupTimelineItemDay} from '@screens/Groups/Detail/Timeline/Item/Day/GroupTimelineItemDay';
import {GroupTimelineItemIcon} from '@screens/Groups/Detail/Timeline/Item/Icon/GroupTimelineItemIcon';
import {GroupTimelineItemDescription} from '@screens/Groups/Detail/Timeline/Item/Description/GroupTimelineItemDescription';
import {GroupTimelineItemValues} from '@screens/Groups/Detail/Timeline/Item/Values/GroupTimelineItemValues';

interface GroupTimelineItemPropsInterface {
  data: GroupActivityTimelineInterface;
}

export function GroupTimelineItem(props: GroupTimelineItemPropsInterface) {
  const styles = styleSheet();
  return (
    <View style={styles.container}>
      <GroupTimelineItemDay date={props.data.date} />
      <GroupTimelineItemIcon color={'#ffebea'} />
      <GroupTimelineItemDescription
        debit={props.data.debit}
        creator={props.data.creator}
      />
      <GroupTimelineItemValues
        isCreator={props.data.isUserCreator}
        debit={props.data.debit}
      />
    </View>
  );
}

const styleSheet = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      margin: 15,
      alignItems: 'center',
    },
  });
