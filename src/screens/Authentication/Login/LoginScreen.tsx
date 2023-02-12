import React, {memo, useMemo, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import TextInput from '../../../components/TextInput';
import Background from '../../../components/Background';
import Header from '../../../components/Header';
import {Navigation} from 'types/Naviation';
import {LoginTypeEnum, useSession} from '@providers/SessionProvider';
import {MD3Theme, Text} from 'react-native-paper';
import {FormattedMessage} from 'react-intl';
import {MESSAGES} from '@constants/messages-ids';
import LinearGradient from 'react-native-linear-gradient';
import {LoginSocialForm} from './components/SocialLogin/LoginSocialForm';
import {useAppTheme} from '../../../../App';

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
    await sessionContext.login(LoginTypeEnum.GOOGLE);
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
    <Background style={styles.container}>
      <Header>
        {' '}
        <FormattedMessage id={MESSAGES.ids.TEXT_WELCOME} />
      </Header>
      <Text>
        <FormattedMessage id={MESSAGES.ids.TEXT_WELCOME_SUBTITLE} />
      </Text>
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

      <LinearGradient
        colors={theme.colors.gradient}
        style={{
          borderRadius: 8,
          elevation: 2,
          width: '100%',
          padding: 0,
          margin: 0,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={_onLoginPressed}>
          <Text variant={'bodyLarge'} style={{fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <LoginSocialForm />
      <View style={styles.row}>
        <Text style={styles.label}>
          <FormattedMessage id={MESSAGES.ids.LABEL_LOGIN_REGISTER} />
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>
            {' '}
            <FormattedMessage id={MESSAGES.ids.BTN_LOGIN_REGISTER} />
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styleSheet = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    label: {
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  });

export default memo(LoginScreen);
