import React, {memo, useContext, useMemo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

import BackButton from '../../components/BackButton';
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Background from '../../components/Background';
import Header from '../../components/Header';
import {Navigation} from '../../types/Naviation';
import {SessionContext} from '../../providers/SessionProvider';
import {MD3Theme, useTheme} from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({navigation}: Props) => {
  const sessionContext = useContext(SessionContext);
  const theme = useTheme();
  const styles = useMemo(() => styleSheet(theme), [theme]);
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    sessionContext.login();
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
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
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
        label="Password"
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
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styleSheet = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
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
