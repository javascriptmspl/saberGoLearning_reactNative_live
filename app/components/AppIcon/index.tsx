import {Image} from 'react-native';
import React from 'react';

const AppIcon = () => {
  return (
    <Image
      style={{width: 150, resizeMode: 'contain'}}
      source={require('../../../assets/icons/app_logo.png')}
    />
  );
};

export default AppIcon;
