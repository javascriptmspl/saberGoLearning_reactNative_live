import {View, FlatList, Dimensions, NativeSyntheticEvent} from 'react-native';
import React, {useRef, useState} from 'react';
import BoardOne from './BoardOne';
import BoardTwo from './BoardTwo';
import BoardThree from './BoardThree';
import {NativeScrollEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const OnBoardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  let listRef = useRef<any>(null);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveIndex(roundIndex);
  };

  const handleNext = () => {
    if (activeIndex >= 2) return;
    listRef?.current?.scrollToIndex({index: activeIndex + 1}, 3000);
  };

  const handlePrev = () => {
    if (activeIndex <= 0) return;
    listRef?.current?.scrollToIndex({index: activeIndex - 1}, 3000);
  };

  const handleScrollToIndex = (index: number) => {
    listRef?.current?.scrollToIndex({index}, 3000);
  };
  const handleSkip = () => {
    listRef?.current?.scrollToIndex({index: 2}, 3000);
  };
  const navigation = useNavigation<any>();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        ref={listRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={0}
        pagingEnabled
        onScroll={handleScroll}
        data={['one', 'two', 'three']}
        renderItem={({item}) => {
          return (
            <View style={{}}>
              {item === 'one' && (
                <BoardOne handleSkip={handleSkip} handleNext={handleNext} />
              )}
              {item === 'two' && (
                <BoardTwo handleSkip={handleSkip} handleNext={handleNext} />
              )}
              {item === 'three' && <BoardThree handleNext={handleNext} />}
            </View>
          );
        }}
      />
    </View>
  );
};

export default OnBoardingScreen;
