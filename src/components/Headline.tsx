import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

interface IHeadlineProps {
  title: string;
}

function Headline(props: IHeadlineProps) {
  return (
    <Text variant={'headlineMedium'} style={styles.title}>
      {props.title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {marginVertical: 20, marginHorizontal: 10},
});

export default Headline;
