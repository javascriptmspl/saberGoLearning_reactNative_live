import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import DMGridView from './OCGridView';
import DMListView from './OCListView';
import {api_getCourseByCategory, api_getOtherCourses} from '../../api/courses';

const OtherCoursesScreen = () => {
  const [view, setView] = useState(1);
  const [otherCourses, setOtherCourses] = useState([]);
  const [loading, setLoading] = React.useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleGetAllCourses = async () => {
    try {
      setLoading(true);
      const res = await api_getOtherCourses(1);
      console.log(res, 'api_getOtherCourses');
      setOtherCourses(res.data.items);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllCourses();
  }, []);

  return (
    <MainLayout title="Other Courses" onBack={navigation.goBack}>
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
        {view === 1 ? (
          <DMGridView otherCourses={otherCourses} loading={loading} />
        ) : null}
        {view === 2 ? (
          <DMListView otherCourses={otherCourses} loading={loading} />
        ) : null}
      </View>
    </MainLayout>
  );
};

export default OtherCoursesScreen;
