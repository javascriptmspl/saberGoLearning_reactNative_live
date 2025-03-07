import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {DashboardStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {api_getAllCourses} from '../../api/courses';
import {Course} from '../../redux/feature/course/courseSlice';
import {COLORS} from '../../constants/theme';
import {api_wishListAdd, api_wishListRemove} from '../../api/wishlist';
import {useSelector} from 'react-redux';
import {authSelector, ghostSelector} from '../../redux/feature/auth/authSlice';
import {getCourseImageUrl} from '../../api';
import {FONTS} from '../../../assets/fonts';

const Item = ({item}: any) => {
  const [isFav, setIsFav] = React.useState(item?.wishlist?.length);
  const [wishListLoading, setWishListLoading] = React.useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  const isGhost = useSelector(ghostSelector);
  const auth = useSelector(authSelector);
  const addToWishlist = async (id: string) => {
    console.log(id, 'addToWishlist');
    if (isGhost) {
      Alert.alert(
        'Alert',
        'You are in Ghost Mode! Please Login to access More Feature',
      );
      return;
    }
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

  console.log(getCourseImageUrl(item.image), 'llllllllllll', item);

  return (
    <TouchableOpacity
      onPress={() => {
        //@ts-ignore
        navigation.navigate('CourseDetail', {courseId: item._id});
      }}
      style={{
        margin: 5,
        width: 120,
        height: 195,
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
          height: 90,
          backgroundColor: 'gray',
          alignSelf: 'center',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            marginVertical: 10,
            width: '100%',
            height: 90,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            resizeMode: 'contain',
          }}
          source={{uri: getCourseImageUrl(item.image)}}
        />
      </View>

      <View style={{flex: 1}}>
        <View style={{height: 60, marginLeft: 5}}>
          <Text
            numberOfLines={2}
            style={{
              marginBottom: 2,
              fontSize: 14,
              marginTop: 3,
              fontFamily: FONTS.Rajdhani.Regular,
            }}>
            {item.title}
          </Text>
        </View>
        <SmallText
          style={{
            marginVertical: 2,
            textAlign: 'left',
            marginLeft: 5,
            color: COLORS.gray,
          }}>
          {item?.course_category[0]?.displayname}
        </SmallText>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 5,
          }}>
          <StarRating
            disabled={false}
            maxStars={1}
            rating={4}
            starSize={13}
            fullStarColor={'orange'}
          />
          <SmallText
            style={{marginVertical: 2, marginLeft: 3, color: COLORS.gray}}>
            {item?.rating[0]?.rate}
          </SmallText>

          <SmallText style={{marginLeft: 10, flex: 1, color: COLORS.gray}}>
            ₹{item.total_fees}
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
              size={12}
              name={isFav ? 'heart' : 'hearto'}
              color={isFav ? COLORS.gray : COLORS.gray}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CoursesList = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [loading, setLoading] = React.useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  const handleGetAllCourses = async () => {
    try {
      setLoading(true);
      const res = await api_getAllCourses(1);
      console.log(res, 'api_getAllCourses');
      setAllCourse(res.data.items);
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
  console.log(allCourse, 'allCourse');

  return (
    <View style={{padding: 10}}>
      <RegularText style={{fontSize: 18}} bold>
        Latest Courses
      </RegularText>
      {loading ? (
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 185,
              width: 120,
              backgroundColor: 'lightgray',
              borderRadius: 10,
              marginLeft: 5,
              margin: 5,
            }}></View>
          <View
            style={{
              height: 185,
              width: 120,
              backgroundColor: 'lightgray',
              borderRadius: 10,
              marginHorizontal: 5,
              margin: 5,
            }}></View>
          <View
            style={{
              height: 185,
              width: 120,
              backgroundColor: 'lightgray',
              borderRadius: 10,
              margin: 5,
            }}></View>
        </View>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={allCourse}
          horizontal
          renderItem={({item}: {item: any}) => {
            return <Item item={item} />;
          }}
        />
      )}
    </View>
  );
};

export default CoursesList;
