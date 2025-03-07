import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SmallText} from './MyText';

const defaultColor = '#485eea';

type Props = {
  title: string;
  color?: string;
  onPress?: () => void;
  active: boolean;
};

const MyRadio = ({title, active, color, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
      <View
        style={{
          borderColor: color ? color : defaultColor,
          height: 20,
          width: 20,
          borderWidth: 1,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {active && (
          <View
            style={{
              height: 15,
              width: 15,
              backgroundColor: color ? color : defaultColor,
              borderRadius: 15,
            }}
          />
        )}
      </View>
      <SmallText style={{fontSize: 12, opacity: 0.5, marginLeft: 5}}>
        {title}
      </SmallText>
    </TouchableOpacity>
  );
};

export default MyRadio;
