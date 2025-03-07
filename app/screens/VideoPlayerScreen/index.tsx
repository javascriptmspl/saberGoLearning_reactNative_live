import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';
// @ts-ignore
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {clearVideo} from '../../redux/feature/course/courseSlice';
import {useDispatch} from 'react-redux';
import {getCourseVideoUrl} from '../../api';

interface Props
  extends NativeStackScreenProps<DashboardStackParams, 'VideoPlayer'> {}

const VideoPlayerScreen = ({route}: Props) => {
  const navigation = useNavigation();

  const {videoUri} = route.params;

  React.useEffect(() => {
    Orientation.lockToLandscape();
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () => {
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
      Orientation.lockToPortrait();
    };
  }, []);

  const dispatch = useDispatch();
  const handleVideoClose = () => {
    navigation.goBack();
  };

  if (!videoUri) {
    return <Text>OK</Text>;
  }

  return (
    <View
      style={{
        backgroundColor: 'blue',
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}>
      <TouchableOpacity
        onPress={() => {
          handleVideoClose();
        }}
        style={{
          height: 20,
          width: 20,
          position: 'absolute',
          top: 50,
          left: 20,
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="arrow-back" size={15} color={'white'} />
      </TouchableOpacity>
      <VideoPlayer
        source={{
          uri: getCourseVideoUrl(videoUri),
        }}
        seekColor={COLORS.purple}
        disableVolume
        disableFullscreen
        disableBack
        // paused={true}
        onError={() => {
          console.log('onError');
        }}
      />
    </View>
  );
};

export default VideoPlayerScreen;
