import React from 'react';
import {StyleSheet, View} from 'react-native';
import InvoiceIcon from 'src/icons/InvoiceIcon';

interface GroupTimelineItemIconPropsInterface {
  color: string;
}

export function GroupTimelineItemIcon(
  props: GroupTimelineItemIconPropsInterface,
) {
  const styles = styleSheet({color: props.color});
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <InvoiceIcon fill={'white'} color={'white'} />
      </View>
    </View>
  );
}

const styleSheet = ({color}: {color: string}) =>
  StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    icon: {
      width: 25,
      height: 25,
    },
  });
