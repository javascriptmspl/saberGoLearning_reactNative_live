import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import {Touchable} from 'react-native';
import MainLayout from '../../components/Layout/MainLayout';
import {ScrollView} from 'react-native-gesture-handler';
const data = [
  {
    img: require('../../../assets/images/Syllabus.png'),
    isBtn: true,
    name: 'jhone',
  },
  {
    img: require('../../../assets/images/project.png'),
    isBtn: true,
    name: 'Kids',
  },
  {
    img: require('../../../assets/images/classes.png'),
    isBtn: true,
    name: 'Marry',
  },
  {
    img: require('../../../assets/images/assignment.png'),
    isBtn: true,
    name: 'jessica',
  },

  {
    img: require('../../../assets/images/grades.png'),
    isBtn: false,
    name: 'Add',
  },
  {
    img: require('../../../assets/images/task.png'),
    isBtn: false,
    name: 'Add',
  },
  {
    img: require('../../../assets/images/discussion.png'),
    isBtn: false,
    name: 'Add',
  },
];
const List = ({item}: any) => {
  const d = useWindowDimensions();
  const handleCategoryPress = (category: string) => {
    if (category === data[0].img) {
      navigation.navigate('Syllabus');
    }
    if (category === data[2].img) {
      navigation.navigate('Classes');
    }
    if (category === data[3].img) {
      navigation.navigate('Assignment');
    }
    if (category === data[1].img) {
      navigation.navigate('Project');
    }
    if (category === data[6].img) {
      navigation.navigate('Discussion');
    }
    if (category === data[4].img) {
      navigation.navigate('Grade');
    }
    if (category === data[5].img) {
      navigation.navigate('Task');
    }
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <View>
      <TouchableOpacity
        onPress={() => handleCategoryPress(item.img)}
        style={{
          width: d.width / 2.5,
          margin: 10,

          height: d.width / 2.5,
          borderRadius: 20,

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </TouchableOpacity>
      <Text style={{color: 'white', textAlign: 'center'}}>{item.name}</Text>
    </View>
  );
};

const MeanStackScreen = () => {
  const d = useWindowDimensions();

  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
          }}>
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={data}
              contentContainerStyle={{
                marginTop: 20,
              }}
              numColumns={2}
              renderItem={({item}) => {
                return <List item={item} />;
              }}
            />
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default MeanStackScreen;
