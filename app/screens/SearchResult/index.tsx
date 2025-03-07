import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import GridView from '../AllCourses/DevelopmentCourse/GridView';
import StarRating from 'react-native-star-rating';
import {getCourseImageUrl, getImageUrl} from '../../api';
import {api_searchCourses} from '../../api/courses';
import {ColorSpace} from 'react-native-reanimated';
import {PRICE_SYMBOL} from '../../constants';
import {useSelector} from 'react-redux';
import {authSelector, ghostSelector} from '../../redux/feature/auth/authSlice';
import {
  api_deleteWishList,
  api_wishListAdd,
  api_wishListRemove,
} from '../../api/wishlist';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';

const Item = ({item}: any) => {
  const [isFav, setIsFav] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  console.log('item', item);
  const auth = useSelector(authSelector);

  const isGhost = useSelector(ghostSelector);
  const addToWishlist = async (id: string) => {
    console.log(id, 'addToWishlist');
    if (isGhost) {
      Alert.alert(
        'Alert',
        'Your On  Ghost Mode! Please Login to access More Feature',
      );
      return;
    }
    try {
      setLoading(true);
      const res = await api_wishListAdd(auth.id, id);
      setIsFav(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (id: string) => {
    console.log(id, 'removeFromWishlist');
    try {
      setLoading(true);
      const res = await api_wishListRemove(auth.id, id);
      console.log(res);
      setIsFav(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CourseDetail', {courseId: item._id})}
      style={{
        margin: 5,
        height: 195,
        flex: 1 / 3,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
      }}>
      <View
        style={{
          width: '100%',
          height: 90,
          backgroundColor: 'gray',
          //   position: 'absolute',
          alignSelf: 'center',
          overflow: 'hidden',

          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{uri: getCourseImageUrl(item?.image)}}
          style={{
            width: '100%',
            height: 90,
            resizeMode: 'contain',
            backgroundColor: COLORS.white,
          }}
        />
      </View>
      <View style={{flex: 1, marginLeft: 5}}>
        <View style={{height: 60}}>
          <RegularText style={{marginBottom: 2}}>{item.title}</RegularText>
        </View>
        <SmallText style={{textAlign: 'left', color: COLORS.gray}}>
          {item?.course_category[0]?.displayname}
        </SmallText>

        <View
          style={{
            flexDirection: 'row',
            marginRight: 10,
            marginBottom: -10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <StarRating
              disabled={false}
              maxStars={1}
              rating={4}
              starSize={13}
              fullStarColor={'orange'}
            />
            <SmallText
              style={{
                marginVertical: 2,
                marginLeft: 2,
                marginHorizontal: 5,
              }}>
              {/* {item?.rating[0]?.rate} */}
            </SmallText>
          </View>

          <SmallText
            style={{
              marginVertical: 2,
              marginLeft: 2,
              flex: 1,
              color: COLORS.gray,
            }}>
            {PRICE_SYMBOL.india}
            {item.total_fees}
          </SmallText>

          <TouchableOpacity
            onPress={() => {
              isFav ? removeFromWishlist(item._id) : addToWishlist(item._id);
            }}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            {loading ? (
              <ActivityIndicator size={'small'} color={'gray'} />
            ) : (
              <AntDesign
                name={isFav ? 'heart' : 'hearto'}
                size={12}
                color={isFav ? COLORS.gray : COLORS.gray}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SearchResultScreen = () => {
  const [data, setData] = useState(useRoute<any>().params?.data || []);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const {filter} = useSelector(s => s) as any;

  console.log({data});
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  const handleSearch = async (str: string) => {
    if (!str) return;
    Keyboard.dismiss();
    try {
      setLoading(true);
      setData([]);
      const res = await api_searchCourses(str, filter);
      console.log(res, 'search');
      setText('');
      setData(res.data);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout title="Search Result" onBack={navigation.goBack}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.white,
              borderRadius: 10,
              width: '75%',
              alignSelf: 'center',
              marginVertical: 20,
              borderColor: 'lightgray',
              borderWidth: 1,
            }}>
            <TextInput
              placeholder="search.."
              style={{
                width: '75%',
                padding: 10,
              }}
              value={text}
              onChangeText={v => setText(v)}
            />
            <TouchableOpacity
              onPress={() => handleSearch(text)}
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
              {loading ? (
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
              margin: 10,
              backgroundColor: '#f47a38',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="ios-filter" color={'white'} size={24} />
          </TouchableOpacity>
        </View>

        <RegularText
          bold
          style={{color: 'black', marginLeft: 5, marginBottom: 10}}>
          {data?.length} Results Show
        </RegularText>
        <View style={{marginBottom: 50}}>
          <View style={{paddingBottom: 70}}>
            <FlatList
              data={data}
              showsHorizontalScrollIndicator={false}
              numColumns={3}
              renderItem={({item}: any) => {
                return <Item item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </MainLayout>
  );
};

export default SearchResultScreen;
