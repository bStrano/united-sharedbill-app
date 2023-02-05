import React from 'react';
import {View} from 'react-native';
import {Card, CardT, Text, useTheme} from 'react-native-paper';
import {GroupActivityTimelineInterface} from '../../../../../types/GroupActivityTimelineInterface';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CircleIcon} from '../../../../../components/CircleIcon';
import {useAppTheme} from '../../../../../../App';

interface GroupTimelineItemPropsInterface {
  item: GroupActivityTimelineInterface;
}

export function GroupTimelineItem(props: GroupTimelineItemPropsInterface) {
  const theme = useAppTheme();
  return (
    <Card style={{marginVertical: 10, marginHorizontal: 10}}>
      <Card.Title
        title={'Nova despesa adicionada por'}
        subtitle={"Bruno Strano"}
        left={() => (
          <CircleIcon size={20} backgroundColor={theme.colors.error} />
        )}
      />
      <Card.Content>
        <Text>
          {props.item.debit.name} no valor de{' '}
          {props.item.debit.price}
        </Text>
        <Text style={{textAlign: 'right'}}>
          Hoje as 14:23
        </Text>
      </Card.Content>

    </Card>
  );
}
