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

const options = [
  {name: 'Female', value: 'female'},
  {name: 'Male', value: 'male'},
];
const CourseSheet = (props: any) => {
  const {loading, items, onSelect} = props?.payload;

  console.log(props, 'opopoo');
  return (
    <ActionSheet id={props.sheetId} gestureEnabled={true}>
      <FlatList
        style={{height: 300, padding: 20}}
        data={items}
        ListEmptyComponent={() => {
          if (loading) {
            return <ActivityIndicator size={'small'} color={COLORS.purple} />;
          } else {
            return <RegularText>Empty</RegularText>;
          }
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onSelect(item);
                // props?.payload?.onSelect(item.value);
                SheetManager.hide(SHEETS.CourseSheet);
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                  padding: 5,
                  margin: 5,
                  fontWeight: 'bold',
                }}>
                {/* {item.name} */}
                {item?.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </ActionSheet>
  );
};

export default CourseSheet;
