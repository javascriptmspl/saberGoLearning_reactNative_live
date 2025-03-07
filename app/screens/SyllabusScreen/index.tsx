import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import Entypo from 'react-native-vector-icons/Entypo';
const List = ({item}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 90,
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
        <Entypo style={{}} name="controller-play" size={14} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

const SyllabusScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <MainLayout title="Courses" onBack={navigation.goBack}>
      <ScrollView style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <RegularText bold style={{color: 'black'}}>
            Section 01-Introduction
          </RegularText>
          <RegularText style={{color: '#6D45F3'}}>25 Mins</RegularText>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({item}) => {
            return <List item={item} />;
          }}
        />
      </ScrollView>
    </MainLayout>
  );
};

export default SyllabusScreen;
