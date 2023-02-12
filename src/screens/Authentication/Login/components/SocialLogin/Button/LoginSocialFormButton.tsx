import React, {useCallback, useMemo} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import googleLogo from '@assets/images/google.png';
import facebookLogo from '@assets/images/facebook.png';
import appleLogo from '@assets/images/apple.png';
import {AppTheme, useAppTheme} from '../../../../../../../App';
import {LoginTypeEnum, useSession} from '@providers/SessionProvider';

interface LoginSocialFormButtonPropsInterface {
  type: LoginTypeEnum;
}

export function LoginSocialFormButton(
  props: LoginSocialFormButtonPropsInterface,
) {
  const sessionContext = useSession();
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);

  const image = useMemo(() => {
    if (props.type === LoginTypeEnum.GOOGLE) {
      return googleLogo;
    }
    if (props.type === LoginTypeEnum.FACEBOOK) {
      return facebookLogo;
    }
    if (props.type === LoginTypeEnum.APPLE) {
      return appleLogo;
    }
    throw new Error('Social type not informed.');
  }, [props.type]);

  const socialLogin = useCallback(async () => {
    return sessionContext.login(props.type);
  }, [props.type, sessionContext]);

  return (
    <TouchableOpacity onPress={socialLogin} style={styles.container}>
      <Image source={image} style={styles.icon} resizeMode={'contain'} />
    </TouchableOpacity>
  );
}

const styleSheet = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 55,
      height: 55,
      borderRadius: 4,
      borderColor: 'grey',
      backgroundColor: theme.colors.card,
      margin: 15,
      padding: 20,
    },
    icon: {
      width: 30,
      height: 30,
    },
  });
