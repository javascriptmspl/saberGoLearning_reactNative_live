import {
  View,
  Text,
  Modal,
  Image,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import {RegularText} from './MyText';
import {COLORS} from '../constants/theme';
import Pdf from 'react-native-pdf';
import {StyleSheet} from 'react-native';
const source = {
  uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  cache: false,
};

const PdfModal = ({handleClose}: any) => {
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          height: '100%',
          width: '100%',
        }}>
        <View style={styles.container}>
          <Pdf
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
        </View>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
    </Modal>
  );
};

export default PdfModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
