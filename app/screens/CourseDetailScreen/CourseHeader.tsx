import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Dimensions} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {COLORS} from '../../constants/theme';
import {RegularText, SmallText} from '../../components/MyText';
import StarRating from 'react-native-star-rating';
import {useDispatch, useSelector} from 'react-redux';
import {courseSelector} from '../../redux/feature/course/courseSlice';
import {PRICE_SYMBOL} from '../../constants';
import {api_wishListAdd, api_wishListRemove} from '../../api/wishlist';
import {
  authSelector,
  ghostSelector,
  logOut,
} from '../../redux/feature/auth/authSlice';
import {onShareCourse} from '../../utils/helper';
import EnrollmentModal from '../../components/Layout/EnrollmentModal';
const {width} = Dimensions.get('window');
const CourseHeader = () => {
  const course = useSelector(courseSelector);
  const isGhost = useSelector(ghostSelector);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const auth = useSelector(authSelector);
  const [wishListLoading, setWishListLoading] = React.useState(false);
  const [isFav, setIsFav] = useState(false);
  const [enrollmentData, setEnrollmentData] = React.useState(false);
  const dispatch = useDispatch();

  const addToWishlist = async () => {
    if (isGhost) {
      Alert.alert(
        'Alert',
        'Your On  Ghost Mode! Please Login to access More Feature',
      );
      return;
    }
    try {
      setWishListLoading(true);
      const res = await api_wishListAdd(auth.id, course?._id);
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
    <>
      {enrollmentData && (
        <EnrollmentModal setEnrollmentData={setEnrollmentData} />
      )}

      <Image
        source={require('../../../assets/images/Dashboard/ImageImage.png')}
        style={{
          position: 'absolute',
          width: width,
          height: 300,
          top: 0,
          left: 0,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          marginHorizontal: 10,
          marginTop: 38,
        }}>
        <TouchableOpacity style={{marginTop: -5}}>
          <MaterialIcons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={20}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
      <RegularText
        bold
        style={{
          marginLeft: 10,
          color: COLORS.white,
          fontSize: 18,
          // marginTop: 10,
        }}>
        {course?.title ? course?.title : 'title'}
      </RegularText>
      <SmallText
        bold
        style={{marginLeft: 10, color: COLORS.white, fontSize: 11}}>
        {course?.course_category[0]?.displayname}
      </SmallText>
      <View style={{flexDirection: 'row', marginTop: 3}}>
        <SmallText
          style={{marginLeft: 10, color: COLORS.white, marginRight: 5}}>
          {course?.rating[0]?.rate}
        </SmallText>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={Math.round(course?.rating[0]?.rate || 1)}
          starSize={12}
          fullStarColor={'orange'}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <SmallText
          style={{marginLeft: 10, color: COLORS.white, marginRight: 10}}>
          {`${PRICE_SYMBOL.india} ${course?.total_fees}`}
        </SmallText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          marginTop: 10,
          marginBottom: -15,
        }}>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            isFav ? removeFromWishlist(course._id) : addToWishlist(course._id);
          }}
          style={{
            borderWidth: 1,
            borderColor: 'white',
            width: 70,
            height: 20,
            borderRadius: 3,
            marginLeft: 5,
            flexDirection: 'row',
            padding: 1,
            marginRight: 8,
          }}>
          {wishListLoading ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={'small'} color={COLORS.white} />
            </View>
          ) : (
            <>
              <SmallText
                style={{color: 'white', marginRight: 5, marginLeft: 5}}>
                Wishlist
              </SmallText>
              <AntDesign
                style={{marginTop: 2}}
                color={isFav ? 'red' : COLORS.white}
                size={10}
                name={isFav ? 'heart' : 'hearto'}
              />
            </>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onShareCourse(course?._id)}
          style={{
            borderWidth: 1,
            borderColor: 'white',
            width: 70,
            height: 20,
            borderRadius: 3,
            marginLeft: 5,
            flexDirection: 'row',
            padding: 1,
          }}>
          <SmallText style={{color: 'white', marginRight: 5, marginLeft: 10}}>
            Share
          </SmallText>
          <Entypo
            style={{marginTop: 2}}
            color={COLORS.white}
            size={10}
            name="share"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (isGhost) {
              dispatch(logOut({}));
              return;
            }
            setEnrollmentData(true);
          }}
          style={{
            borderWidth: 1,
            borderColor: 'white',
            height: 20,
            borderRadius: 3,
            marginLeft: 10,
            flexDirection: 'row',
            padding: 1,
            paddingHorizontal: 5,
          }}>
          <SmallText style={{color: 'white', marginRight: 5, marginLeft: 10}}>
            Enroll Now
          </SmallText>
          <SimpleLineIcons
            style={{marginTop: 2}}
            color={COLORS.white}
            size={10}
            name="note"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CourseHeader;
