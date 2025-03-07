// import {View, Text} from 'react-native';
// import React from 'react';

// const MyCoupanScreen = () => {
//   return (
//     <View>
//       <Text>MyCoupanScreen</Text>
//     </View>
//   );
// };

// export default MyCoupanScreen;

import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import ListView from '../AllCourses/DevelopmentCourse/ListView';
import CoupanList from './CoupanList';

const MyCoupanScreen = () => {
  const [view, setView] = useState(1);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout title="My Coupan" onBack={navigation.goBack}>
      <View
        style={{
          flex: 1,
        }}>
        <CoupanList />
      </View>
    </MainLayout>
  );
};

export default MyCoupanScreen;
