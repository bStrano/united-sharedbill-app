import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as PaperProvider, useTheme} from 'react-native-paper';
import AppContent from './src/AppContent';
import SessionProvider from './src/providers/SessionProvider';
import {DarkTheme} from '@constants/theme';
import {useLocale} from '@hooks/useLocale';
import {GoogleProvider} from '@providers/GoogleProvider';
import {IntlProvider} from 'react-intl';
import Toast from 'react-native-toast-message';
import {QueryClient, QueryClientProvider} from 'react-query';
import { SafeAreaView } from "react-native";
export type AppTheme = typeof DarkTheme;

export const useAppTheme = () => useTheme<AppTheme>();
function App(): JSX.Element {
  const queryClient = new QueryClient();

  const {deviceLanguage, messages} = useLocale();

  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <PaperProvider theme={DarkTheme}>
      <Toast />
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale={deviceLanguage} messages={messages}>
          <GoogleProvider>
            <NavigationContainer theme={DarkTheme}>
              <SessionProvider>
                <SafeAreaView style={{flex: 1, backgroundColor: DarkTheme.colors.background}}>
                  <AppContent />
                </SafeAreaView>
              </SessionProvider>
            </NavigationContainer>
          </GoogleProvider>
        </IntlProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
}

export default App;
