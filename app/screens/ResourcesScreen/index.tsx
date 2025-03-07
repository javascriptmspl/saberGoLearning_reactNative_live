import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Linking,
  FlatList,
  Platform,
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

import RNFetchBlob from 'rn-fetch-blob';

import {api_getAllJobs} from '../../api/jobs';
import {api_getAllResources} from '../../api/resources';
import {getCourseImageUrl, getDocumentUrl} from '../../api';
import {PermissionsAndroid} from 'react-native';
import {useSelector} from 'react-redux';
import {ghostSelector} from '../../redux/feature/auth/authSlice';
import {FONTS} from '../../../assets/fonts';

const data = [
  {
    id: '1',
    name: 'Robart Williams',
    bio: 'Web Development',
  },
];

const ResourcesScreen = () => {
  const [view, setView] = useState(1);
  const [allResources, setAllResources] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const isGhost = useSelector(ghostSelector);
  const actualDownload = (fileString: string) => {
    const {dirs} = RNFetchBlob.fs;

    const DOC_URL = getDocumentUrl(fileString);
    console.log({DOC_URL});
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `${fileString}`,
        path: `${dirs.DownloadDir}/${fileString}`,
      },
    })
      .fetch('GET', DOC_URL, {})
      .then((res: any) => {
        console.log('File Downloaded', 'The file saved to ', res.path());
        Alert.alert('File Downloaded', `The file saved to downloads!`);
      })
      .catch((e: any) => {
        console.log(e);
        Alert.alert('Alert', e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const downloadFile = async (fileString: string) => {
    if (isGhost) {
      Alert.alert(
        'Alert',
        'You are in Ghost Mode! Please Login to access More Feature',
      );
      return;
    }

    try {
      console.log(Platform);
      let granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (Platform.OS === 'android' && Platform.Version >= 33) {
        actualDownload(fileString);
        return;
      }

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        actualDownload(fileString);
      } else {
        Alert.alert(
          'Permission Denied!',
          'You need to give storage permission to download the file',
        );
        setLoading(false);
      }
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  };

  const handleGetAllResources = async () => {
    try {
      setLoading(true);
      const res = await api_getAllResources(1);
      console.log(res, 'AllResources');
      setAllResources(res.items);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllResources();
  }, []);

  return (
    <MainLayout
      title="Resources "
      //@ts-ignore
      onBack={() => navigation.navigate('Dashboard')}>
      <FlatList
        data={allResources}
        renderItem={({item}: any) => {
          return (
            <View
              style={{
                backgroundColor: 'white',

                height: 150,
                margin: 7,
                flexDirection: 'row',

                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
              }}>
              <View
                style={{
                  width: 120,
                  height: 100,
                  backgroundColor: COLORS.white,
                }}>
                <Image
                  source={{uri: getCourseImageUrl(item.image)}}
                  style={{
                    width: 120,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderBottomRightRadius: 5,
                  }}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text
                  numberOfLines={1}
                  style={{
                    color: 'black',
                    fontSize: 15,
                    width: 300,
                    height: 35,
                    marginTop: 5,
                    //backgroundColor: 'red',
                  }}>
                  {item.content}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text
                    numberOfLines={2}
                    // ellipsizeMode="tail"
                    style={{
                      color: COLORS.gray,
                      width: '80%',
                      height: 50,
                      fontSize: 12,
                      marginTop: -5,
                      // backgroundColor: 'red',
                    }}>
                    {item.description}
                  </Text>
                  {/* <View style={{marginLeft: 2}}>
                    <AntDesign
                      onPress={() => downloadFile(item?.docume
                        nts)}
                      style={{marginTop: 12}}
                      name="download"
                      size={17}
                      color={'black'}
                    />
                    <SmallText>Get</SmallText>
                  </View> */}
                </View>
                <TouchableOpacity
                  style={{
                    padding: 4,
                    height: 30,
                    marginTop: 20,
                    alignSelf: 'flex-start',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#6D45F3',
                  }}>
                  <Text
                    style={{
                      color: '#6D45F3',
                      // fontWeight: 'normal',
                      textAlign: 'center',
                      fontSize: 13,
                      fontFamily: FONTS.Rajdhani.Bold,
                    }}>
                    Download
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </MainLayout>
  );
};

export default ResourcesScreen;
