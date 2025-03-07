import {
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {AccordionItem} from 'react-native-accordion-list-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RegularText, SmallText} from '../../components/MyText';
import {
  addVideo,
  clearVideo,
  courseSelector,
} from '../../redux/feature/course/courseSlice';
import {useDispatch, useSelector} from 'react-redux';
import {api_getVideoStream} from '../../api/courses';
import {COLORS} from '../../constants/theme';
import {ghostSelector} from '../../redux/feature/auth/authSlice';

const BG_SECTION = '#f0f3f7';
const {width} = Dimensions.get('window');

const classOne = [
  {
    title: 'Introduction',
    type: 'free',
  },
  {
    title: 'Course Outline',
    type: 'free',
  },
  {
    title: 'Image Selection',
    type: 'premium',
  },
];

const ListData = [
  {
    title: 'Introduction',
    body: [{body: classOne, title: 'chapter 01'}],
  },
  {
    title: 'Variables',
    body: [
      {body: classOne, title: 'chapter 01'},
      {body: classOne, title: 'chapter 02'},
    ],
  },
  {
    title: 'Api Integration',
    body: [
      {body: classOne, title: 'chapter 01'},
      {body: classOne, title: 'chapter 02'},
      {body: classOne, title: 'chapter 03'},
      {body: classOne, title: 'chapter 04'},
    ],
  },
];

const Chapter = ({name, topics}: {name: string; topics: [any]}) => {
  const [loadingAtIndex, setLoadingAtIndex] = React.useState<null | number>(
    null,
  );

  const dispatch = useDispatch();
  const isGhost = useSelector(ghostSelector);
  const getVideoURl = async (index: number, item: object) => {
    console.log({index, item});
    try {
      setLoadingAtIndex(index);
      dispatch(clearVideo());
      console.log({item});
      if (!item) {
        Alert.alert('Alert', 'Video link is not Provided!');
        return;
      }
      dispatch(addVideo(item));
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error?.message);
    } finally {
      setLoadingAtIndex(null);
    }
  };

  const handleGhostVideoPlay = () => {
    Alert.alert('Alert', 'Your On  Ghost Mode! Please Login to Play Video!');
  };

  return (
    <AccordionItem
      containerStyle={{
        backgroundColor: BG_SECTION,
      }}
      customTitle={() => (
        <RegularText
          style={{
            textAlign: 'left',
            color: `rgba(0,0,0,0.7)`,
            width: '100%',
            marginLeft: -8,
            padding: 2,
          }}>
          {name}
        </RegularText>
      )}
      customBody={() => {
        // return <></>;
        return (
          <View
            style={{
              marginTop: 5,
              borderLeftWidth: 1,
              borderColor: 'rgba(0,0,0,0.1)',
            }}>
            {topics?.map((item: any, index: any) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    isGhost
                      ? handleGhostVideoPlay()
                      : getVideoURl(index, item?.apps[0]);
                  }}
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 4,
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <AntDesign size={15} color={'gray'} name={'play'} />
                    {loadingAtIndex !== null && loadingAtIndex === index ? (
                      <ActivityIndicator size={'small'} />
                    ) : (
                      <SmallText
                        style={{
                          fontSize: 15,
                          opacity: 0.7,
                          marginLeft: 10,
                        }}>
                        {item.name}
                      </SmallText>
                    )}
                  </View>
                  {item.type === 'premium' ? (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <SmallText
                        style={{
                          color: '#FE7B38',
                          marginRight: 5,
                        }}>
                        Premium
                      </SmallText>
                      <FontAwesome5
                        size={10}
                        color={'#FE7B38'}
                        name={'crown'}
                      />
                    </View>
                  ) : (
                    <SmallText style={{color: '#04C4D9'}}>Free</SmallText>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}
      customIcon={() => (
        <>
          <Entypo name="chevron-right" size={15} color={'gray'} />
        </>
      )}
    />
  );
};

const ModulesComp = () => {
  const course = useSelector(courseSelector);

  return (
    <>
      <View style={{flex: 1, width, zIndex: 1, backgroundColor: 'white'}}>
        {/* LEVEL ONE */}
        <FlatList
          scrollEnabled
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          data={course?.sections}
          ListEmptyComponent={() => <RegularText>Empty</RegularText>}
          renderItem={({item, index}) => {
            return (
              <AccordionItem
                containerStyle={{
                  backgroundColor: BG_SECTION,
                }}
                customTitle={() => (
                  <RegularText
                    bold
                    style={{
                      textAlign: 'left',
                      flex: 1,
                      fontSize: 22,
                    }}>
                    {item.name}
                  </RegularText>
                )}
                customBody={() => {
                  // return <></>;
                  {
                    /* LEVEL TWO */
                  }
                  return (
                    <FlatList
                      scrollEnabled={false}
                      data={item?.chapters}
                      ListEmptyComponent={() => (
                        <RegularText>Empty</RegularText>
                      )}
                      renderItem={({item, index}) => {
                        return (
                          <Chapter
                            key={index}
                            name={item.name}
                            topics={item.topics}
                          />
                        );
                      }}
                    />
                  );
                }}
                customIcon={() => (
                  <>
                    <Entypo name="chevron-right" size={15} color={'gray'} />
                  </>
                )}
              />
            );
          }}
        />
      </View>
    </>
  );
};

export default ModulesComp;
