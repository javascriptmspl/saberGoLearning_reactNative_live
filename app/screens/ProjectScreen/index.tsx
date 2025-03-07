import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {RegularText} from '../../components/MyText';
import MainLayout from '../../components/Layout/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {FONTS} from '../../../assets/fonts';

const List = ({item}: any) => {
  return (
    <View
      style={{
        //flexDirection:"row",
        backgroundColor: 'white',
        marginTop: 30,
        height: 150,
        margin: 7,
        padding: 10,
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <RegularText
          style={{color: '#FF7438', fontFamily: FONTS.Rajdhani.Bold}}>
          Complete Python Program for Real Applications
        </RegularText>
      </View>

      <RegularText bold style={{color: 'black'}}>
        Diego Arce Irazusta
      </RegularText>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <RegularText bold style={{color: 'grey'}}>
          04 Jan
        </RegularText>
        <TouchableOpacity
          style={{
            padding: 3,
            // marginTop: 20,
            alignSelf: 'flex-start',
            borderRadius: 15,
            // borderWidth: 1,
            backgroundColor: '#28BA5E',
            //  flexDirection: 'row',
            alignItems: 'center',
            // gap: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'normal',
              textAlign: 'center',
              fontSize: 13,
            }}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AssignmentScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <MainLayout title="Projects" onBack={navigation.goBack}>
      <View>
        <FlatList
          data={[1, 2, 3]}
          renderItem={({item}) => {
            return <List item={item} />;
          }}
        />
      </View>
    </MainLayout>
  );
};

export default AssignmentScreen;
