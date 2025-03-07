import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
    name: 'Fhan Khan',
    rating: '4.2',
    price: '879',
  },
  {
    id: '7',
    title: 'Complate HTML Basic Course',
    name: 'Harbat Wigson',
    rating: '4.5',
    price: '785',
  },
  {
    id: '8',
    title: 'Web Developer Course 2021',
    name: 'Jams Williams',
    rating: '5.0',
    price: '358',
  },
  {
    id: '9',
    title: 'Git a web Design Mastering',
    name: 'Luchiya Jons',
    rating: '4.9',
    price: '100',
  },
];

const GridView = () => {
  return (
    <View style={{paddingBottom: 70}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        numColumns={3}
        keyExtractor={i => i.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                margin: 5,
                // width: 120,
                flex: 33.3,
                justifyContent: 'center',
                backgroundColor: 'white',
                paddingVertical: 20,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 2,
              }}>
              <View
                style={{
                  //   width: 120,
                  width: '100%',
                  height: 90,
                  backgroundColor: 'gray',
                  //   position: 'absolute',
                  alignSelf: 'center',
                  top: -20,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}></View>
              <View style={{padding: 5}}>
                <RegularText
                  bold
                  style={{marginBottom: 2, fontSize: 13, marginTop: -20}}>
                  {item.title}
                </RegularText>
                <SmallText style={{textAlign: 'left'}}>{item.name}</SmallText>

                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 10,
                    marginBottom: -10,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <StarRating
                      disabled={false}
                      maxStars={1}
                      rating={4}
                      starSize={13}
                      fullStarColor={'orange'}
                    />
                    <SmallText
                      style={{
                        marginVertical: 2,
                        marginLeft: 2,
                        marginHorizontal: 5,
                      }}>
                      {item.rating}
                    </SmallText>
                  </View>

                  <SmallText
                    style={{marginVertical: 2, marginLeft: 2, flex: 1}}>
                    $ {item.price}
                  </SmallText>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {true ? (
                      <AntDesign name="hearto" size={12} color={'black'} />
                    ) : (
                      <AntDesign name="heart" size={12} color={'red'} />
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default GridView;
