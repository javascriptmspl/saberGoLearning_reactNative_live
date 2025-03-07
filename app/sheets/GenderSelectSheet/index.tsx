import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {BigText, RegularText} from '../../components/MyText';

import {SHEETS} from '../sheets';

const options = [
  {name: 'Female', value: 'female'},
  {name: 'Male', value: 'male'},
];
const GenderSelectSheet = (props: any) => {
  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <FlatList
        style={{height: 150, padding: 20}}
        data={options}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props?.payload?.onSelect(item.value);
                SheetManager.hide(SHEETS.GenderSelectSheet);
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

export default GenderSelectSheet;
