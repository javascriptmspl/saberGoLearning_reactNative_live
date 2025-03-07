import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme';
import {ActivityIndicator} from 'react-native';

const FullScreenLoader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        zIndex: 10,
        top: 0,
        left: 0,

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={'large'} color={COLORS.purple} />
    </View>
  );
};

export default FullScreenLoader;
