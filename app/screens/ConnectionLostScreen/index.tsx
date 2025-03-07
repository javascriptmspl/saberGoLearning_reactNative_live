import {View, Text, Image} from 'react-native';
import React from 'react';
import {DashboardStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {BigText, RegularText} from '../../components/MyText';
import {COLORS} from '../../constants/theme';

const ConnectionLostScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  React.useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () => {
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '68%',
          backgroundColor: '#ADB3F5',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/images/ConnectionLostIMG.png')}
          style={{
            resizeMode: 'contain',
            width: '100%',
            height: '105%',
          }}
        />
      </View>
      <View
        style={{
          marginTop: 30,
          height: 50,
          borderBottomColor: 'rgba(0,0,0,0.2)',
          //   borderBottomColor: COLORS.gray,
          borderBottomWidth: 2,
        }}>
        <BigText style={{alignSelf: 'center', fontSize: 30}}>
          Connection Lost
        </BigText>
      </View>
      <RegularText
        style={{
          fontSize: 13,
          alignSelf: 'center',
          color: COLORS.gray,
          marginTop: 20,
        }}>
        Apologies! It seems we've temporarily
      </RegularText>
      <RegularText
        style={{
          fontSize: 13,
          alignSelf: 'center',
          color: COLORS.gray,
        }}>
        lost connection. Please check your
      </RegularText>
      <RegularText
        style={{
          fontSize: 13,
          alignSelf: 'center',
          color: COLORS.gray,
        }}>
        internet connection and refresh the page
      </RegularText>
      <RegularText
        style={{
          fontSize: 13,
          alignSelf: 'center',
          color: COLORS.gray,
        }}>
        to continue exploring our website.
      </RegularText>
    </View>
  );
};

export default ConnectionLostScreen;
