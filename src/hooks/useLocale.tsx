import {useMemo} from 'react';
import {NativeModules, Platform} from 'react-native';
import {pt_br} from '../../assets/langs/pt_br';
import {en_us} from '../../assets/langs/en_us';

export function useLocale() {
  const deviceLanguage: string = useMemo(() => {
    const language =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;
    return language.replace('_', '-');
  }, []);

  const messages = useMemo(() => {
    console.log(deviceLanguage);
    if (deviceLanguage.includes('pt')) {
      return pt_br;
    }

    return en_us;
  }, [deviceLanguage]);
  console.log(messages);
  console.log('Device Language: ', deviceLanguage);
  return {deviceLanguage, messages};
}
