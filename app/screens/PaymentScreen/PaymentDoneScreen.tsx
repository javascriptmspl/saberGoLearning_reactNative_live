import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  DashboardStackParams,
  RootStackParams,
  WishlistStackParams,
} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import StarRating from 'react-native-star-rating';

const PaymentDoneScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WishlistStackParams>>();
  return (
    <MainLayout title="Payment" onBack={navigation.goBack}>
      <View
        style={{
          flex: 1,
          //   justifyContent: 'center',
          //   alignItems: 'center',
        }}>
        <View
          style={{
            height: 300,
            width: 300,
            backgroundColor: 'transparent',
            marginTop: 10,
            // marginLeft: 65,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../../assets/images/paymentImg/TrophyImg.png')}
            style={{
              resizeMode: 'contain',
              height: 300,
              width: 300,
            }}
          />
        </View>
        <View style={{alignSelf: 'center', marginTop: -20}}>
          <AntDesign
            style={{}}
            //   onPress={() => navigation.goBack()}
            name="checkcircle"
            size={60}
            color={'#23B53F'}
          />
        </View>
        <View style={{alignSelf: 'center', marginTop: 10}}>
          <BigText bold style={{alignSelf: 'center'}}>
            Successfully Done
          </BigText>
          <BigText style={{alignSelf: 'center'}} bold>
            You're Payment
          </BigText>
          <RegularText
            style={{alignSelf: 'center', color: COLORS.gray, marginTop: 15}}>
            Successfully create your account
          </RegularText>
          <RegularText style={{alignSelf: 'center', color: COLORS.gray}}>
            now enjoy our apps
          </RegularText>
        </View>
      </View>
    </MainLayout>
  );
};

export default PaymentDoneScreen;
