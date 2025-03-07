import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useEffect} from 'react';
import {BigText, RegularText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import MenuList from './MenuList';
import InstructorsList from './InstructorsList';
import CoursesList from './CoursesList';
import BestSellerList from './BestSellerList';
import {api_searchCourses} from '../../api/courses';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import {useSelector} from 'react-redux';
import BlogList from './Blog';
import HomeList from './HomeList';
import Recommended from './Recommended';
import {FONTS} from '../../../assets/fonts';
import {authSelector, ghostSelector} from '../../redux/feature/auth/authSlice';

const {width, height} = Dimensions.get('window');
const Dashboard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  const [searchString, setSearchString] = React.useState('');
  const {filter} = useSelector(s => s) as any;
  const [searchLoading, setSearchLoading] = React.useState(false);
  const auth = useSelector(authSelector);
  const isGhost = useSelector(ghostSelector);
  const handleSearch = async (str: string) => {
    if (!searchString) return;
    try {
      setSearchLoading(true);
      const res = await api_searchCourses(str, filter);
      console.log(res, 'search');
      setSearchString('');
      //@ts-ignore
      navigation.navigate('SearchResult', {data: res.data});
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error?.message);
    } finally {
      setSearchLoading(false);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        navigation
          .getParent()
          ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        navigation
          .getParent()
          ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', paddingBottom: 10}}>
      {/* HEADER */}
      <View style={{height: 200, backgroundColor: 'white', padding: 15}}>
        <Image
          source={require('../../../assets/images/Dashboard/DashboardImg.png')}
          style={{
            position: 'absolute',
            width: width,
            height: 170,
            top: 0,
            left: 0,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <AntDesign
              onPress={() => {
                //@ts-ignore
                navigation.openDrawer();
              }}
              name="menuunfold"
              size={20}
              color={'white'}
            />

            <RegularText
              bold
              style={{
                // textAlign: 'center',
                color: 'white',
                // marginTop: 20,
                //marginHorizontal: 10,
                // marginLeft: 10,
                fontSize: 20,
                marginLeft: 8,
              }}>
              {auth?.name}
            </RegularText>
            {/* <BigText
              bold
              style={{
                textAlign: 'center',
                color: 'white',
                marginHorizontal: 10,
              }}>
              by Online Learning
            </BigText> */}
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            //@ts-ignore
            style={{
              width: 30,
              height: 30,
              borderRadius: 30,
              backgroundColor: '#FE9539',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome color={'#931E8B'} size={18} name="bell-o" />
          </TouchableOpacity>
        </View>
        {/* SEARCH */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '85%',
            alignSelf: 'center',
            gap: 5,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.white,
              borderRadius: 10,
              //marginLeft: 10,
              // marginTop: 10,
            }}>
            <View style={{marginLeft: 5}}>
              <AntDesign color={'black'} size={18} name="search1" />
            </View>
            <TextInput
              placeholder="Mathematics"
              style={{width: '85%', padding: 10}}
              value={searchString}
              onChangeText={setSearchString}
            />
            <TouchableOpacity
              onPress={() => {
                handleSearch(searchString);
                // navigation.navigate('SearchResult');
              }}
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#485eea',
                position: 'absolute',
                right: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {searchLoading ? (
                <ActivityIndicator size="small" color={COLORS.white} />
              ) : (
                <AntDesign name="search1" color={'white'} size={20} />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate('Filter');
            // }}
            onPress={() => {
              SheetManager.show(SHEETS.FilterSheet);
            }}
            style={{
              width: 45,
              height: 45,
              marginRight: 20,
              backgroundColor: '#f47a38',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="ios-filter" color={'white'} size={24} />
          </TouchableOpacity>
        </View>
        {/* SEARCH */}
        <BigText
          bold
          style={{
            color: 'black',
            marginTop: 40,
          }}>
          Learn
        </BigText>
      </View>
      {/* HEADER END */}

      <MenuList />
      {/* <HomeList /> */}
      <InstructorsList />
      <CoursesList />
      <BestSellerList />
      <BlogList />
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <RegularText style={{color: 'black', fontFamily: FONTS.Rajdhani.Bold}}>
          Recommended Jobs
        </RegularText>
        <RegularText
          style={{color: '#FF7438', fontFamily: FONTS.Rajdhani.Bold}}>
          View All
        </RegularText>
      </View>
      <Recommended /> */}
    </ScrollView>
  );
};

export default Dashboard;
