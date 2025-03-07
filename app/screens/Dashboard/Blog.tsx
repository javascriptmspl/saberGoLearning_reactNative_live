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
import {getBlogImageUrl, getBlogs} from '../../api/blogs';
import {FONTS} from '../../../assets/fonts';

const Item = ({item, index}: any) => {
  const {title, image} = item?.attributes;

  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BlogScreen', {blogId: item?.id});
      }}
      style={{
        margin: 5,
        //  height: 200,
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
          backgroundColor: 'gray',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {image && (
          <Image
            style={{
              marginVertical: 10,
              width: '100%',
              height: 100,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              resizeMode: 'contain',
            }}
            source={{
              uri: getBlogImageUrl(
                image?.data?.attributes?.formats?.thumbnail?.url,
              ),
            }}
          />
        )}
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          numberOfLines={2}
          style={{
            marginVertical: 2,
            height: 60,
            marginBottom: 10,
            fontSize: 13,
            fontFamily: FONTS.Rajdhani.Regular,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const BlogList = () => {
  const [blogs, setBlogs] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const handleGetBlogs = async () => {
    try {
      setLoading(true);
      const {data} = await getBlogs(page);
      console.log(data, 'setBlogs');
      setPage(s => s + 1);
      setBlogs([...blogs, ...data.data]);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(blogs, 'blog');

  React.useEffect(() => {
    handleGetBlogs();
  }, []);
  return (
    <View style={{padding: 10}}>
      <RegularText style={{fontSize: 18}} bold>
        Blogs
      </RegularText>

      <FlatList
        ListEmptyComponent={() => {
          return (
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 220,
                  width: 200,
                  backgroundColor: 'lightgray',
                  borderRadius: 10,
                  marginLeft: 5,
                  margin: 5,
                }}></View>
              <View
                style={{
                  height: 220,
                  width: 200,
                  backgroundColor: 'lightgray',
                  borderRadius: 10,
                  marginHorizontal: 5,
                  margin: 5,
                }}></View>
            </View>
          );
        }}
        onEndReached={() => {
          console.log('END _ RENDER');
          handleGetBlogs();
        }}
        onEndReachedThreshold={0.2}
        showsHorizontalScrollIndicator={false}
        data={blogs}
        horizontal
        renderItem={({item, index}: any) => {
          return <Item item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default BlogList;
