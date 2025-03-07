import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RegularText} from './MyText';
import LinearGradient from 'react-native-linear-gradient';
type Props = {
  onPress?: () => void;
  title: string;
};

const COLOR_A = '#2079E2';
const COLOR_B = '#5853ee';

const SecondaryBtn = ({onPress, title}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 180,
        margin: 5,
      }}>
      <LinearGradient
        start={{x: -1, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLOR_A, COLOR_B]}
        style={{
          padding: 15,
          width: '100%',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <RegularText bold style={{color: 'white'}}>
          {title}
        </RegularText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SecondaryBtn;
