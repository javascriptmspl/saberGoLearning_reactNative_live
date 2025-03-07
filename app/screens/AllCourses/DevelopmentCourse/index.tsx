import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../../navigation/types';
import MainLayout from '../../../components/Layout/MainLayout';
import PrimaryBtn from '../../../components/PrimaryBtn';
import ListView from './ListView';
import GridView from './GridView';

const DevelopmentCourseScreen = () => {
  const [view, setView] = useState(1);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout title="Development" onBack={navigation.goBack}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Ionicons
            style={{}}
            onPress={() => setView(1)}
            name="grid-sharp"
            size={25}
            color={view === 1 ? COLORS.blue : COLORS.gray}
          />
          <Fontisto
            style={{marginLeft: 10}}
            onPress={() => setView(2)}
            name="nav-icon-list"
            size={20}
            color={view === 2 ? COLORS.blue : COLORS.gray}
          />
        </View>
        {view === 1 ? <GridView /> : null}
        {view === 2 ? <ListView /> : null}
        {/* <GridView /> */}
        {/* <ListView /> */}
      </View>
    </MainLayout>
  );
};

export default DevelopmentCourseScreen;
