import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BigText, RegularText} from '../../components/MyText';
import NextBtn from '../../components/NextBtn';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/theme';

const {width} = Dimensions.get('window');

type Props = {
  handleSkip: () => void;
  handleNext: () => void;
};

const BoardOne = ({handleSkip, handleNext}: Props) => {
  return (
    <View
      style={{
        width: width,
        backgroundColor: COLORS.blue,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 250,
            height: 250,
            backgroundColor: 'white',
            borderRadius: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/board/one/img.png')}
            style={{
              resizeMode: 'contain',
              width: 250,
            }}
          />
        </View>
      </View>

      <View
        style={{
          height: 350,
          width: '90%',
          backgroundColor: 'white',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BigText style={{marginTop: 80}} bold>
            Live Online Classes
          </BigText>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
            height: 50,
          }}>
          <RegularText style={{opacity: 0.6, marginTop: 10}}>
            {/* Aenean leoigula porttitor eu,consequat */}
            Discover a world of knowledge at your
          </RegularText>
          <RegularText style={{opacity: 0.6}}>
            fingertips with our interactive
          </RegularText>
          <RegularText style={{opacity: 0.6}}>e-learning platform.</RegularText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={handleSkip}>
            {/* <RegularText>Skip</RegularText> */}
          </TouchableOpacity>
          <NextBtn onPress={handleNext} />
        </View>
      </View>
    </View>
  );
};

export default BoardOne;
