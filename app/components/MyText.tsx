import {StyleProp, TextStyle, Text} from 'react-native';
import React from 'react';

import {COLORS} from '../constants/theme';
import {FONTS} from '../../assets/fonts';

type Props = {
  children: string | React.ReactNode | any;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
};

export const RegularText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 15,
          fontFamily: bold ? FONTS.Rajdhani.Bold : FONTS.Rajdhani.Regular,
          // fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const SmallText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 10,
          fontFamily: bold ? FONTS.Rajdhani.Bold : FONTS.Rajdhani.Regular,
          // fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const BigText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 25,
          fontFamily: bold ? FONTS.Rajdhani.Bold : FONTS.Rajdhani.Regular,
          // fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
