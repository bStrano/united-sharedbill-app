import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {DebitInterface} from 'types/DebitInterface';

interface GroupTimelineItemValuesPropsInterface {
  isCreator: boolean;
  debit: DebitInterface;
}

export function GroupTimelineItemValues(
  props: GroupTimelineItemValuesPropsInterface,
) {
  const styles = styleSheet();
  const title = useMemo(() => {
    if (props.isCreator) {
      return 'voce pegou emprestado';
    } else {
      return 'voce emprestou';
    }
  }, [props.isCreator]);

  if (props.debit.value === 0) {
    return <View />;
  }
  return (
    <View>
      <Text variant={'labelSmall'}>{title}</Text>
      <Text variant={'labelMedium'} style={styles.labelText}>
        R$ {props.debit.value}
      </Text>
    </View>
  );
}

const styleSheet = () =>
  StyleSheet.create({
    labelText: {
      textAlign: 'right',
    },
  });
