import {
  adaptNavigationTheme,
  configureFonts,
  MD3DarkTheme as DefaultDarkTheme,
} from 'react-native-paper';

import {fontConfig} from './theme-fonts.config';
import {DarkTheme as DefaultNavigationDarkTheme} from '@react-navigation/native';

const {DarkTheme: NavigationDarkTheme} = adaptNavigationTheme({
  reactNavigationDark: DefaultNavigationDarkTheme,
});

export const DarkTheme = {
  ...DefaultDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: 'rgb(194, 193, 255)',
    onPrimary: 'rgb(36, 33, 127)',
    primaryContainer: 'rgb(60, 59, 150)',
    onPrimaryContainer: 'rgb(226, 223, 255)',
    secondary: 'rgb(157, 202, 255)',
    onSecondary: 'rgb(0, 50, 87)',
    secondaryContainer: 'rgb(0, 73, 123)',
    onSecondaryContainer: 'rgb(209, 228, 255)',
    tertiary: 'rgb(255, 177, 200)',
    onTertiary: 'rgb(94, 17, 51)',
    tertiaryContainer: 'rgb(123, 41, 73)',
    onTertiaryContainer: 'rgb(255, 217, 226)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(28, 27, 31)',
    onBackground: 'rgb(229, 225, 230)',
    surface: 'rgb(28, 27, 31)',
    onSurface: 'rgb(229, 225, 230)',
    surfaceVariant: 'rgb(71, 70, 79)',
    onSurfaceVariant: 'rgb(200, 197, 208)',
    outline: 'rgb(145, 143, 154)',
    outlineVariant: 'rgb(71, 70, 79)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(229, 225, 230)',
    inverseOnSurface: 'rgb(49, 48, 52)',
    inversePrimary: 'rgb(84, 83, 176)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(36, 35, 42)',
      level2: 'rgb(41, 40, 49)',
      level3: 'rgb(46, 45, 56)',
      level4: 'rgb(48, 47, 58)',
      level5: 'rgb(51, 50, 62)',
    },
    surfaceDisabled: 'rgba(229, 225, 230, 0.12)',
    onSurfaceDisabled: 'rgba(229, 225, 230, 0.38)',
    backdrop: 'rgba(48, 48, 56, 0.4)',
    gradient: ['#600EE6', '#850ee6'],
  },
  fonts: configureFonts({isV3: true, config: fontConfig}),
};
// gradient: ['#600EE6', '#850ee6'],
