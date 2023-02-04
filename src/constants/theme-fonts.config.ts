import {Platform} from 'react-native';

export const fontConfig = {
  customVariant: {
    fontFamily: Platform.select({
      web: 'Montserrat',
      ios: 'Montserrat',
      default: 'Montserrat',
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  },
  headlineSmall: {
    fontWeight: '900',
  },
  headlineMedium: {
    fontWeight: '900',
  },
  headlineLarge: {
    fontWeight: '900',
  },
};
