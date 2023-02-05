import React from 'react';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CircleIconPropsInterface {
  size: number;
  backgroundColor: string;
}

export function CircleIcon(props: CircleIconPropsInterface) {
  return (
    <View
      style={{
        height: props.size,
        width: props.size,
        backgroundColor: props.backgroundColor,
        borderRadius: props.size / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <MaterialIcons name={'attach-money'} />
    </View>
  );
}
