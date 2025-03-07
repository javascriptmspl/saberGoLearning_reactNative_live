import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';
import {getCourseImageUrl} from '../../api';
import {RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {useSelector} from 'react-redux';
import {authSelector, ghostSelector} from '../../redux/feature/auth/authSlice';
import {api_wishListAdd, api_wishListRemove} from '../../api/wishlist';
import {Alert} from 'react-native';

const Item = ({item}: any) => {
  const [isFav, setIsFav] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  const [loading, setLoading] = React.useState(false);

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
        elevation: 2,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}>
      <View
        style={{
          width: 120,
          height: 100,
          backgroundColor: COLORS.gray,
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
            borderBottomRightRadius: 5,
            borderTopLeftRadius: 5,
            resizeMode: 'contain',
          }}
          source={{uri: getCourseImageUrl(item.image)}}
        />
      </View>
      <View style={{padding: 15}}>
        <Text style={{color: 'black', fontSize: 14}}>{item.title}</Text>
        <Text style={{color: COLORS.gray, fontSize: 11}}>
          {item?.course_category[0]?.displayname}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
          }}>
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
            {item?.rating[0]?.rate?.toFixed(1)}
          </Text>

          <Text
            style={{
              color: COLORS.gray,
              fontSize: 11,
              marginHorizontal: 10,
            }}>
            ₹{item.total_fees}
          </Text>
          <TouchableOpacity
            onPress={() => {
              isFav ? removeFromWishlist(item._id) : addToWishlist(item._id);
            }}>
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

const DMListView = ({
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
    <FlatList
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
      renderItem={({item}) => {
        return <Item item={item} />;
      }}
    />
  );
};

export default DMListView;
