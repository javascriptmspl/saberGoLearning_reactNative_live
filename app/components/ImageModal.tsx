import {
  View,
  Text,
  Modal,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import {RegularText} from './MyText';
import {COLORS} from '../constants/theme';
const ImageModal = ({uri, handleClose}: any) => {
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.9)',
          height: '100%',
          width: '100%',
        }}>
        <ImageZoom
          minScale={0.5}
          maxScale={3}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
          uri={uri}
        />

        <TouchableOpacity
          onPress={handleClose}
          style={{
            position: 'absolute',
            bottom: 0,
            marginBottom: 100,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: 30,
            alignSelf: 'center',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          }}>
          <AntDesign name={'close'} size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ImageModal;
