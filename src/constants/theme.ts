import {
  adaptNavigationTheme,
  configureFonts,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import {fontConfig} from './theme-fonts.config';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    primary: '#600EE6',
    success: 'green',
    error: 'red',
    gradient: ['#6d19fa', '#600EE6', '#4604b5'],
  },
  fonts: configureFonts({isV3: true, config: fontConfig}),
};
export const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    primary: '#600EE6',
    success: 'green',
    error: 'red',
    gradient: ['#600EE6', '#850ee6'],
  },
  fonts: configureFonts({isV3: true, config: fontConfig}),
};
// export const theme = {
//   ...MD3DarkTheme,
//   colors: {
//     ...MD3DarkTheme.colors,
//     primary: '#600EE6',
//     secondary: '#414757',
//     error: '#f13a59',
//   },
//
//   fonts: configureFonts({isV3: true, config: fontConfig}),
// };
