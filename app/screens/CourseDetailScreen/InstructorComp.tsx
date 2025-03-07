import {View, Text, Dimensions, ScrollView, Image} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {COLORS} from '../../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Foundation from 'react-native-vector-icons/Foundation';
import StarRating from 'react-native-star-rating';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
const {width} = Dimensions.get('window');
const InstructorComp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          width,
          zIndex: 1,
          backgroundColor: 'white',
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            height: 140,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -10,
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              backgroundColor: 'gray',
            }}>
            <Image
              source={require('../../../assets/images/InstructorImg.png')}
              style={{
                resizeMode: 'contain',
                height: 100,
                width: 100,
              }}
            />
          </View>
          <View style={{marginLeft: 15}}>
            <RegularText bold>Robat Jonsan</RegularText>
            <RegularText
              style={{fontSize: 10, color: COLORS.gray, marginBottom: 5}}>
              Head Of Develop , DecoIT
            </RegularText>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <StarRating
                disabled={false}
                maxStars={1}
                rating={1}
                starSize={14}
                fullStarColor={'orange'}
              />
              <RegularText
                style={{fontSize: 13, color: COLORS.gray, marginLeft: 10}}>
                5.0 Instructor Rating
              </RegularText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: -2,
              }}>
              <MaterialCommunityIcons
                color={'orange'}
                size={16}
                name="shield-star"
              />
              <RegularText
                style={{fontSize: 13, color: COLORS.gray, marginLeft: 10}}>
                54,875 Review
              </RegularText>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome5 color={'orange'} size={14} name="book-reader" />
              <RegularText
                style={{fontSize: 13, color: COLORS.gray, marginLeft: 10}}>
                1,26,756 Students
              </RegularText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 1,
              }}>
              <Foundation color={'orange'} size={17} name="book-bookmark" />
              <RegularText
                style={{fontSize: 13, color: COLORS.gray, marginLeft: 13}}>
                75 Courses
              </RegularText>
            </View>
          </View>
        </View>
        {/* {} */}
        <RegularText bold style={{marginLeft: 5}}>
          About Instructor
        </RegularText>
        <Text style={{fontSize: 13, marginTop: 5, marginLeft: 5}}>
          Contrary to popular beliefInosi mplyran dom and text. It has do roots
          in a piece of classical Latin literature 45 BC, making it over 2000
          years old.
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome
            style={{}}
            onPress={() => navigation.goBack()}
            name="circle"
            size={10}
            color={'#FE9539'}
          />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13}}>
              Distracted by the readable content of a
            </Text>
            <Text style={{fontSize: 13}}>page when looking at its layout.</Text>
          </View>
        </View>
        {/* {} */}
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <BigText bold> 5.0</BigText>
          <View>
            <RegularText bold style={{marginLeft: 10, marginTop: 3}}>
              Student Feedback
            </RegularText>
            <View style={{flexDirection: 'row', marginLeft: 9, marginTop: 5}}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={4}
                starSize={14}
                fullStarColor={'orange'}
              />
              <SmallText style={{marginLeft: 3}}> (120) Good (5)</SmallText>
            </View>
            <View
              style={{
                height: 4,
                width: 150,
                backgroundColor: COLORS.blue,
                borderRadius: 2,
                marginTop: 15,
                marginLeft: 10,
              }}></View>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <View
                style={{
                  height: 4,
                  width: 130,
                  backgroundColor: COLORS.blue,
                  borderRadius: 2,
                  marginTop: 15,
                  marginLeft: 10,
                  marginRight: 40,
                }}></View>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={4}
                starSize={12}
                fullStarColor={'orange'}
              />
              <SmallText style={{marginLeft: 5}}> 35%</SmallText>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <View
                style={{
                  height: 4,
                  width: 110,
                  backgroundColor: COLORS.blue,
                  borderRadius: 2,
                  marginTop: 15,
                  marginLeft: 10,
                  marginRight: 60,
                }}></View>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={4}
                starSize={12}
                fullStarColor={'orange'}
              />
              <SmallText style={{marginLeft: 5}}> 15%</SmallText>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <View
                style={{
                  height: 4,
                  width: 90,
                  backgroundColor: COLORS.blue,
                  borderRadius: 2,
                  marginTop: 15,
                  marginLeft: 10,
                  marginRight: 80,
                }}></View>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={1}
                starSize={12}
                fullStarColor={'orange'}
              />
              <SmallText style={{marginLeft: 5}}> 6%</SmallText>
            </View>
          </View>
        </View>

        {/* {} */}
      </View>
    </ScrollView>
  );
};

export default InstructorComp;
