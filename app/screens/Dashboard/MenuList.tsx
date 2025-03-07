import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {SmallText} from '../../components/MyText';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
const data = [
  {
    id: '1',
    name: 'Web Full Stack ',
    icon: require('../../../assets/icons/menu/Web.png'),
    color: '#E8F1FC',
    navigate: 'WebCourses',
  },
  {
    id: '2',
    name: 'Mobile Full Stack ',
    color: '#fef4eb',
    icon: require('../../../assets/icons/menu/Mobile.png'),
    navigate: 'MobileCourses',
  },
  {
    id: '3',
    name: 'Other Courses',
    icon: require('../../../assets/icons/menu/other.png'),
    color: '#e5f9fb',
    navigate: 'OtherCourses',
  },
  {
    id: '4',
    name: 'Jobs',
    icon: require('../../../assets/icons/menu/job.png'),
    color: '#fef4eb',
    navigate: 'JobsScreen',
  },
];

const MenuList = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <View
      style={{
        // position: 'absolute',
        // width: '100%',
        // top: -50,
        //backgroundColor: 'red',
        // top: 210,
        // height: 90,
        // marginTop: -80,
        // backgroundColor: 'red',
        marginTop: 20,
      }}>
      <FlatList
        scrollEnabled={false}
        data={data}
        keyExtractor={i => i.id}
        numColumns={4}
        contentContainerStyle={{marginHorizontal: 20}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              //@ts-ignore
              onPress={() => navigation.navigate(item.navigate)}
              style={{
                height: 80,
                backgroundColor: item.color,
                margin: 8,
                flex: 1,
                maxWidth: 80,
                borderRadius: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10,
                marginLeft: 10,
                // paddingHorizontal: 20,
              }}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'contain',
                }}
                source={item.icon}
              />
              <SmallText bold style={{opacity: 0.7}}>
                {item.name}
              </SmallText>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default MenuList;
