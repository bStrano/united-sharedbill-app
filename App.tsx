import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SessionProvider from './src/providers/SessionProvider';
import AppContent from './src/AppContent';
import {Provider as PaperProvider, useTheme} from 'react-native-paper';
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {CombinedDarkTheme, CombinedLightTheme} from '@constants/theme';
import {IntlProvider} from 'react-intl';
import {useLocale} from '@hooks/useLocale';
import {GoogleProvider} from '@providers/GoogleProvider';
import Toast from 'react-native-toast-message';
import {QueryClient, QueryClientProvider} from 'react-query';
export type AppTheme = typeof CombinedDarkTheme;

export const useAppTheme = () => useTheme<AppTheme>();
function App(): JSX.Element {
  const queryClient = new QueryClient();

  const {deviceLanguage, messages} = useLocale();

  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <Toast />
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale={deviceLanguage} messages={messages}>
          <GoogleProvider>
            <NavigationContainer theme={CombinedDarkTheme}>
              <SessionProvider>
                <AppContent />
              </SessionProvider>
            </NavigationContainer>
          </GoogleProvider>
        </IntlProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
}

export default App;
