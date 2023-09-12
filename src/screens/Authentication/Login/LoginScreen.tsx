import Button from '@components/Button';
import Logo from '@components/Logo';
import {MESSAGES} from '@constants/messages-ids';
import {LoginTypeEnum, useSession} from '@providers/SessionProvider';
import React, {memo, useMemo, useState} from 'react';
import {FormattedMessage} from 'react-intl';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, MD3Theme, Text} from 'react-native-paper';
import {Navigation} from 'types/Naviation';
import {useAppTheme} from '../../../../App';

import TextInput from '../../../components/TextInput';
import {LoginSocialForm} from './components/SocialLogin/LoginSocialForm';
import BackgroundLogin from '@components/BackgroundLogin';
import LoginButton from '@components/LoginButton';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({navigation}: Props) => {
  const sessionContext = useSession();
  const theme = useAppTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = async () => {
    await sessionContext.login(LoginTypeEnum.INTERNAL, {
      username: email.value,
      password: password.value,
    });
    // const emailError = '';
    // emailValidator(email.value);
    // const passwordError = '';
    // passwordValidator(password.value);
    //
    // if (emailError || passwordError) {
    //   setEmail({...email, error: emailError});
    //   setPassword({...password, error: passwordError});
    //   return;
    // }
    //
  };

  return (
    <BackgroundLogin style={styles.container}>
      <Logo styles={styles.logo} />

      <Text style={styles.slogan}>
        <FormattedMessage id={MESSAGES.ids.SLOGAN} />
      </Text>

      <Card style={styles.loginSection}>
        <TextInput
          label={<FormattedMessage id={MESSAGES.ids.EMAIL_INPUT_PLACEHOLDER} />}
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          label={
            <FormattedMessage id={MESSAGES.ids.PASSWORD_INPUT_PLACEHOLDER} />
          }
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={styles.label}>
              <FormattedMessage id={MESSAGES.ids.BTN_FORGOT_PASSWORD} />
            </Text>
          </TouchableOpacity>
        </View>

        <LoginButton id={MESSAGES.ids.BTN_LOGIN} onPress={_onLoginPressed} />

        <LoginSocialForm />
      </Card>

      <View style={styles.row}>
        <Text style={styles.label}>
          <FormattedMessage id={MESSAGES.ids.LABEL_LOGIN_REGISTER} />
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>
            <FormattedMessage id={MESSAGES.ids.BTN_LOGIN_REGISTER} />
          </Text>
        </TouchableOpacity>
      </View>
    </BackgroundLogin>
  );
};

const styleSheet = (theme: MD3Theme) =>
  StyleSheet.create({
    logo: {
      height: 70,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    slogan: {
      color: '#FFF',
      fontFamily: 'monospace',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    loginSection: {
      width: '100%',
      borderRadius: 20,
      padding: 30,
      marginVertical: 24,
    },
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
    },
    label: {
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
      marginLeft: 4,
    },
  });

export default memo(LoginScreen);
