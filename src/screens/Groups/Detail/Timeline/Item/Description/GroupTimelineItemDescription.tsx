import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {DebitInterface} from 'types/DebitInterface';
import {GroupCreatorInterface} from 'types/GroupCreatorInterface';

interface GroupTimelineItemDescriptionPropsInterface {
  debit: DebitInterface;
  creator: GroupCreatorInterface;
}

export function GroupTimelineItemDescription(
  props: GroupTimelineItemDescriptionPropsInterface,
) {
  return (
    <View style={styles.container}>
      <Text variant={'titleSmall'}>{props.debit.name}</Text>
      <Text variant={'labelSmall'}>
        {props.creator.name} pagou R$ {props.debit.total}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
