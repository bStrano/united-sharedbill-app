import React, {memo, useMemo} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ViewProps,
} from 'react-native';
import { AppTheme, useAppTheme } from "../../App";

interface Props extends ViewProps {
  children: React.ReactNode;
}

const Background = ({children, ...props}: Props) => {
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  return (
    <KeyboardAvoidingView
      style={[props.style, styles.background]}
      behavior="padding">
      {children}
    </KeyboardAvoidingView>
  );
};

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: theme.colors.background,
      width: '100%',
    },
  });

export default memo(Background);
