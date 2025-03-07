import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import AddCardLayout from '../../components/Layout/AddCardLayout';
import {CardStackParams} from '../../navigation/drawer/types';

const AddCardScreen2 = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<CardStackParams>>();
  return (
    <>
      <Image
        source={require('../../../assets/images/MyCardImg/RedCard.png')}
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          zIndex: 100,
          width: 260,
          height: 260,
          // marginTop: -55,
          top: 105,
          alignSelf: 'center',
        }}
      />
      <AddCardLayout title="Add New Card" onBack={navigation.goBack}>
        <View
          style={{
            flex: 1,
            zIndex: 1,
            marginTop: 100,
          }}>
          <RegularText style={{marginTop: 0, fontSize: 14}}>
            Card Type
          </RegularText>
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
            }}>
            <TextInput
              style={{
                color: COLORS.black,
                height: 40,
                marginLeft: -5,
                width: '85%',
                marginRight: 10,
              }}
              placeholder="Visa Card"
              // secureTextEntry={true}
            />
            <AntDesign
              style={{}}
              // onPress={() => navigation.goBack()}
              name="down"
              // name="eye"
              size={15}
              color={'gray'}
            />
          </View>
          <RegularText style={{marginTop: 20, fontSize: 14}}>
            Card Number
          </RegularText>
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
            }}>
            <TextInput
              style={{
                color: COLORS.black,
                height: 40,
                marginLeft: -5,
                width: '85%',
                marginRight: 10,
              }}
              placeholder="+1234567890"
              secureTextEntry={true}
            />
          </View>
          <RegularText style={{marginTop: 20, fontSize: 14}}>
            Card Holder Name
          </RegularText>
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
            }}>
            <TextInput
              style={{
                color: COLORS.black,
                height: 40,
                marginLeft: -5,
                width: '85%',
                marginRight: 10,
              }}
              placeholder="Jemas Williams"
              secureTextEntry={true}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: '48%',
                height: 70,
              }}>
              <RegularText style={{fontSize: 14}}>Expiry Date</RegularText>
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
                }}>
                <TextInput
                  style={{
                    color: COLORS.black,
                    height: 40,
                    marginLeft: -5,
                    width: '85%',
                    marginRight: 10,
                  }}
                  placeholder="Jemas Williams"
                  secureTextEntry={true}
                />
                <Fontisto
                  style={{}}
                  // onPress={() => navigation.goBack()}
                  name="date"
                  size={15}
                  color={COLORS.gray}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: '48%',
                height: 70,
              }}>
              <RegularText style={{fontSize: 14}}>CVV</RegularText>
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
                }}>
                <TextInput
                  style={{
                    color: COLORS.black,
                    height: 40,
                    marginLeft: -5,
                    width: '85%',
                    marginRight: 10,
                  }}
                  placeholder="123"
                  secureTextEntry={true}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20,
              alignItems: 'center',
            }}>
            <PrimaryBtn
              title={'+ Add New Card'}
              onPress={() => {
                navigation.navigate('MyCard');
              }}
            />
          </View>
        </View>
      </AddCardLayout>
    </>
  );
};
export default AddCardScreen2;
