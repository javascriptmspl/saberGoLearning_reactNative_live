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

const PaymentScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WishlistStackParams>>();
  return (
    <MainLayout title="Payment" onBack={navigation.goBack}>
      <View
        style={{
          flex: 1,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            height: 100,
            margin: 5,
            flexDirection: 'row',
            marginTop: 30,
          }}>
          <View
            style={{
              width: 130,
              height: 110,
              backgroundColor: COLORS.gray,
              borderTopLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Image
              source={require('../../../assets/images/paymentImg/CourseImg.png')}
              style={{
                // resizeMode: 'contain',
                width: 130,
                height: 110,
              }}
            />
          </View>
          <View style={{padding: 10, marginTop: 5}}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>
              Basic Graphics Course 20121
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  //   fontWeight: 'bold',
                  color: COLORS.gray,
                  fontSize: 11,
                }}>
                $123
              </Text>

              <Text
                style={{
                  //   fontWeight: 'bold',
                  color: COLORS.gray,
                  fontSize: 11,
                  marginHorizontal: 10,
                }}>
                785 hours
              </Text>
              <Text
                style={{
                  color: COLORS.gray,
                  fontSize: 11,
                  marginRight: 10,
                }}>
                4.3
              </Text>
              <AntDesign
                style={{marginTop: 3}}
                color={COLORS.gray}
                size={12}
                name="hearto"
              />
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: COLORS.gray,
            marginTop: 30,
            borderRadius: 5,
            flexDirection: 'row',
            // width: '98%',
            alignSelf: 'center',
          }}>
          <TextInput
            placeholder="Enter Coupan"
            style={{width: '65%', height: 40}}></TextInput>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.lightBlue,
              width: '35%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <RegularText bold style={{color: 'white'}}>
              Apply Coupan
            </RegularText>
          </TouchableOpacity>
        </View>
        <RegularText style={{marginTop: 20}}>Payment by Card</RegularText>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            alignItems: 'center',
            borderTopColor: 'white',
            borderLeftColor: 'transparent',
            borderRightColor: 'white',
            borderBottomColor: COLORS.gray,
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Image
            source={require('../../../assets/images/paymentImg/CardComImg.png')}
            style={{
              resizeMode: 'contain',
              width: 120,
              height: 40,
            }}
          />
          {/* CardComImg */}
          <MaterialCommunityIcons
            style={{}}
            // onPress={() => navigation.goBack()}
            name="circle-slice-8"
            size={15}
            color={COLORS.lightBlue}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            alignItems: 'center',
            borderTopColor: 'white',
            borderLeftColor: 'transparent',
            borderRightColor: 'white',
            borderBottomColor: COLORS.lightBlue,
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={{
              color: COLORS.lightBlue,
              height: 35,
              marginLeft: 5,
              width: '85%',
              marginRight: 10,
            }}
            placeholder="Mobile Banking"
          />
          <FontAwesome
            style={{}}
            onPress={() => navigation.goBack()}
            name="circle"
            size={15}
            color={'lightgray'}
          />
        </View>
        <View style={{padding: 20, alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentDone')}
            style={{
              backgroundColor: COLORS.white,
              width: '60%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#485EEA',
            }}>
            <RegularText bold style={{color: '#757575'}}>
              Payment Now
            </RegularText>
            <RegularText bold style={{color: '#FE9539', marginLeft: 8}}>
              ₹ 123
            </RegularText>
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};

export default PaymentScreen;
