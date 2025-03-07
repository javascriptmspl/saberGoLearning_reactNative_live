import {View, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {getModuleImageUrl} from '../../api';
import {useDispatch} from 'react-redux';
import {clearVideo} from '../../redux/feature/course/courseSlice';
import PdfModal from '../../components/PdfModal';

const {width, height} = Dimensions.get('window');
const source = {
  url: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
};
function RenderPdf({item}: any) {
  const uri = getModuleImageUrl(item?.content);
  const [isFullScreen, setIsFullScreen] = React.useState(true);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        width: width - 4,
        height: 250,
        backgroundColor: '#000',
      }}>
      {/* {isFullScreen ? ( */}
      <PdfModal source={source} handleClose={() => setIsFullScreen(false)} />
      {/* ) : null} */}
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

export default RenderPdf;
