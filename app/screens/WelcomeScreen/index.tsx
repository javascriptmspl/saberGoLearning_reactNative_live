import {
  View,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import PrimaryBtn from '../../components/PrimaryBtn';
import SecondaryBtn from '../../components/SecondaryBtn';
import {useDispatch} from 'react-redux';
import {GHOST} from '../../constants';
import {setAuth} from '../../redux/feature/auth/authSlice';
import {COLORS} from '../../constants/theme';

const {width} = Dimensions.get('window');

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleGhostMode = () => {
    dispatch(setAuth(GHOST));
  };

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
            width: 240,
            height: 240,
            backgroundColor: 'white',
            borderRadius: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/welcomeImg.png')}
            style={{
              resizeMode: 'contain',
              width: 200,
              height: 200,
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
            Welcome to Saber Go!
          </BigText>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <RegularText style={{opacity: 0.6, textAlign: 'center'}}>
            Learn, grow, and excel in the rapidly evolving world of technology.
          </RegularText>
          {/* <RegularText style={{opacity: 0.6}}>
            vitae eleifend acenimliquam
          </RegularText> */}
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 20,
            alignItems: 'center',
          }}>
          <SecondaryBtn
            title={'Sign In'}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
          {/* <PrimaryBtn
            title={'Explore'}
            onPress={() => {
              handleGhostMode();
            }}
          /> */}
          <PrimaryBtn
            title={'Enroll Now'}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />

          <TouchableOpacity
            onPress={() => {
              handleGhostMode();
            }}
            style={{}}>
            <RegularText
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                opacity: 0.5,
              }}>
              Skip for now
            </RegularText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
