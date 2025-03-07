import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SIZE = 60;

type Props = {
  onPress?: () => void;
};
const NextBtn = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{width: SIZE, height: SIZE, resizeMode: 'contain'}}
        source={require('../../assets/icons/next.png')}
      />
    </TouchableOpacity>
  );
};

export default NextBtn;
