import React from 'react';
import {Text} from 'react-native-paper';

interface GroupTimelineHeaderPropsInterface {
  title: string;
}

export function GroupTimelineHeader(props: GroupTimelineHeaderPropsInterface) {
  return <Text variant={'titleMedium'}>{props.title}</Text>;
}
