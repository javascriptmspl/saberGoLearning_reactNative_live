import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import {FONTS} from '../../../assets/fonts';

const JobsListView = ({allJobs}: {allJobs: any}) => {
  function openLink(link: string) {
    Linking.openURL(link);
  }
  return (
    <FlatList
      data={allJobs}
      renderItem={({item, index}) => {
        return (
          <View
            style={{
              backgroundColor: 'white',
              height: 130,
              margin: 5,
              flexDirection: 'row',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
              borderTopRightRadius: 5,
            }}>
            <View
              style={{
                width: 130,
                height: 130,
                backgroundColor: COLORS.white,
                borderTopLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}>
              <Image
                source={
                  index % 2
                    ? require('../../../assets/images/job1.png')
                    : require('../../../assets/images/job2.png')
                }
                style={{
                  width: 120,
                  height: 130,
                  borderTopLeftRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              />
            </View>
            <View style={{padding: 15, marginTop: 10, marginLeft: 5}}>
              <TouchableOpacity onPress={() => openLink(item?.website)}>
                <Text
                  numberOfLines={2}
                  style={{
                    color: 'black',
                    fontSize: 17,
                    width: 200,
                    fontFamily: FONTS.Rajdhani.Bold,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                  alignItems: 'center',
                }}>
                <FontAwesome
                  onPress={() => openLink(`tel:${item?.phone}`)}
                  style={{marginRight: 10}}
                  name="phone"
                  size={15}
                  color={COLORS.gray}
                />
                <Foundation
                  onPress={() => openLink(`mailto:${item?.email}`)}
                  style={{marginRight: 10}}
                  name="mail"
                  size={16}
                  color={COLORS.gray}
                />
                <Entypo
                  onPress={() => openLink(item?.linked_url)}
                  style={{marginRight: 10, marginTop: -2}}
                  name="linkedin"
                  size={14}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default JobsListView;
