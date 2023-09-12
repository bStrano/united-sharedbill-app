import React, {memo} from 'react';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import { Navigation } from "../../types/Naviation";

type Props = {
  navigation: Navigation;
};

const WelcomeScreen = ({navigation}: Props) => (
  <Background>
    <Logo />
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button id={'welcome'} onPress={() => navigation.navigate('LoginScreen')} />
    <Button id={'welcome'} onPress={() => navigation.navigate('LoginScreen')}>
      Login With Google
    </Button>
    <Button id={'welcome'} onPress={() => navigation.navigate('LoginScreen')}>
      Login With Apple
    </Button>
    <Button
      id={'welcome'}
      onPress={() => navigation.navigate('RegisterScreen')}>
      Sign Up
    </Button>
  </Background>
);

export default memo(WelcomeScreen);
