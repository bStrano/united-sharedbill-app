import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import dayjs from 'dayjs';

interface GroupTimelineItemDayPropsInterface {
  date: Date;
}

export function GroupTimelineItemDay({
  date,
}: GroupTimelineItemDayPropsInterface) {
  return (
    <View style={styles.container}>
      <Text>{dayjs(date).format('MMM').toLowerCase()}</Text>
      <Text>{dayjs(date).format('DD')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
