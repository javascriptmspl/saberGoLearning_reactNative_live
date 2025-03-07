import {View, ActivityIndicator, ViewStyle, StyleProp} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RegularText} from './MyText';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constants/theme';
type Props = {
  onPress?: () => void;
  title: string;
  loading?: boolean;
};

const COLOR_A = '#FE9539';
const COLOR_B = '#FF7438';

const PrimaryBtn = ({onPress, title, loading}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 180,
        margin: 5,
      }}>
      <LinearGradient
        colors={[COLOR_A, COLOR_B]}
        style={{
          padding: 15,
          width: '100%',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {!loading ? (
          <RegularText bold style={{color: COLORS.white}}>
            {title}
          </RegularText>
        ) : (
          <ActivityIndicator color={COLORS.white} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;
