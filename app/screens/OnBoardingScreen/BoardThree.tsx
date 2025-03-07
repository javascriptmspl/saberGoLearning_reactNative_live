import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import React from 'react';
import {BigText, RegularText} from '../../components/MyText';
import NextBtn from '../../components/NextBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('window');
type Props = {
  handleSkip?: () => void;
  handleNext?: () => void;
};
const BoardThree = ({}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  function handleNext() {
    navigation.navigate('Welcome');
  }
  return (
    <View
      style={{
        width: width,
        backgroundColor: '#6d45f3',
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
            source={require('../../../assets/images/board/three/img.png')}
            style={{
              resizeMode: 'contain',
              width: 220,
              height: 220,
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
            marginTop: 80,
          }}>
          <BigText style={{}} bold>
            Get certificate
          </BigText>
          <BigText style={{}} bold>
            for online courses
          </BigText>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 20,
            height: 50,
          }}>
          <RegularText style={{opacity: 0.6}}>
            Earn valuable certificates to showcase
          </RegularText>
          <RegularText style={{opacity: 0.6}}>
            through our online courses.
          </RegularText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={handleNext}>
            {/* <RegularText>Skip</RegularText> */}
          </TouchableOpacity>
          <NextBtn onPress={handleNext} />
        </View>
      </View>
    </View>
  );
};

export default BoardThree;
