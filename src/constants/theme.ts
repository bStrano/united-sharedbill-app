import {configureFonts, DefaultTheme} from 'react-native-paper';
import {fontConfig} from './theme-fonts.config';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#600EE6',
    secondary: '#414757',
    error: '#f13a59',
  },
  fonts: configureFonts({isV3: true, config: fontConfig}),
};
