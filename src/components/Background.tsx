import React, {memo} from 'react';
import {StyleSheet, KeyboardAvoidingView, View, ViewProps} from 'react-native';
import {useTheme} from 'react-native-paper';

interface Props extends ViewProps {
  children: React.ReactNode;
}

const Background = ({children, ...props}: Props) => {
  const theme = useTheme();
  return (
    <View
      {...props}
      style={[
        props.style,
        {
          flex: 1,
          backgroundColor: theme.colors.background,
        },
      ]}>
      <KeyboardAvoidingView style={styles.background} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default memo(Background);
