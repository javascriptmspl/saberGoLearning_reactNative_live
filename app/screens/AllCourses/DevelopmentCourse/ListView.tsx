import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';

const data = [
  {
    id: '1',
    title: 'Bootstep Update Master Courses',
    name: 'Jams Williams',
    rating: '4.3',
    price: '123',
  },
  {
    id: '2',
    title: 'We Development Course 1.5 ',
    name: 'Robat Jonson',
    rating: '5.0',
    price: '451',
  },
  {
    id: '3',
    title: 'Advanced HTML Course',
    name: 'Kasani Dasto',
    rating: '4.8',
    price: '155',
  },
  {
    id: '4',
    title: 'Adjust Develop HTML Courses',
    name: 'Evanto Jamsbon',
    rating: '3.5',
    price: '123',
  },
  {
    id: '5',
    title: 'Bootstep Update Master Courses',
    name: 'Evanto Jamsbon',
    rating: '4.5',
    price: '156',
  },
  {
    id: '6',
    title: 'Marketing with Development',
    name: 'Jams Williams',
    rating: '4.3',
    price: '123',
  },
];

const ListView = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={i => i.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 100,
              margin: 5,
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 120,
                height: 100,
                backgroundColor: COLORS.gray,
                borderTopLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}></View>
            <View style={{padding: 15}}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>
                {item.title}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: COLORS.gray, fontSize: 11}}>
                {item.name}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <StarRating
                  starStyle={{marginTop: 2}}
                  disabled={false}
                  maxStars={1}
                  rating={1}
                  starSize={12}
                  fullStarColor={'orange'}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: COLORS.gray,
                    fontSize: 11,
                  }}>
                  {item.rating}
                </Text>

                <Text
                  style={{
                    fontWeight: 'bold',
                    color: COLORS.gray,
                    fontSize: 11,
                    marginHorizontal: 10,
                  }}>
                  ${item.price}
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
        );
      }}
    />
  );
};

export default ListView;
