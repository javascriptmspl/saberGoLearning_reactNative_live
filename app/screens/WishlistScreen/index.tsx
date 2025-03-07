import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  DashboardStackParams,
  RootStackParams,
  TabNavigatorParams,
  WishlistStackParams,
} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import ListView from '../AllCourses/DevelopmentCourse/ListView';
import {FlatList} from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';
import {api_deleteWishList, api_getWishList} from '../../api/wishlist';
import {useSelector} from 'react-redux';
import {authSelector, ghostSelector} from '../../redux/feature/auth/authSlice';
import FullScreenLoader from '../../components/FullScreenLoader';
import {PRICE_SYMBOL} from '../../constants';
import {getCourseImageUrl} from '../../api';

// Buttons
var swipeoutBtns = [
  {
    text: 'Button',
  },
];

const WishlistScreen = () => {
  const [view, setView] = useState(1);
  const [allCourse, setAllCourse] = useState([]);
  const auth = useSelector(authSelector);
  const isFocused = useIsFocused();
  const navigation =
    useNavigation<NativeStackNavigationProp<TabNavigatorParams>>();
  const [list, setList] = React.useState([]);
  const [loadingIndex, setLoadingIndex] = React.useState<number>(-1);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const isGhost = useSelector(ghostSelector);
  const unFavApi = async (index: number, id: any) => {
    try {
      setLoadingIndex(index);
      const res = await api_deleteWishList(id);
      console.log(res);
    } catch (error: any) {
      console.log(error);

      Alert.alert('Alert', error?.message);
    } finally {
      init();
      setLoadingIndex(-1);
    }
  };
  const init = async () => {
    if (isGhost) return;
    try {
      setList([]);
      setLoading(true);
      const res = await api_getWishList(auth.id);
      console.log(res, 'res');
      // setList(res.data.items);
      setList(
        res.data.items?.filter((i: any) => {
          if (i?.courseId) {
            return i;
          }
        }) || [],
      );
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error?.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    init();
  }, [navigation, isFocused]);

  console.log({list});
  return (
    <MainLayout
      title="My Wishlist"
      onBack={() => navigation.navigate('Dashboard')}>
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          data={list}
          ListEmptyComponent={() => {
            if (loading) {
              return (
                <View
                  style={{
                    flex: 1,
                    height: 500,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator size={'large'} color={COLORS.purple} />
                </View>
              );
            } else {
              return (
                <View
                  style={{
                    flex: 1,
                    height: 500,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <RegularText>Wishlist is empty!</RegularText>
                </View>
              );
            }
          }}
          renderItem={({item, index}: any) => {
            const data = item?.courseId;
            return (
              <TouchableOpacity
                onPress={() =>
                  //@ts-ignore
                  navigation.navigate('CourseDetail', {courseId: data._id})
                }
                style={{
                  backgroundColor: 'white',
                  height: 100,
                  margin: 5,
                  flexDirection: 'row',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                  borderTopRightRadius: 5,
                }}>
                <View
                  style={{
                    width: 120,
                    height: 100,
                    backgroundColor: COLORS.white,
                    borderTopLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      marginVertical: 10,
                      width: 120,
                      height: 100,
                      borderTopLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      resizeMode: 'contain',
                    }}
                    source={{uri: getCourseImageUrl(data?.image)}}
                  />
                </View>

                <View style={{padding: 15}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 14,
                      width: 155,
                    }}>
                    {data?.title}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.gray,
                      fontSize: 11,
                    }}>
                    {data?.course_category.displayname}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <StarRating
                      starStyle={{marginTop: 2}}
                      disabled={false}
                      maxStars={1}
                      rating={1}
                      starSize={12}
                      fullStarColor={'orange'}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: COLORS.gray,
                        fontSize: 11,
                      }}>
                      {data?.rating}
                    </Text>

                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: COLORS.gray,
                        fontSize: 11,
                        marginHorizontal: 10,
                      }}>
                      {PRICE_SYMBOL.india} {data?.total_fees}
                    </Text>
                    <TouchableOpacity
                      onPress={() => unFavApi(index, item._id)}
                      style={{
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {loadingIndex === index ? (
                        <ActivityIndicator size={'small'} />
                      ) : (
                        <AntDesign
                          style={{marginTop: 3}}
                          color={COLORS.gray}
                          size={15}
                          name="heart"
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default WishlistScreen;
