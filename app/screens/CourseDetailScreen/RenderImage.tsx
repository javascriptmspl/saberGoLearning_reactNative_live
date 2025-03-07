import {View, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {getModuleImageUrl} from '../../api';
import ImageModal from '../../components/ImageModal';
import {useDispatch} from 'react-redux';
import {clearVideo} from '../../redux/feature/course/courseSlice';

const {width, height} = Dimensions.get('window');
function RenderImage({item}: any) {
  const uri = getModuleImageUrl(item?.content);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        width: width - 4,
        height: 250,
        backgroundColor: '#000',
      }}>
      {isFullScreen ? (
        <ImageModal uri={uri} handleClose={() => setIsFullScreen(false)} />
      ) : (
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
          source={{
            uri,
          }}
        />
      )}
      <TouchableOpacity
        onPress={() => dispatch(clearVideo())}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: 30,
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Entypo name="cross" color={'white'} size={16} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsFullScreen(true)}
        style={{
          position: 'absolute',
          right: 20,
          top: 20,
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: 30,
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Entypo name="resize-full-screen" color={'white'} size={16} />
      </TouchableOpacity>
    </View>
  );
}

export default RenderImage;
