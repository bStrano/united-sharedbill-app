import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppTheme, useAppTheme} from '../../App';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';

interface IFABProps {
  onPress(): void;
}

function FAB(props: IFABProps) {
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient colors={theme.colors.gradient} style={styles.container}>
        <Icon name={'plus'} color={theme.colors.text} size={26} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      height: 65,
      width: 65,
      borderRadius: 20,
      position: 'absolute',
      bottom: 15,
      right: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default FAB;
