import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../constants/theme';
import {getCourseImageUrl} from '../../api';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {
  api_deleteWishList,
  api_wishListAdd,
  api_wishListRemove,
} from '../../api/wishlist';
import {useSelector} from 'react-redux';
import {authSelector, ghostSelector} from '../../redux/feature/auth/authSlice';

const Item = ({item}: any) => {
  const [isFav, setIsFav] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  const auth = useSelector(authSelector);
  const isGhost = useSelector(ghostSelector);
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
      <View
        style={{
          marginLeft: 5,
          marginTop: 5,
          // backgroundColor: 'blue',
          flex: 1,
        }}>
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
                color: COLORS.gray,
              }}>
              {item?.rating[0]?.rate?.toFixed(1)}
            </SmallText>
          </View>

          <SmallText
            style={{
              marginVertical: 2,
              marginLeft: 2,
              flex: 1,
              color: COLORS.gray,
            }}>
            ₹{item.total_fees}
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

const DMGridView = ({
  otherCourses,
  loading,
}: {
  otherCourses: any;
  loading: boolean;
}) => {
  const [isFav, setIsFav] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  return (
    <View style={{paddingBottom: 70}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={otherCourses}
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
                <RegularText>List is empty!</RegularText>
              </View>
            );
          }
        }}
        numColumns={3}
        // keyExtractor={i => i.id}
        renderItem={({item}) => {
          return <Item item={item} />;
        }}
      />
    </View>
  );
};

export default DMGridView;
