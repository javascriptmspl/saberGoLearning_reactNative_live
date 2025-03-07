import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {BigText, RegularText} from '../../components/MyText';
import {SHEETS} from '../sheets';
import {COLORS} from '../../constants/theme';

const CourseModeSheet = (props: any) => {
  const {loading, items, onSelect} = props?.payload;
  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <FlatList
        ListEmptyComponent={() => {
          if (loading) {
            return <ActivityIndicator size={'small'} color={COLORS.purple} />;
          } else {
            return <RegularText>Empty</RegularText>;
          }
        }}
        style={{height: 150, padding: 20, marginBottom: 25}}
        data={items}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onSelect(item);
                SheetManager.hide(SHEETS.CourseModeSheet);
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                  padding: 5,
                  margin: 5,
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </ActionSheet>
  );
};

export default CourseModeSheet;
