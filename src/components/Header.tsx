import React, {useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

type Props = {
  children: React.ReactNode;
};

const Header = ({children}: Props) => {
  const theme = useTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  return <Text style={styles.header}>{children}</Text>;
};

const styleSheet = (theme: MD3Theme) =>
  StyleSheet.create({
    header: {
      fontSize: 26,
      color: theme.colors.primary,
      fontWeight: 'bold',
      paddingVertical: 14,
    },
  });

export default Header;
