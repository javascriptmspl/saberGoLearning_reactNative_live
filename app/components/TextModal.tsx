import {
  View,
  Text,
  Modal,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useWindowDimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import RenderHtml from 'react-native-render-html';
import {RegularText} from './MyText';
import {COLORS} from '../constants/theme';
const TextModal = ({text, handleClose}: any) => {
  const {width} = useWindowDimensions();
  const source = {
    html: text,
  };
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,1)',
          height: '100%',
          width: '100%',
        }}>
        <ScrollView
          contentContainerStyle={{
            padding: 20,
          }}>
          {/* <RegularText style={{color: COLORS.white, padding: 20}}>
            {text}
          </RegularText> */}
          <RenderHtml contentWidth={width} source={source} />
        </ScrollView>
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

export default TextModal;
