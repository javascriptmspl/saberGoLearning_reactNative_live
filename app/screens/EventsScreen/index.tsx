import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {EventStackParams} from '../../navigation/types';
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
    img: require('../../../assets/images/College.png'),
    title: 'All images',
    size: 'Khalsa College Connect Mohali',
  },
  {
    img: require('../../../assets/images/College.png'),
    title: 'Archieved',
    size: 'Khalsa College Connect Mohali',
  },
  {
    img: require('../../../assets/images/College.png'),
    title: 'All images',
    size: 'Khalsa College Connect Mohali',
  },
  {
    img: require('../../../assets/images/College.png'),
    title: 'Archieved',
    size: 'Khalsa College Connect Mohali',
  },

  {
    img: require('../../../assets/images/College.png'),
    title: 'All images',
    size: 'Khalsa College Connect Mohali',
  },
];

const EventsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<EventStackParams>>();

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 30,
          height: 170,
          margin: 7,
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
        }}>
        <View
          style={{
            width: 130,
            height: 130,
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 20,
            marginLeft: 10,
          }}>
          <Image
            source={item.img}
            style={{
              width: 130,
              height: 130,
              borderTopLeftRadius: 5,
              borderBottomRightRadius: 5,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: FONTS.Rajdhani.Bold,
              marginTop: 20,
            }}>
            {item.size}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // marginLeft: 5,
              alignItems: 'center',
              gap: 10,
              marginTop: 10,
            }}>
            <Entypo name="calendar" size={14} color={COLORS.gray} />
            <RegularText
              style={{
                marginBottom: 2,
                color: 'grey',
                fontFamily: FONTS.Rajdhani.Regular,
              }}>
              Dec 23,2023 ,6:07:00 PM
            </RegularText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // marginLeft: 5,
              alignItems: 'center',
              gap: 10,
              marginTop: 10,
            }}>
            <Entypo name="location-pin" size={14} color={COLORS.gray} />
            <RegularText
              style={{
                marginBottom: 2,
                color: 'grey',
                fontFamily: FONTS.Rajdhani.Regular,
              }}>
              Khalsa College
            </RegularText>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Entypo name="user" size={14} color={COLORS.gray} />
            <RegularText
              style={{
                marginBottom: 2,
                color: 'grey',
                fontFamily: FONTS.Rajdhani.Regular,
              }}>
              Anil
            </RegularText>
          </View>
        </View>
      </View>
    );
  };

  return (
    <MainLayout
      title="Events"
      //@ts-ignore
      onBack={() => navigation.navigate('Dashboard')}>
      <ScrollView>
        <View>
          <TouchableOpacity
            style={{
              padding: 10,
              // height: 50,
              marginTop: 20,
              alignSelf: 'flex-start',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#FF7438',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <AntDesign
              style={{}}
              name="infocirlceo"
              size={14}
              color={'#FF7438'}
            />

            <Text
              style={{
                color: '#FF7438',
                fontFamily: FONTS.Rajdhani.Regular,
                textAlign: 'center',
                fontSize: 13,
              }}>
              Guidelines
            </Text>
          </TouchableOpacity>
          <FlatList data={data} renderItem={renderItem} horizontal={false} />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default EventsScreen;
