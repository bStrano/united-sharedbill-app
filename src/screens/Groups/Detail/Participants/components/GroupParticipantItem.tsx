import React from 'react';
import {Avatar, Card} from 'react-native-paper';
import {GroupParticipantItemInterface} from '../../../../../types/GroupParticipantItemInterface';

interface GroupParticipantItemPropsInterface {
  item: GroupParticipantItemInterface;
}

export function GroupParticipantItem(
  props: GroupParticipantItemPropsInterface,
) {
  return (
    <Card style={{marginHorizontal: 15, marginVertical: 10}}>
      <Card.Title
        title={props.item.participant.name}
        subtitle={props.item.hasDebts ? 'Com dividas' : 'Sem dividas'}
        left={() => <Avatar.Text size={35} label="BS" />}
      />
    </Card>
  );
}
