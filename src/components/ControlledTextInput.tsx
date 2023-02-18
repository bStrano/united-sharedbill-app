import React, {memo, useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MD3Theme, TextInput as Input, useTheme} from 'react-native-paper';
import {useAppForm} from '@providers/FormProvider';
import {useController} from 'react-hook-form';
type Props = React.ComponentProps<typeof Input> & {
  errorText?: string;
  id: string;
};

const ControlledTextInput = ({errorText, id, ...props}: Props) => {
  const formContext = useAppForm();
  const controller = useController({
    control: formContext.form.control,
    name: id,
  });
  const theme = useTheme();
  const styles = useMemo(() => styleSheet({theme}), [theme]);

  console.log("CONTROLLER",controller.formState)
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        contentStyle={{borderRadius: 20}}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        value={controller.field.value}
        {...props}
      />
      {errorText ? (
        <Text style={styles.error}>
          {controller.formState.errors.root?.message}
        </Text>
      ) : null}
    </View>
  );
};

const styleSheet = ({theme}: {theme: MD3Theme}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 12,
    },
    input: {
      backgroundColor: theme.colors.surface,
    },
    error: {
      fontSize: 14,
      color: theme.colors.error,
      paddingHorizontal: 4,
      paddingTop: 4,
    },
  });

export default memo(ControlledTextInput);
