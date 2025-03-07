import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {api_getTopCourses} from '../../api/courses';
import {getCourseImageUrl} from '../../api';
import {PRICE_SYMBOL} from '../../constants';
import {COLORS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {useSelector} from 'react-redux';
import {authSelector, ghostSelector} from '../../redux/feature/auth/authSlice';
import {api_wishListAdd, api_wishListRemove} from '../../api/wishlist';
import {FONTS} from '../../../assets/fonts';

const Item = ({item}: any) => {
  const [isFav, setIsFav] = React.useState(false);
  const [wishListLoading, setWishListLoading] = React.useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  const isGhost = useSelector(ghostSelector);
  const auth = useSelector(authSelector);
  const addToWishlist = async (id: string) => {
    if (isGhost) {
      Alert.alert(
        'Alert',
        'You are in Ghost Mode! Please Login to access More Feature',
      );
      return;
    }
    console.log(id, 'addToWishlist');
    try {
      setWishListLoading(true);
      const res = await api_wishListAdd(auth.id, id);
      console.log(res);
      setIsFav(true);
    } catch (error) {
      console.log(error);
    } finally {
      setWishListLoading(false);
    }
  };

  const removeFromWishlist = async (id: string) => {
    console.log(id, 'removeFromWishlist');
    try {
      setWishListLoading(true);
      const res = await api_wishListRemove(auth.id, id);
      console.log(res);
      setIsFav(false);
    } catch (error) {
      console.log(error);
    } finally {
      setWishListLoading(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        //@ts-ignore
        navigation.navigate('CourseDetail', {courseId: item._id});
      }}
      style={{
        margin: 5,
        height: 200,
        width: 200,
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
        overflow: 'hidden',
      }}>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'white',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            marginVertical: 10,
            width: '100%',
            height: 100,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            resizeMode: 'contain',
          }}
          source={{uri: getCourseImageUrl(item.image)}}
        />
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          numberOfLines={2}
          style={{
            marginVertical: 2,
            height: 40,
            marginBottom: 10,
            fontSize: 12,
            fontFamily: FONTS.Rajdhani.Regular,
          }}>
          {item.title}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginRight: 10,
            alignItems: 'center',
            marginBottom: 5,
            marginLeft: 1,
          }}>
          <SmallText
            style={{
              marginVertical: 2,
              marginLeft: 0,
              fontSize: 13,
              color: COLORS.gray,
            }}>
            {PRICE_SYMBOL.india}
            {item.total_fees}
          </SmallText>
          <SmallText
            style={{
              marginVertical: 2,
              marginLeft: 10,
              flex: 1,
              fontSize: 13,
              color: COLORS.gray,
            }}>
            {item?.variations[0]?.displayname}
          </SmallText>
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
              marginLeft: 3,
              marginRight: 10,
              fontSize: 13,
              color: COLORS.gray,
            }}>
            {item?.rating[0]?.rate}
          </SmallText>
          <TouchableOpacity
            onPress={() => {
              isFav ? removeFromWishlist(item._id) : addToWishlist(item._id);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 25,
              height: 25,
              justifyContent: 'center',
            }}>
            <AntDesign
              name={isFav ? 'heart' : 'hearto'}
              size={12}
              color={isFav ? COLORS.gray : COLORS.gray}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const BestSellerList = () => {
  const [topCourses, setTopCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleGetTopCourses = async () => {
    try {
      setLoading(true);
      const res = await api_getTopCourses(1);
      console.log(res, 'Top Courses');
      setTopCourses(res.data.items);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleGetTopCourses();
  }, []);
  return (
    <View style={{padding: 10}}>
      <RegularText style={{fontSize: 18}} bold>
        Weekly Trending Courses
      </RegularText>
      {loading ? (
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 200,
              width: 200,
              backgroundColor: 'lightgray',
              borderRadius: 10,
              marginLeft: 5,
              margin: 5,
            }}></View>
          <View
            style={{
              height: 200,
              width: 200,
              backgroundColor: 'lightgray',
              borderRadius: 10,
              marginHorizontal: 5,
              margin: 5,
            }}></View>
        </View>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={topCourses}
          horizontal
          renderItem={({item}: {item: any}) => {
            return <Item item={item} />;
          }}
        />
      )}

      {/* <FlatList
        showsHorizontalScrollIndicator={false}
        data={topCourses}
        horizontal
        renderItem={({item}: {item: any}) => {
          return <Item item={item} />;
        }}
      /> */}
    </View>
  );
};

export default BestSellerList;
