import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SessionProvider from './src/providers/SessionProvider';
import AppContent from './src/AppContent';
import {Provider as PaperProvider, useTheme} from 'react-native-paper';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {CombinedDarkTheme, CombinedLightTheme} from './src/constants/theme';
import {IntlProvider} from 'react-intl';
import {useLocale} from './src/hooks/useLocale';

export type AppTheme = typeof CombinedDarkTheme;

export const useAppTheme = () => useTheme<AppTheme>();
function App(): JSX.Element {
  const {deviceLanguage, messages} = useLocale();
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <IntlProvider locale={deviceLanguage} messages={messages}>
        <NavigationContainer theme={CombinedDarkTheme}>
          <SessionProvider>
            <AppContent />
          </SessionProvider>
        </NavigationContainer>
      </IntlProvider>
    </PaperProvider>
  );
}

export default App;
