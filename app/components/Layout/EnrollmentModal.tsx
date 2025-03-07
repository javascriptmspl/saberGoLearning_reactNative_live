import {
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from '../MyText';
import PrimaryBtn from '../PrimaryBtn';
import {COLORS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/feature/auth/authSlice';
import {courseSelector} from '../../redux/feature/course/courseSlice';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import {api_learningMode, api_tags} from '../../api/tags';
import {api_getAllCourses} from '../../api/courses';
import {api_enroll} from '../../api/enrolled';
import {api_signup} from '../../api/auth';

const EnrollmentModal = ({setEnrollmentData}: any) => {
  const auth = useSelector(authSelector);
  const course = useSelector(courseSelector);
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [signUpAlertData, setSignUpAlertData] = React.useState<null | {
    id: string;
    pass: string;
  }>(null);
  const [tagList, setTagList] = React.useState([]);
  const [tagId, setTagId] = React.useState<any>(null);
  const [tagListLoading, setTagListLoading] = React.useState(false);
  // ----
  const [courseList, setCourseList] = React.useState([]);
  const [courseId, setCourseId] = React.useState(null);
  const [courseListLoading, setCourseListLoading] = React.useState(false);
  // ----
  const [learningList, setLearningList] = React.useState([]);
  const [learningId, setLearningId] = React.useState<any>(null);
  const [learningListLoading, setLearningListLoading] = React.useState(false);
  // ----

  const fetchlearningMode = async () => {
    try {
      setLearningListLoading(true);
      const res = await api_learningMode();
      console.log(res, 'fetchlearningMode');
      setLearningList(res?.data);
    } catch (error: any) {
      Alert.alert('Alert', error.message);
    } finally {
      setLearningListLoading(false);
    }
  };

  const fetchTags = async () => {
    try {
      setTagListLoading(true);
      const res = await api_tags();
      console.log(res);
      setTagList(res?.data);
    } catch (error: any) {
      Alert.alert('Alert', error.message);
    } finally {
      setTagListLoading(false);
    }
  };

  const fetchCourses = async () => {
    try {
      setCourseListLoading(true);
      const res = await api_getAllCourses(1, 10000000000);
      console.log(res);
      setCourseList(res?.data?.items);
    } catch (error: any) {
      Alert.alert('Alert', error.message);
    } finally {
      setCourseListLoading(false);
    }
  };

  const handleNewEnroll = async () => {
    if (!learningId?._id) {
      Alert.alert('Alert', 'please select course learning mode!');
      return;
    }

    console.log({auth});
    console.log({course});
    const payload = {
      name: auth?.name,
      phone: auth?.phone,
      email: auth?.email,
      course_id: course?._id,
      learning_mode: learningId?._id,
      coursecatinterest_id: course?.course_category[0]?._id,
      // coursecatinterest_id: tagId?._id,
      date_of_joining: new Date().toISOString().slice(0, 10),
    };
    console.log(payload);

    try {
      setLoading(true);
      const res = await api_enroll(payload);
      console.log(res);
      setEnrollmentData(false);
      Alert.alert('Enrollment request submitted!', 'We will contact you soon.');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchlearningMode();
    fetchTags();
  }, []);

  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          //   marginVertical: '0%',
        }}>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: COLORS.white,
            width: '90%',
            height: 520,
            borderRadius: 10,
            padding: 15,
            marginTop: 100,
          }}>
          <BigText
            style={{
              textAlign: 'center',
              marginBottom: 20,
              fontSize: 22,
            }}
            bold>
            Enroll For New Course
          </BigText>

          <View style={{gap: 5, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <RegularText style={{marginTop: 15, fontSize: 14}}>
                Name
              </RegularText>
              <View
                style={{
                  marginTop: -5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgray',
                }}>
                <SimpleLineIcons
                  style={{marginLeft: 0.5}}
                  name="user"
                  size={15}
                  color={'gray'}
                />
                <TextInput
                  style={{flex: 1, marginLeft: 2}}
                  editable={false}
                  placeholder={auth.name}
                  value={name}
                />
              </View>
            </View>
            <View style={{flex: 1}}>
              <RegularText style={{marginTop: 15, fontSize: 14}}>
                Phone
              </RegularText>
              <View
                style={{
                  marginTop: -5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgray',
                }}>
                <SimpleLineIcons
                  style={{marginLeft: 0.5}}
                  name="call-end"
                  size={15}
                  color={'gray'}
                />
                <TextInput
                  keyboardType="phone-pad"
                  style={{flex: 1, marginLeft: 2}}
                  placeholder={auth.phone}
                  editable={false}
                  value={phone}
                />
              </View>
            </View>
          </View>

          <RegularText style={{marginTop: 15, fontSize: 14}}>Email</RegularText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderTopColor: 'white',
              borderLeftColor: 'transparent',
              borderRightColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}>
            <Fontisto
              style={{marginLeft: 0.5}}
              name="email"
              size={18}
              color={'gray'}
            />
            <TextInput
              style={{
                color: 'black',
                height: 40,
                marginLeft: 5,
                width: '85%',
                marginRight: 10,
              }}
              underlineColorAndroid="transparent"
              placeholder={auth.email}
              editable={false}
              value={email}
            />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray,
              justifyContent: 'center',
            }}>
            <RegularText style={{marginTop: 20, fontSize: 14}}>
              Course Type
            </RegularText>
            <TouchableOpacity
              style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <RegularText style={{fontSize: 14}}>
                {course?.course_category[0]?.displayname}
                {/* {tagId?.displayname || 'select course'} */}
              </RegularText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray,
              justifyContent: 'center',
            }}>
            <RegularText style={{marginTop: 20, fontSize: 14}}>
              Course Name
            </RegularText>
            <TouchableOpacity
              style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <RegularText style={{fontSize: 14}}>
                {course?.title}
                {/* {courseId?.title || 'select course'} */}
              </RegularText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray,
              justifyContent: 'center',
            }}>
            <RegularText style={{marginTop: 20, fontSize: 14}}>
              Mode
            </RegularText>
            <TouchableOpacity
              style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() =>
                SheetManager.show(SHEETS.CourseModeSheet, {
                  payload: {
                    onSelect: (id: any) => setLearningId(id),
                    loading: learningListLoading,
                    items: learningList,
                  },
                })
              }>
              <RegularText style={{fontSize: 14, opacity: 0.5}}>
                {learningId?.displayname || 'choose mode'}
              </RegularText>
              <AntDesign
                style={{marginLeft: 0.5}}
                name="down"
                size={15}
                color={'gray'}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => setEnrollmentData(false)}
              style={{
                backgroundColor: COLORS.lightBlue,
                width: '48%',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <RegularText bold style={{color: 'white'}}>
                Cancel
              </RegularText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleNewEnroll();
              }}
              style={{
                backgroundColor: COLORS.lightBlue,
                width: '48%',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              {loading ? (
                <ActivityIndicator size={'small'} color={'white'} />
              ) : (
                <RegularText bold style={{color: 'white'}}>
                  Confirm
                </RegularText>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default EnrollmentModal;
