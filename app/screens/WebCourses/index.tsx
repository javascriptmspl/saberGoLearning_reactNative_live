import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
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
import WebListView from './WebListView';
import WebGridView from './WebGridView';
import {api_getCourseByCategory} from '../../api/courses';

// const webfullstackID = `6319d54b5ab9e462a96cfc19`;
const webfullstackID = `6319d5335ab9e462a96cfbfd`;

const WebCoursesScreen = () => {
  const [view, setView] = useState(1);
  const [webAllCourses, setWebAllCourses] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleGetWebCourses = async () => {
    try {
      setLoading(true);
      const res = await api_getCourseByCategory(webfullstackID, 1);
      console.log(res, 'webAllCourses');
      setWebAllCourses(res.data.items);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetWebCourses();
  }, []);

  console.log('webAllCourses', webAllCourses);
  return (
    <MainLayout title="Web Full Stack Courses" onBack={navigation.goBack}>
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
          <WebGridView webAllCourses={webAllCourses} loading={loading} />
        ) : null}
        {/* {view === 2 ? <WebListView webAllCourses={webAllCourses} /> : null} */}
      </View>
    </MainLayout>
  );
};

export default WebCoursesScreen;
