import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({children}: Props) => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  return <Text style={styles.text}>{children}</Text>;
};

const styleSheet = (theme: MD3Theme) =>
  StyleSheet.create({
    text: {
      fontSize: 16,
      lineHeight: 26,
      color: theme.colors.secondary,
      textAlign: 'center',
      marginBottom: 14,
    },
  });

export default memo(Paragraph);
