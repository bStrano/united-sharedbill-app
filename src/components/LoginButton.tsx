import React, {memo, useMemo} from 'react';
import {FormattedMessage} from 'react-intl';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import {AppTheme, useAppTheme} from '../../App';

interface Props extends TouchableOpacityProps {
  id: string;
  isLoading?: boolean;
}
const LoginButton = ({isLoading, onPress, id, ...props}: Props) => {
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);

  return (
    <TouchableOpacity
      disabled={isLoading}
      style={styles.button}
      onPress={onPress}
      {...props}>
      {isLoading && (
        <View>
          <ActivityIndicator animating={true} color={theme.colors.text} />
        </View>
      )}
      <Text variant={'bodyLarge'} style={styles.text}>
        <FormattedMessage id={id} />
      </Text>
    </TouchableOpacity>
  );
};

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    button: {
      borderRadius: 20,
      elevation: -2,
      width: '100%',
      padding: 0,
      margin: 0,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 26,
      color: '#FFF',
    },
  });

export default memo(LoginButton);
