import React from 'react';
import {View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import {LoginSocialFormButton} from './Button/LoginSocialFormButton';
import {LoginTypeEnum} from '@providers/SessionProvider';
interface LoginSocialLoginPropsInterface {}

export function LoginSocialForm(props: LoginSocialLoginPropsInterface) {
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <Divider style={{flex: 1}} />
        <Text style={{paddingHorizontal: 10}}>Or continue with</Text>
        <Divider style={{flex: 1}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <LoginSocialFormButton type={LoginTypeEnum.GOOGLE} />
        <LoginSocialFormButton type={LoginTypeEnum.APPLE} />
        {/*<LoginSocialFormButton type={'facebook'} />*/}
      </View>
    </View>
  );
}
