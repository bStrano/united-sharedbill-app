import React, {memo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {FormattedMessage} from 'react-intl';
import {useAppTheme} from '../../App';

interface Props extends TouchableOpacityProps {
  id: string;
  isLoading?: boolean;
}
const Button = ({isLoading, onPress, id, ...props}: Props) => {
  const theme = useAppTheme();
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={styles.button}
      onPress={onPress}
      {...props}>
      <LinearGradient colors={theme.colors.gradient} style={styles.button}>
        {isLoading && (
          <View style={{paddingRight: 10}}>
            <ActivityIndicator animating={true} color={theme.colors.text} />
          </View>
        )}
        <Text variant={'bodyLarge'} style={styles.text}>
          <FormattedMessage id={id} />
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    elevation: 2,
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
  },
});

export default memo(Button);
