import {View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';
// @ts-ignore
import VideoPlayer from 'react-native-video-controls';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearVideo,
  courseVideoSelector,
} from '../../redux/feature/course/courseSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {
  getCourseImageUrl,
  getCourseVideoUrl,
  getImageUrl,
  getModuleImageUrl,
} from '../../api';
const {width, height} = Dimensions.get('window');
import YoutubePlayer from 'react-native-youtube-iframe';
import {RegularText} from '../../components/MyText';
import RenderImage from './RenderImage';
import RenderText from './RenderText';
import RenderPdf from './RenderPdf';

const data = [
  {
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb: 'images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny',
  },
  {
    description: 'The first Blender Open Movie from 2006',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    ],
    subtitle: 'By Blender Foundation',
    thumb: 'images/ElephantsDream.jpg',
    title: 'Elephant Dream',
  },
  {
    description:
      'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    ],
    subtitle: 'By Google',
    thumb: 'images/ForBiggerBlazes.jpg',
    title: 'For Bigger Blazes',
  },
  {
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    ],
    subtitle: 'By Google',
    thumb: 'images/ForBiggerEscapes.jpg',
    title: 'For Bigger Escape',
  },
  {
    description:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    ],
    subtitle: 'By Google',
    thumb: 'images/ForBiggerFun.jpg',
    title: 'For Bigger Fun',
  },
  {
    description:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    sources: [
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    ],
    subtitle: 'By Google',
    thumb: 'images/ForBiggerJoyrides.jpg',
    title: 'For Bigger Joyrides',
  },
];

const RenderYtVideo = ({id, handleVideoClose}: any) => {
  const [loading, setLoading] = React.useState(false);
  const newID = id?.split('www.youtube.com/embed/')[1].split('"')[0];
  console.log('YT-----> id:', id, newID);
  // React.useEffect(() => {
  //   setLoading(true);
  //   return () => {
  //     setLoading(false);
  //   };
  // }, [id]);
  return (
    <>
      {loading ? (
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 2,
            height: 210,
            width,
          }}>
          <ActivityIndicator size="large" color={COLORS.white} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={handleVideoClose}
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 2,
            height: 30,
            width: 30,
            top: 10,
            borderRadius: 30,
            left: 10,
          }}>
          <Ionicons name="chevron-back" size={15} color={'white'} />
        </TouchableOpacity>
      )}
      <YoutubePlayer
        height={300}
        play={true}
        videoId={newID}
        onChangeState={e => {
          console.log(e);
        }}
        onReady={() => {
          setLoading(false);
        }}
      />
    </>
  );
};

const VideoHeader = () => {
  const videos = useSelector(courseVideoSelector);
  const [fullscreenMode, setFullScreenMode] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  const dispatch = useDispatch();
  const handleVideoClose = () => {
    dispatch(clearVideo());
  };

  function _renderItem({item, index}: {item: any; index: number}) {
    console.log(item, 'ko');
    if (item?.type === 'video') {
      // const ytId = item?.url_link?.split('?v=')[1]?.split('=')[0];
      return (
        <RenderYtVideo id={item.url_link} handleVideoClose={handleVideoClose} />
      );
    } else {
      return (
        <View
          style={
            fullscreenMode
              ? {
                  width,
                  height,
                }
              : {
                  width: width - 4,
                  height: 250,
                  backgroundColor: '#000',
                }
          }>
          <TouchableOpacity
            onPress={() => {
              handleVideoClose();
            }}
            style={{
              height: 20,
              width: 20,
              position: 'absolute',
              top: 20,
              left: 20,
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Fontisto name="close" size={15} color={'white'} /> */}
            <Ionicons name="chevron-back" size={15} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('VideoPlayer', {
                videoUri: item?.content,
              });
            }}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              top: 20,
              right: 20,
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons
              name={fullscreenMode ? 'fullscreen' : 'fullscreen-exit'}
              size={20}
              color={COLORS.white}
            />
          </TouchableOpacity>

          <VideoPlayer
            source={{uri: getCourseVideoUrl(item?.content)}}
            onLoadStart={() => {
              console.log('onLoadStart');
            }}
            seekColor={COLORS.purple}
            disableVolume
            disableFullscreen
            disableBack
            // paused={true}
            onError={() => {
              console.log('onError');
            }}
            style={{
              width: width,
              // height: 250,
              marginBottom: 30,
            }}
          />
        </View>
      );
    }
  }

  return (
    <View
      style={
        fullscreenMode
          ? {
              width: width,
              height: height,
              backgroundColor: 'red',
              zIndex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }
          : {
              width: width,
              height: 250,
              backgroundColor: '#000',
              marginTop: 40,
            }
      }>
      {/* @ts-ignore */}
      {videos[0]?.type === 'video' && _renderItem({item: videos[0]})}
      {videos[0]?.type === 'image' && <RenderImage item={videos[0]} />}
      {videos[0]?.type === 'text' && <RenderText item={videos[0]} />}
      {/* {true && <RenderPdf item={videos[0]} />} */}
      {/* {video[0]?.type ==="text" && _renderItem({item: videos[0]})} */}
      {/* <Carousel
        data={videos}
        renderItem={_renderItem}
        sliderWidth={width - 4}
        itemWidth={width - 4}
      /> */}
    </View>
  );
};

export default VideoHeader;
