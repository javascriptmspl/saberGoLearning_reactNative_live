import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Linking,
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
import JobsGridView from './JobsGridView';
import JobsListView from './JobsListView';
import {api_getAllJobs} from '../../api/jobs';

const jobID = `6325ce10bc4b543c7a2429ad`;

const JobsScreen = () => {
  const [view, setView] = useState(1);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleGetAllJobs = async () => {
    try {
      setLoading(true);
      const res = await api_getAllJobs();
      console.log(res, 'AllJobs');
      setAllJobs(res.data.items);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllJobs();
  }, []);

  return (
    <MainLayout
      title="Jobs"
      //@ts-ignore
      onBack={() => navigation.navigate('Dashboard')}>
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
          <JobsGridView allJobs={allJobs} loading={loading} />
        ) : null}
        {view === 2 ? <JobsListView allJobs={allJobs} /> : null}
      </View>
    </MainLayout>
  );
};

export default JobsScreen;
