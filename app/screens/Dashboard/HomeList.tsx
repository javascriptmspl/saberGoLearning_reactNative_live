import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {DashboardStackParams, EventStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import MainLayout from '../../components/Layout/MainLayout';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RegularText, SmallText} from '../../components/MyText';
import {COLORS} from '../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import {FONTS} from '../../../assets/fonts';
const {width, height} = Dimensions.get('window');
const data = [
  {
    img: require('../../../assets/images/computer.png'),
    title: 'All images',
    size: 'Web Full Stack',
  },
  {
    img: require('../../../assets/images/computer.png'),
    title: 'Archieved',
    size: 'Web Full Stack',
  },
  {
    img: require('../../../assets/images/computer.png'),
    title: 'All images',
    size: 'Web Full Stack',
  },
  {
    img: require('../../../assets/images/computer.png'),
    title: 'Archieved',
    size: 'Web Full Stack',
  },

  {
    img: require('../../../assets/images/computer.png'),
    title: 'All images',
    size: 'Web Full Stack',
  },
];

const HomeList = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          backgroundColor: 'white',

          height: 120,
          margin: 10,
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          borderRadius: 15,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 90,
            height: 100,
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 10,
            marginLeft: 10,
          }}>
          <Image
            source={item.img}
            style={{
              width: 90,
              height: 90,
              borderTopLeftRadius: 5,
              borderBottomRightRadius: 5,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{marginLeft: 10, marginTop: -10, flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // gap: 130,
            }}>
            <Text
              style={{
                color: '#FF7438',
                fontSize: 14,
                fontFamily: FONTS.Rajdhani.Bold,
              }}>
              {item.size}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                marginRight: 10,
                fontFamily: FONTS.Rajdhani.Bold,
              }}>
              $6K
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              //@ts-ignore
              navigation.navigate('MeanStack');
            }}>
            <RegularText
              style={{
                marginBottom: 2,
                color: 'black',
                fontFamily: FONTS.Rajdhani.Bold,
              }}>
              Mean Stack-Quick
            </RegularText>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
            <View
              style={{
                flexDirection: 'row',
                // marginLeft: 5,
                alignItems: 'center',
              }}>
              <Entypo name="location-pin" size={14} color={COLORS.gray} />
              <RegularText
                style={{
                  marginBottom: 2,
                  color: 'grey',
                  fontFamily: FONTS.Rajdhani.Regular,
                }}>
                English
              </RegularText>
            </View>
            <View
              style={{
                flexDirection: 'row',

                gap: 5,
              }}>
              <AntDesign name="user" size={14} color={COLORS.gray} />
              <RegularText style={{marginBottom: 2, color: 'grey'}}>
                Online
              </RegularText>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnlinePayment')}
            style={{
              padding: 6,
              // height: 25,

              alignSelf: 'flex-start',
              borderRadius: 10,
              marginTop: 7,
              backgroundColor: '#6D45F3',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 12,
                fontFamily: FONTS.Rajdhani.Bold,
              }}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{marginTop: -100, padding: 10}}>
      <FlatList data={data} renderItem={renderItem} horizontal={false} />
    </View>
  );
};

export default HomeList;
