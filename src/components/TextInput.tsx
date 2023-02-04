import React, {memo, useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MD3Theme, TextInput as Input, useTheme} from 'react-native-paper';
type Props = React.ComponentProps<typeof Input> & {errorText?: string};

const TextInput = ({errorText, ...props}: Props) => {
  const theme = useTheme();
  const styles = useMemo(() => styleSheet({theme}), [theme]);

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
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

export default memo(TextInput);
