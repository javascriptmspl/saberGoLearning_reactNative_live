import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {BigText, RegularText} from '../../components/MyText';
import {SHEETS} from '../sheets';
import MyRadio from '../../components/MyRadio';
import StarRating from 'react-native-star-rating';
import {Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';
import {useDispatch, useSelector} from 'react-redux';
import {
  resetFilter,
  setCategory,
  setRating,
} from '../../redux/feature/filter/filterSlice';
import PrimaryBtn from '../../components/PrimaryBtn';
const {width, height} = Dimensions.get('window');
const LEVELS_OPTIONS = ['bigginer', 'intermediate', 'expert'];
// const DURATION_OPTIONS = ['6W', '3M', '6M'];
const CAT_OPTIONS = ['webfullstack', 'mobilefulltack', 'others'];
const LANGUAGE_OPTIONS = ['bigginer', 'intermediate', 'expert'];
const FilterSheet = (props: any) => {
  const [level, setLevel] = React.useState(LEVELS_OPTIONS[0]);
  const [cat, setCat] = React.useState(CAT_OPTIONS[0]);
  const [lang, setLang] = React.useState(LANGUAGE_OPTIONS[0]);
  const [loading, setLoading] = React.useState(false);
  const [ratingVal, setRatingVal] = React.useState(5);
  const dispatch = useDispatch();

  const {filter} = useSelector(s => s);

  const handleSubmit = () => {
    dispatch(setRating(ratingVal));
    dispatch(setCategory(cat));
    SheetManager.hide(SHEETS.FilterSheet);
  };

  React.useEffect(() => {
    setCat(filter?.category || '');
  }, []);

  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <View
        style={{
          //   flex: 1,
          padding: 15,
        }}>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 30,
            backgroundColor: COLORS.white,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            position: 'absolute',
            top: -20,
          }}></View>
        <View>
          <RegularText style={{fontSize: 18}} bold>
            Course Category
          </RegularText>

          <View style={{marginTop: 10}}>
            <MyRadio
              color={'gray'}
              title="Web Full Stack Courses"
              active={cat === CAT_OPTIONS[0]}
              onPress={() => setCat(CAT_OPTIONS[0])}
            />
            <MyRadio
              color={'gray'}
              title="Mobile Full Stack Courses"
              active={cat === CAT_OPTIONS[1]}
              onPress={() => setCat(CAT_OPTIONS[1])}
            />
            <MyRadio
              color={'gray'}
              title="Other Courses"
              active={cat === CAT_OPTIONS[2]}
              onPress={() => setCat(CAT_OPTIONS[2])}
            />
          </View>

          <View
            style={{
              width: '60%',
              height: 1,
              backgroundColor: 'gray',
              marginVertical: 20,
              opacity: 0.1,
            }}
          />
        </View>
        <View>
          <RegularText style={{fontSize: 18}} bold>
            Rating
          </RegularText>
          <View style={{width: 100, marginVertical: 20}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={ratingVal}
              starSize={20}
              fullStarColor={'orange'}
              selectedStar={s => {
                setRatingVal(s);
              }}
            />
          </View>
          <View
            style={{
              width: '60%',
              height: 1,
              backgroundColor: 'gray',
              marginVertical: 10,
              opacity: 0.1,
            }}
          />
        </View>
        <View>
          <RegularText style={{fontSize: 18}} bold>
            Level
          </RegularText>
          <View style={{marginTop: 10}}>
            <MyRadio
              color={'gray'}
              title="Quick"
              active={level === LEVELS_OPTIONS[0]}
              onPress={() => setLevel(LEVELS_OPTIONS[0])}
            />
            <MyRadio
              color={'gray'}
              title="Advanced"
              active={level === LEVELS_OPTIONS[1]}
              onPress={() => setLevel(LEVELS_OPTIONS[1])}
            />
            <MyRadio
              color={'gray'}
              title="Mastery"
              active={level === LEVELS_OPTIONS[2]}
              onPress={() => setLevel(LEVELS_OPTIONS[2])}
            />
          </View>
          <View
            style={{
              width: '60%',
              height: 1,
              backgroundColor: 'gray',
              marginVertical: 10,
              opacity: 0.1,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingBottom: 5,
            alignItems: 'center',
          }}>
          <PrimaryBtn
            loading={loading}
            title={'Apply Filter'}
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingBottom: 10,
            alignItems: 'center',
          }}>
          <PrimaryBtn
            loading={loading}
            title={'Reset'}
            onPress={() => {
              dispatch(resetFilter({}));
              setCat('');
            }}
          />
        </View>
      </View>
    </ActionSheet>
  );
};

export default FilterSheet;
