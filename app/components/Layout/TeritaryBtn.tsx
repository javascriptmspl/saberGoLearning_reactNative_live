import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {RegularText} from '../MyText';

type Props = {
  text: string;
  loading?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const TeritaryBtn = ({
  text,
  loading,
  onPress,
  containerStyle,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 60,
          backgroundColor: '#FF7438',
          width: '100%',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',

          marginTop: 10,
        },
        containerStyle,
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={'#FFF'} />
      ) : (
        <RegularText style={[{color: 'white', fontSize: 18}, textStyle]}>
          {text}
        </RegularText>
      )}
    </TouchableOpacity>
  );
};

export default TeritaryBtn;
