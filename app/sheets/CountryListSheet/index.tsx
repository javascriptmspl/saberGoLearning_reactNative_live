import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {BigText, RegularText} from '../../components/MyText';
import {countryList} from '../../utils/country';
import {SHEETS} from '../sheets';
const CountryListSheet = (props: any) => {
  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <FlatList
        style={{height: 500, padding: 20}}
        data={countryList}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props?.payload?.setCountry(item.name);
                SheetManager.hide(SHEETS.CountryListSheet);
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

export default CountryListSheet;
