import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RegularText} from '../../components/MyText';

const List = ({item}: any) => {
  return (
    <View
      style={{
        //flexDirection:"row",
        backgroundColor: 'white',
        marginTop: 30,
        height: 120,
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
          marginTop: -10,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: 'pink',
            // marginTop: -10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'normal',
              textAlign: 'center',
              fontSize: 13,
            }}>
            High
          </Text>
        </TouchableOpacity>
        <View style={{height: 60, width: 60}}>
          <Image
            source={require('../../../assets/images/author.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <RegularText bold style={{marginTop: -10}}>
        Matrimony App Design
      </RegularText>
      <RegularText style={{color: 'grey'}}>Dec 23,2023,6:07:00 PM</RegularText>
      <RegularText style={{color: 'grey'}}>#uidesign</RegularText>
    </View>
  );
};

const TaskScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack}>
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#6D45F3',

              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 13,
              }}>
              Current
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              // backgroundColor: '#6D45F3',
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'grey',
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 13,
              }}>
              In Review
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              // backgroundColor: '#6D45F3',
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'grey',
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 13,
              }}>
              Completed
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 10,
              //backgroundColor: '#6D45F3',
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'grey',
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 13,
              }}>
              Panding
            </Text>
          </TouchableOpacity>
        </View>
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

export default TaskScreen;
