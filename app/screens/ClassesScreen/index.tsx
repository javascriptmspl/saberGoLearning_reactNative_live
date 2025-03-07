import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RegularText} from '../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';

const ClassesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <MainLayout title="Classes" onBack={navigation.goBack}>
      <View>
        <TouchableOpacity
          style={{
            padding: 10,
            marginTop: 20,
            alignSelf: 'flex-end',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#FF7438',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          <AntDesign style={{}} name="plus" size={14} color={'#FF7438'} />

          <Text
            style={{
              color: '#FF7438',
              fontWeight: 'normal',
              textAlign: 'center',
              fontSize: 13,
            }}>
            Add Attendance
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 60,
            marginTop: 20,
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: 'grey',
              alignItems: 'center',
              padding: 5,
            }}>
            <RegularText style={{color: '#6D45F3'}}>01</RegularText>
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <RegularText bold style={{color: 'black'}}>
              Working with graphic designer
            </RegularText>
            <RegularText bold style={{color: 'grey'}}>
              10 mins
            </RegularText>
          </View>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              borderRadius: 15,
              backgroundColor: '#6D45F3',

              padding: 3,
              alignItems: 'center',
            }}>
            <Entypo
              style={{}}
              name="controller-play"
              size={14}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 60,
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: 'grey',
              alignItems: 'center',
              padding: 5,
            }}>
            <RegularText style={{color: '#6D45F3'}}>01</RegularText>
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <RegularText bold style={{color: 'black'}}>
              Working with graphic designer
            </RegularText>
            <RegularText bold style={{color: 'grey'}}>
              10 mins
            </RegularText>
          </View>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              borderRadius: 15,
              backgroundColor: '#6D45F3',
              padding: 3,
              alignItems: 'center',
            }}>
            <Entypo
              style={{}}
              name="controller-play"
              size={14}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};

export default ClassesScreen;
