import {
  View,
  Text,
  ScrollView,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import {BigText, RegularText} from '../../components/MyText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {api_getBlogById, getBlogImageUrl} from '../../api/blogs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import Markdown from 'react-native-markdown-display';
import FullScreenLoader from '../../components/FullScreenLoader';
import {useNavigation} from '@react-navigation/native';
interface Props
  extends NativeStackScreenProps<DashboardStackParams, 'BlogScreen'> {}

const {width} = Dimensions.get('screen');
const BlogScreen = ({route}: Props) => {
  const navigation = useNavigation();
  const blogId = route.params.blogId;
  const [loading, setLoading] = React.useState(false);
  const [blog, setBlog] = React.useState<any>(null);

  const handleGetBlog = async (id: number) => {
    try {
      setLoading(true);
      const {data} = await api_getBlogById(id);
      setBlog(data?.data?.attributes);
    } catch (err: any) {
      console.log(err);
      Alert.alert('Alert', err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(blog);

  React.useEffect(() => {
    handleGetBlog(blogId);
  }, []);
  if (!blogId) {
    return (
      <View>
        <Text>NO BLOD ID</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {loading && <FullScreenLoader />}
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{
          marginTop: 35,
          marginLeft: 10,
          width: 25,
          height: 25,
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1,
        }}>
        <MaterialIcons name="arrow-back" size={20} color={COLORS.white} />
      </TouchableOpacity>

      <ScrollView
        style={{
          flex: 1,
          marginVertical: 20,
        }}>
        <Image
          source={{
            uri: getBlogImageUrl(
              blog?.image?.data?.attributes?.formats?.medium?.url,
            ),
          }}
          style={{
            width,
            height: 220,
          }}
        />
        <View
          style={{
            marginTop: 20,
            marginBottom: -10,
            alignItems: 'center',
          }}>
          <BigText bold>{blog?.title}</BigText>
        </View>
        {/* <RegularText>{blog?.content}</RegularText> */}
        <View style={{padding: 20}}>
          {/* @ts-ignore */}
          <Markdown>{blog?.content || ''}</Markdown>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;
