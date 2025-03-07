import {
  View,
  TextInput,
  Dimensions,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import StarRating from 'react-native-star-rating';
import {COLORS} from '../../constants/theme';
import {api_rating} from '../../api/rating';
import {useSelector} from 'react-redux';
import {courseSelector} from '../../redux/feature/course/courseSlice';
import {authSelector} from '../../redux/feature/auth/authSlice';

const {width} = Dimensions.get('window');

const REVIEWS = [
  {
    name: 'Jonson Wiliam',
    text: 'Contrary to popular besimp and world claslyrandom text. It has roots',
    time: '2 days ago',
    rating: '4.2',
  },
  {
    name: 'Robat Tomas',
    text: 'Contrary to popular besimp and world claslyrandom text. It has roots',
    time: '2 days ago',
    rating: '4.8',
  },
  {
    name: 'Luchia Decago',
    text: 'Contrary to popular besimp and world claslyrandom text. It has roots',
    time: '2 days ago',
    rating: '5.0',
  },
];
const ReviewComp = () => {
  const auth = useSelector(authSelector);
  const course = useSelector(courseSelector);
  const [ratings, setRatings] = React.useState(5);
  const [review, setReview] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const payload = {
    courseId: course?._id,
    userId: auth?.id,
    ratings: ratings,
    review: review,
  };
  const handleRating = async () => {
    try {
      setLoading(true);
      const res = await api_rating(payload);
      console.log(payload);
      console.log(res);
      Alert.alert('Alert', 'Success');
      setReview('');
    } catch (error: any) {
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log({auth});
  console.log({course});
  return (
    // <ScrollView>
    <View style={{flex: 1, width, zIndex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={REVIEWS}
        style={{
          marginBottom: 20,
          margin: 5,
        }}
        renderItem={({item}) => {
          return null;
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomColor: 'rgba(0,0,0,0.2)',
                paddingBottom: 5,
                borderBottomWidth: 1,
              }}>
              <View
                style={{
                  backgroundColor: 'red',
                  height: 60,
                  width: 60,
                  borderRadius: 60,
                }}></View>
              <View style={{marginHorizontal: 10, flex: 1}}>
                <RegularText style={{marginVertical: 5}} bold>
                  {item.name}
                </RegularText>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SmallText>{item.time}</SmallText>
                  <View style={{width: 15, marginLeft: 5}}>
                    <StarRating
                      disabled={false}
                      maxStars={1}
                      rating={1}
                      starSize={12}
                      fullStarColor={'orange'}
                    />
                  </View>
                  <SmallText>{item.rating}</SmallText>
                </View>
                <View>
                  <RegularText
                    style={{opacity: 0.6, fontSize: 13, marginVertical: 5}}>
                    {item.text}
                  </RegularText>
                </View>
              </View>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View style={{margin: 20}}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginBottom: 5,
                  }}>
                  <BigText bold style={{fontSize: 20, marginRight: 5}}>
                    5.0
                  </BigText>
                  <RegularText bold>Overall Rating</RegularText>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 100}}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={4}
                      starSize={15}
                      fullStarColor={'orange'}
                    />
                  </View>

                  <SmallText style={{marginLeft: 5}}>
                    {'(120) Good (5)'}
                  </SmallText>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SmallText style={{fontSize: 12, marginRight: 12}}>
                    Professional Skill
                  </SmallText>
                  <View
                    style={{
                      width: 150,
                      height: 3,
                      borderRadius: 5,
                      backgroundColor: COLORS.purple,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SmallText style={{fontSize: 12, marginRight: 12}}>
                    Development
                  </SmallText>
                  <View
                    style={{
                      width: 150,
                      height: 3,
                      borderRadius: 5,
                      backgroundColor: COLORS.purple,
                    }}
                  />
                </View>
              </View>

              {/* RATING */}
              <View style={{marginTop: 20}}>
                <RegularText style={{marginVertical: 5}} bold>
                  Give Your Rating
                </RegularText>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 1}}>
                    <RegularText style={{marginVertical: 5, fontSize: 12}} bold>
                      Course Rating
                    </RegularText>
                    <View style={{width: 90}}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={ratings}
                        starSize={15}
                        fullStarColor={'orange'}
                        selectedStar={s => {
                          setRatings(s);
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}></View>
              </View>

              {/* {} */}
              {/* <View style={{marginTop: 20}}>
                <RegularText style={{marginVertical: 5}} bold>
                  Give Your Rating
                </RegularText>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 1}}>
                    <RegularText style={{marginVertical: 5, fontSize: 12}} bold>
                      Behaviour
                    </RegularText>
                    <View style={{width: 90}}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={1}
                        starSize={15}
                        fullStarColor={'orange'}
                      />
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    <RegularText style={{marginVertical: 5, fontSize: 12}} bold>
                      Service
                    </RegularText>
                    <View style={{width: 90}}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={1}
                        starSize={15}
                        fullStarColor={'orange'}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <RegularText style={{marginVertical: 5, fontSize: 12}} bold>
                      Price
                    </RegularText>
                    <View style={{width: 90}}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={2}
                        starSize={15}
                        fullStarColor={'orange'}
                      />
                    </View>
                  </View>
                  <View style={{flex: 1}}>
                    <RegularText style={{marginVertical: 5, fontSize: 12}} bold>
                      Instructor Skill
                    </RegularText>
                    <View style={{width: 90}}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={5}
                        starSize={15}
                        fullStarColor={'orange'}
                      />
                    </View>
                  </View>
                </View>
              </View> */}
              {/* COMMENT */}

              <View style={{marginTop: 20}}>
                <RegularText style={{marginVertical: 5}} bold>
                  Your Comment
                </RegularText>

                <TextInput
                  placeholder="Write your review here !"
                  onChangeText={setReview}
                  value={review}
                  style={{
                    borderColor: 'rgba(0,0,0,0.4)',
                    borderWidth: 1,
                    padding: 5,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    minHeight: 100,
                    textAlignVertical: 'top',
                  }}
                />
                <View style={{alignItems: 'center', marginTop: 20}}>
                  <PrimaryBtn
                    loading={loading}
                    onPress={handleRating}
                    title="Submit Review"
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
    // </ScrollView>
  );
};

export default ReviewComp;
