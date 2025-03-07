import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';

const data = [
  {
    id: '1',
    title: 'Advanced UX Design Course',
    coupanNo: 'Coupon Numbers :123456 ',
    discount: '50 Off',
    icon: "{require('../../../assets/images/MyCoupanImg/1stImg.png')}",
  },
  {
    id: '2',
    title: 'Digital Marketing ',
    coupanNo: 'Coupon Numbers :123456 ',
    discount: '15 Off',
    icon: "{require('../../../assets/images/MyCoupanImg/2ndImg.png')}",
  },
  {
    id: '3',
    title: 'Bootstrap 05 Basic',
    coupanNo: 'Coupon Numbers :123456 ',
    discount: '80 Off',
    icon: "{require('../../../assets/images/MyCoupanImg/3rdImg.png')}",
  },
  {
    id: '4',
    title: '03 Languages Course 2021',
    coupanNo: 'Coupon Numbers :123456 ',
    discount: '10 Off',
    icon: "{require('../../../assets/images/MyCoupanImg/4thImg.png')}",
  },
];

const CoupanList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={i => i.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 90,
              margin: 5,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: COLORS.blue,
            }}>
            <View
              style={{
                width: 110,
                height: 90,
                backgroundColor: COLORS.blue,
                borderTopLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}></View>
            <View style={{padding: 20}}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>
                ${item.discount}
              </Text>

              <View>
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 11,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: COLORS.gray,
                    fontSize: 11,
                  }}>
                  {item.coupanNo}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default CoupanList;
