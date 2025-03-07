import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RegularText} from '../../components/MyText';
import {COLORS} from '../../constants/theme';
import {FONTS} from '../../../assets/fonts';
const data = [
  {
    img: require('../../../assets/images/it.png'),
    title: 'Delta4 infotech',
    size: '20 Files',
  },
  {
    img: require('../../../assets/images/it.png'),
    title: 'Delta4 infotech',
    size: '20 Files',
  },
  {
    img: require('../../../assets/images/it.png'),
    title: 'Delta4 infotech',
    size: '20 Files',
  },
  {
    img: require('../../../assets/images/it.png'),
    title: 'Delta4 infotech',
    size: '20 Files',
  },
];

const List = ({item, index}: any) => {
  return (
    <TouchableOpacity
      style={{
        margin: 10,

        width: 180,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        overflow: 'hidden',
        marginLeft: 22,
      }}>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'gray',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            marginVertical: 10,
            width: '60%',
            height: 60,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <RegularText
          bold
          style={{
            // marginVertical: 2,
            // height: 40,
            marginTop: 5,
            color: 'black',
          }}>
          {item.title}
        </RegularText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Entypo style={{}} name="location-pin" size={14} color={COLORS.gray} />
        <RegularText
          style={{color: 'grey', fontFamily: FONTS.Rajdhani.Regular}}>
          Phase8,mohali
        </RegularText>
      </View>
    </TouchableOpacity>
  );
};

const Recommended = () => {
  return (
    <View style={{}}>
      <FlatList
        // ListFooterComponent={({}) => {
        //   return <View style={{height: 230}}></View>;
        // }}
        contentContainerStyle={{
          gap: 20,
          //   backgroundColor: 'blue',
          //   justifyContent: 'center',
          //   alignItems: 'center',
        }}
        numColumns={2}
        data={data}
        renderItem={({item}) => {
          return <List item={item} />;
        }}
      />
    </View>
  );
};

export default Recommended;
