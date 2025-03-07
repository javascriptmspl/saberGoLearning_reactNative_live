import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import StarRating from 'react-native-star-rating';
import * as Progress from 'react-native-progress';
import Slider from '@react-native-community/slider';
import MyRadio from '../../components/MyRadio';
import {useDispatch, useSelector} from 'react-redux';
import {setRating} from '../../redux/feature/filter/filterSlice';

const {width, height} = Dimensions.get('window');

const LEVELS_OPTIONS = ['bigginer', 'intermediate', 'expert'];
const DURATION_OPTIONS = ['6W', '3M', '6M'];
const LANGUAGE_OPTIONS = ['bigginer', 'intermediate', 'expert'];

const FilterScreen = () => {
  const [level, setLevel] = React.useState(LEVELS_OPTIONS[0]);
  const [duration, setDuration] = React.useState(DURATION_OPTIONS[0]);
  const [ratingVal, setRatingVal] = React.useState(5);
  const [lang, setLang] = React.useState(LANGUAGE_OPTIONS[0]);
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');

  const {filter} = useSelector(s => s);

  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', paddingBottom: 10}}>
      {/* HEADER */}
      <View style={{height: 300, backgroundColor: 'black', padding: 15}}>
        <Image
          source={require('../../../assets/images/Dashboard/DashboardImg.png')}
          style={{
            position: 'absolute',
            width: width,
            height: 300,
            top: 0,
            left: 0,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-between',
          }}>
          <AntDesign
            onPress={() => {
              // navigation.openDrawer();
              // navigation.navigate('Menu')
            }}
            name="menuunfold"
            size={20}
            color={'white'}
          />
          <BigText
            bold
            style={{
              textAlign: 'center',
              color: 'white',
              marginTop: 20,
              marginHorizontal: 10,
            }}>
            Grow Your own Skill by Online Learning
          </BigText>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 30,
              backgroundColor: '#FE9539',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome color={'#931E8B'} size={18} name="bell-o" />
          </View>
        </View>

        {/* SEARCH */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.white,
              borderRadius: 10,
            }}>
            <TextInput
              placeholder="Search Here.."
              value={text}
              onChangeText={setText}
              style={{width: '75%', padding: 10}}
            />
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#485eea',
                position: 'absolute',
                right: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="search1" color={'white'} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        {/* SEARCH */}
      </View>
      {/* HEADER END */}

      <View
        style={{
          flex: 1,
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
            Courses Duration
          </RegularText>
          {/* <View style={{width: 250}}>
            <SmallText style={{position: 'absolute', right: 30}}>
              596hr
            </SmallText>
            <Slider
              style={{width: 250, height: 40, marginLeft: -15}}
              minimumValue={0}
              maximumValue={1}
              value={0.5}
              minimumTrackTintColor="#485eea"
              maximumTrackTintColor="#000000"
              thumbTintColor="gray"
            />
          </View> */}
          <View style={{marginTop: 10}}>
            <MyRadio
              color={'gray'}
              title="6 Weeks"
              active={duration === DURATION_OPTIONS[0]}
              onPress={() => setDuration(DURATION_OPTIONS[0])}
            />
            <MyRadio
              color={'gray'}
              title="3 Months"
              active={duration === DURATION_OPTIONS[1]}
              onPress={() => setDuration(DURATION_OPTIONS[1])}
            />
            <MyRadio
              color={'gray'}
              title="6 Months"
              active={duration === DURATION_OPTIONS[2]}
              onPress={() => setDuration(DURATION_OPTIONS[2])}
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
            Ratings
          </RegularText>

          <View style={{width: 100, marginVertical: 20}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={filter?.ratingCount}
              starSize={15}
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
              marginVertical: 20,
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
              marginVertical: 20,
              opacity: 0.1,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FilterScreen;
