import {
  adaptNavigationTheme,
  configureFonts,
  MD3DarkTheme as DefaultDarkTheme,
} from "react-native-paper";

import { fontConfig } from "./theme-fonts.config";
import { DarkTheme as DefaultNavigationDarkTheme } from "@react-navigation/native";

const { DarkTheme: NavigationDarkTheme } = adaptNavigationTheme({
  reactNavigationDark: DefaultNavigationDarkTheme,
});

export const DarkTheme = {
  ...DefaultDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    primary: "rgb(1, 159, 244)",
    success: "rgb(0, 252, 147)",
    error: "rgb(255, 180, 171)",
    onPrimary: "rgb(36, 33, 127)",
    primaryContainer: "rgb(60, 59, 150)",
    onPrimaryContainer: "rgb(226, 223, 255)",
    secondary: "#9dcaff",
    onSecondary: "rgb(0, 50, 87)",
    secondaryContainer: "rgb(50, 50, 50)",
    onSecondaryContainer: "#9dcaff",
    tertiary: "rgb(255, 177, 200)",
    onTertiary: "rgb(94, 17, 51)",
    tertiaryContainer: "rgb(123, 41, 73)",
    onTertiaryContainer: "rgb(255, 217, 226)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(18, 18, 18)",
    inputBackgroudIcon: "rgb(34, 34, 34)",
    inputBackgroud: "rgb(28, 28, 28)",
    inputBackgroudFocus: "rgb(34, 34, 34)",
    inputPlaceholder: "rgb(64, 64, 64)",
    inputText: "rgb(229, 225, 230)",
    onBackground: "rgb(229, 225, 230)",
    surface: "rgb(28, 27, 31)",
    onSurface: "rgb(229, 225, 230)",
    surfaceVariant: "rgb(71, 70, 79)",
    onSurfaceVariant: "rgb(200, 197, 208)",
    outline: "rgb(145, 143, 154)",
    outlineVariant: "rgb(71, 70, 79)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(229, 225, 230)",
    inverseOnSurface: "rgb(49, 48, 52)",
    inversePrimary: "rgb(84, 83, 176)",
    elevation: {
      level0: "transparent",
      level1: "rgb(24, 24, 24)",
      level2: "rgb(28, 28, 28)",
      level3: "rgb(32, 32, 32)",
      level4: "rgb(34, 34, 34)",
      level5: "rgb(36, 36, 36)",
    },
    surfaceDisabled: "rgba(229, 225, 230, 0.12)",
    onSurfaceDisabled: "rgba(229, 225, 230, 0.38)",
    backdrop: "rgba(48, 48, 56, 0.4)",
    gradient: ["#68aaf7", "#6daaf2"],
  },
  fonts: configureFonts({ isV3: true, config: fontConfig }),
};
// gradient: ['#600EE6', '#850ee6'],
