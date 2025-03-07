import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/theme';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  TabNavigatorParams,
} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/feature/auth/authSlice';
import {api_getMyEnrolledCourses} from '../../api/enrolled';
import StarRating from 'react-native-star-rating';
import {PRICE_SYMBOL} from '../../constants';
import {getCourseImageUrl} from '../../api';

const CoursesScreen = () => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const auth = useSelector(authSelector);
  const [loading, setLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<TabNavigatorParams>>();

  React.useEffect(() => {
    const init = async () => {
      console.log();
      try {
        setLoading(true);
        const res = await api_getMyEnrolledCourses(auth.id);
        console.log(res);

        setData(res?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [navigation, isFocused]);
  console.log(data, 'llll');
  return (
    <MainLayout
      title="My Courses"
      onBack={() => navigation.navigate('Dashboard')}>
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          data={data}
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
          // keyExtractor={i => i?.id}
          renderItem={({item}: any) => {
            console.log('safasdsadsa', item);

            const course = item?.course_id;

            let rate = 0;

            if (course?.rating?.length) {
              rate = course?.rating[0]?.rate;
            }

            if (!course) return null;

            return (
              <TouchableOpacity
                onPress={() =>
                  //@ts-ignore
                  navigation.navigate('CourseDetail', {courseId: item._id})
                }
                style={{
                  backgroundColor: 'white',
                  height: 100,
                  margin: 5,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 120,
                    height: 100,
                    backgroundColor: COLORS.gray,
                    borderTopLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={{uri: getCourseImageUrl(course?.image)}}
                    style={{
                      width: 120,
                      height: 100,
                      borderTopLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{padding: 15, marginTop: 5}}>
                  <Text
                    style={{fontWeight: 'bold', color: 'black', fontSize: 14}}>
                    {course?.title}
                  </Text>
                  {/* <Text
                    style={{
                      fontWeight: 'bold',
                      color: COLORS.gray,
                      fontSize: 11,
                    }}>
                    {item.about}
                  </Text> */}
                  <View style={{flexDirection: 'row', marginTop: 10}}>
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
                      {rate}
                    </Text>

                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: COLORS.gray,
                        fontSize: 11,
                        marginHorizontal: 10,
                      }}>
                      {PRICE_SYMBOL.india} {course?.total_fees}
                    </Text>
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

export default CoursesScreen;
