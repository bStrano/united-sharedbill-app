import logo from '@assets/images/logos/logo.png';
import React, {memo} from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

const Logo = ({styles}: {styles?: StyleProp<ImageStyle>}) => (
  <Image source={logo} style={styles} />
);

export default memo(Logo);
