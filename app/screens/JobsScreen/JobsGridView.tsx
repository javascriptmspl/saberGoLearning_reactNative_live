import {
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../constants/theme';
import {getCourseImageUrl} from '../../api';
import {FONTS} from '../../../assets/fonts';

const {width: W, height: H} = Dimensions.get('screen');
const JobsGridView = ({allJobs, loading}: {allJobs: any; loading: boolean}) => {
  function openLink(link: string) {
    Linking.openURL(link);
  }
  return (
    <View style={{paddingBottom: 70}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={allJobs}
        ListEmptyComponent={() => {
          if (loading) {
            return (
              <View
                style={{
                  flex: 1,
                  height: 500,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size={'large'} color={COLORS.purple} />
              </View>
            );
          } else {
            return (
              <View
                style={{
                  flex: 1,
                  height: 500,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <RegularText>No Jobs !</RegularText>
              </View>
            );
          }
        }}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                margin: 5,
                height: 320,
                flex: 1 / 2,
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
                marginTop: 20,
              }}>
              <View
                style={{
                  width: '100%',
                  height: 120,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={
                    index % 2
                      ? require('../../../assets/images/job1.png')
                      : require('../../../assets/images/job2.png')
                  }
                  style={{
                    // resizeMode: 'contain',
                    width: '100%',
                    height: H * 0.16,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    backgroundColor: 'red',
                  }}
                />
                {/* <Image
                  style={{
                    marginVertical: 10,
                    width: '100%',
                    height: 90,
                  }}
                  source={{uri: getCourseImageUrl(item.image)}}
                /> */}
              </View>
              <View
                style={{
                  marginLeft: 5,
                  marginTop: 5,
                  // backgroundColor: 'blue',
                }}>
                <TouchableOpacity
                  // onPress={() => openLink(item?.website)}
                  style={{height: H * 0.13}}>
                  <RegularText
                    style={{
                      marginBottom: 2,
                      color: 'black',
                      fontSize: 14,
                      paddingRight: 10,
                      marginTop: 20,
                      fontFamily: FONTS.Rajdhani.Bold,
                    }}>
                    {item.name}
                  </RegularText>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    // marginLeft: 5,
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Entypo
                    style={{marginRight: 15, marginTop: -2}}
                    name="location-pin"
                    size={14}
                    color={COLORS.gray}
                  />
                  <RegularText style={{marginBottom: 2, color: 'grey'}}>
                    Phase8,mohali
                  </RegularText>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 5,
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <FontAwesome
                    onPress={() => openLink(`tel:${item?.phone}`)}
                    style={{marginRight: 15}}
                    name="phone"
                    size={15}
                    color={COLORS.gray}
                  />
                  <Foundation
                    onPress={() => openLink(`mailto:${item?.email}`)}
                    style={{marginRight: 15}}
                    name="mail"
                    size={16}
                    color={COLORS.gray}
                  />
                  <Entypo
                    onPress={() => openLink(item?.linked_url)}
                    style={{marginRight: 15, marginTop: -2}}
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
    </View>
  );
};

export default JobsGridView;
