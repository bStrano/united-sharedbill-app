import React, {memo, useMemo} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ViewProps,
  View,
  Platform,
} from 'react-native';
import {AppTheme, useAppTheme} from '../../App';
import WaveSVG from '@assets/wave8.svg';

interface Props extends ViewProps {
  children: React.ReactNode;
}
const BackgroundLogin = ({children, ...props}: Props) => {
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  return (
    <View style={styles.container}>
      <WaveSVG style={styles.backgroundSVG} />
      <KeyboardAvoidingView
        style={[props.style, styles.container2]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      zIndex: -2,
    },
    container2: {
      flex: 1,
    },
    backgroundSVG: {
      position: 'absolute',
      width: '100%',
      height: '50%',
      top: 0,
      zIndex: -1,
    },
  });

export default memo(BackgroundLogin);
