import {View, Modal, Image, ScrollView} from 'react-native';

import React from 'react';

import {BigText, RegularText} from './MyText';
import {COLORS} from '../constants/theme';
const NetworkModal = ({uri, handleClose}: any) => {
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          height: '100%',
          width: '100%',
        }}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            backgroundColor: 'rgba(255,255,255,1)',
          }}>
          <View
            style={{
              width: '100%',
              height: '68%',
              backgroundColor: '#ADB3F5',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/ConnectionLostIMG.png')}
              style={{
                resizeMode: 'contain',
                width: '100%',
                height: '105%',
              }}
            />
          </View>
          <View
            style={{
              marginTop: 30,
              height: 50,
              borderBottomColor: 'rgba(0,0,0,0.2)',
              //   borderBottomColor: COLORS.gray,
              borderBottomWidth: 2,
            }}>
            <BigText style={{alignSelf: 'center', fontSize: 30}}>
              Connection Lost
            </BigText>
          </View>
          <RegularText
            style={{
              fontSize: 13,
              alignSelf: 'center',
              color: COLORS.gray,
              marginTop: 20,
            }}>
            Apologies! It seems we've temporarily
          </RegularText>
          <RegularText
            style={{
              fontSize: 13,
              alignSelf: 'center',
              color: COLORS.gray,
            }}>
            lost connection. Please check your
          </RegularText>
          <RegularText
            style={{
              fontSize: 13,
              alignSelf: 'center',
              color: COLORS.gray,
            }}>
            internet connection and refresh the page
          </RegularText>
          <RegularText
            style={{
              fontSize: 13,
              alignSelf: 'center',
              color: COLORS.gray,
            }}>
            to continue exploring our website.
          </RegularText>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default NetworkModal;
