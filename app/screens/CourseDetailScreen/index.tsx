import {
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  NativeSyntheticEvent,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS} from '../../constants/theme';
import {RegularText} from '../../components/MyText';
import {useNavigation, useRoute} from '@react-navigation/native';
import DescriptionComp from './DescriptionComp';
import ModulesComp from './ModulesComp';
import InstructorComp from './InstructorComp';
import ReviewComp from './ReviewComp';
import {NativeScrollEvent} from 'react-native';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import CourseHeader from './CourseHeader';
import VideoHeader from './VideoHeader';
import FullScreenLoader from '../../components/FullScreenLoader';
import {api_getCourseById} from '../../api/courses';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearVideo,
  courseSelector,
  courseVideoSelector,
  setCourse,
} from '../../redux/feature/course/courseSlice';
import {ghostSelector} from '../../redux/feature/auth/authSlice';

const VIEWS = ['Description', 'Modules', 'Reviews'];
interface Props
  extends NativeStackScreenProps<DashboardStackParams, 'CourseDetail'> {}

const CourseDetailScreen = ({route}: Props) => {
  const timerRef = useRef<any>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const videos = useSelector(courseVideoSelector);
  const {courseId} = route.params;
  const dispatch = useDispatch();
  const isGhost = useSelector(ghostSelector);
  const course = useSelector(courseSelector);

  let listRef = useRef<any>(null);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveIndex(roundIndex);
  };

  const handleScrollToIndex = (index: number) => {
    listRef?.current?.scrollToIndex({index}, 3000);
  };

  React.useEffect(() => {
    const fetchCourseDetails = async () => {
      if (!courseId) return;

      try {
        setLoading(true);
        dispatch(setCourse(null));
        const res = await api_getCourseById(courseId);
        console.log(res, 'api_getCourseById');
        dispatch(setCourse(res.data[0]));
      } catch (error: any) {
        console.log(error);
        Alert.alert('Alert', error?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();

    return () => {
      dispatch(clearVideo());
    };
  }, [courseId]);

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      isGhost &&
        Alert.alert(
          'Alert',
          'You are in Guest Mode! Please Login to access More Feature !',
        );
    }, 1 * 15000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <View
      style={{
        backgroundColor: videos.length ? '#000' : '#9e9e9e',
        flex: 1,
      }}>
      {/* HEADER */}
      {videos.length ? <VideoHeader /> : <CourseHeader />}
      {loading && <FullScreenLoader />}
      {/* HEADER */}
      <ScrollView
        scrollEnabled={true}
        style={{flex: 1}}
        contentContainerStyle={{
          backgroundColor: COLORS.white,
          flex: 1,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          paddingVertical: 15,
          marginTop: 35,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 5,
            padding: 10,
            justifyContent: 'space-evenly',
            marginTop: 13,
          }}>
          {VIEWS.map((i, index) => {
            const isActive = i === VIEWS[activeIndex] ? true : false;

            let textAlign = 'center';
            if (index === 0) {
              textAlign = 'left';
            }
            if (index === 3) {
              textAlign = 'right';
            }

            return (
              <TouchableOpacity
                onPress={() => handleScrollToIndex(index)}
                key={i}
                style={{
                  flex: 1,
                  borderBottomColor: isActive
                    ? COLORS.purple
                    : 'rgba(0,0,0,0.3)',
                  borderBottomWidth: 2,
                  paddingBottom: 5,
                }}>
                <RegularText
                  // @ts-ignore
                  style={{
                    fontSize: 13,
                    textAlign,
                    color: isActive ? COLORS.purple : 'rgba(0,0,0,0.5)',
                  }}>
                  {i}
                </RegularText>
              </TouchableOpacity>
            );
          })}
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          ref={listRef}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          removeClippedSubviews
          horizontal
          data={VIEWS}
          initialScrollIndex={0}
          pagingEnabled
          onScroll={handleScroll}
          keyExtractor={i => i}
          renderItem={({item}) => {
            if (item === VIEWS[0]) {
              return <DescriptionComp />;
            }
            if (item === VIEWS[1]) {
              return <ModulesComp />;
            }
            if (item === VIEWS[2]) {
              return <ReviewComp />;
            }
            // if (item === VIEWS[2]) {
            //   return <InstructorComp />;
            // }
            // if (item === VIEWS[3]) {
            //   return <ReviewComp />;
            // }
            return null;
          }}
        />
      </ScrollView>
    </View>
  );
};

export default CourseDetailScreen;
