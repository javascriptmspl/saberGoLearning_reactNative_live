import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import StarRating from 'react-native-star-rating';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {CardStackParams} from '../../navigation/drawer/types';

const MyCardScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<CardStackParams>>();
  return (
    <MainLayout title="My Card" onBack={navigation.goBack}>
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: 'white', height: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 170,
              justifyContent: 'center',
              alignItems: 'center',
              width: 265,
              marginHorizontal: 5,
              marginLeft: 40,
              marginTop: 20,
            }}>
            <Image
              source={require('../../../assets/images/MyCardImg/BlueCard.png')}
              style={{
                resizeMode: 'contain',
                width: 260,
                height: 260,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 170,
              justifyContent: 'center',
              alignItems: 'center',
              width: 265,
              marginHorizontal: 5,
              marginTop: 20,
            }}>
            <Image
              source={require('../../../assets/images/MyCardImg/RedCard.png')}
              style={{
                resizeMode: 'contain',
                width: 260,
                height: 260,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 170,
              justifyContent: 'center',
              alignItems: 'center',
              width: 265,
              marginHorizontal: 5,
              marginTop: 20,
            }}>
            <Image
              source={require('../../../assets/images/MyCardImg/BlueCard.png')}
              style={{
                resizeMode: 'contain',
                width: 260,
                height: 260,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 170,
              justifyContent: 'center',
              alignItems: 'center',
              width: 265,
              marginHorizontal: 5,
              marginTop: 20,
            }}>
            <Image
              source={require('../../../assets/images/MyCardImg/RedCard.png')}
              style={{
                resizeMode: 'contain',
                width: 260,
                height: 260,
              }}
            />
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 50,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 120,
              width: '48%',
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: '#FFF8E6',
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RegularText>Total Deposit</RegularText>
            <BigText bold style={{color: '#FF7438'}}>
              $4,265.00
            </BigText>
          </View>
          <View
            style={{
              height: 120,
              width: '48%',
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: '#FFF8E6',
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RegularText>Current Credit</RegularText>
            <BigText bold style={{color: '#078C73'}}>
              $8,000.00
            </BigText>
          </View>
        </View>
        <View style={{height: 250, alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCard1')}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              backgroundColor: '#FF7438',
              marginTop: 50,
              padding: 0,
              //   alignItems: 'center',
              //   justifyContent: 'center',
            }}>
            <Ionicons name="ios-add" size={40} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};

export default MyCardScreen;
