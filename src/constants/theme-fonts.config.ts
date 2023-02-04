import {Platform} from 'react-native';

export const fontConfig = {
  fontFamily: Platform.select({
    web: 'Montserrat',
    ios: 'Montserrat',
    default: 'Montserrat',
  }),
};
