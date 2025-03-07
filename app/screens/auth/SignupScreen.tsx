import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import DatePicker from 'react-native-date-picker';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {api_signup} from '../../api/auth';
import CheckBox from '@react-native-community/checkbox';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import {api_learningMode, api_tags} from '../../api/tags';
import {api_getAllCourses} from '../../api/courses';
import {api_enroll} from '../../api/enrolled';
import ImageModal from '../../components/ImageModal';
import SignUpAlertModal from '../../components/SignUpAlertModal';
import TeritaryBtn from '../../components/Layout/TeritaryBtn';

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email.')
    .required('* Email address is required *'),
  phone: yup.string().min(10).max(10).required('* Phone Number is required *'),
  name: yup.string().required('* Name is required *'),
  // password: yup.string().min(8).required('* Password is required *'),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'Passwords must match'),
});

const ErrorText = ({text}: any) => {
  return (
    <SmallText
      style={{
        color: 'red',
        marginTop: 5,
        // marginLeft: 10,
      }}>
      {text}
    </SmallText>
  );
};
const SignupScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = React.useState('male');
  const [courseMode, setCourseMode] = React.useState('online');
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [signUpAlertData, setSignUpAlertData] = React.useState<null | {
    id: string;
    pass: string;
  }>(null);

  // ----
  const [tagList, setTagList] = React.useState([]);
  const [tagId, setTagId] = React.useState(null);
  const [tagListLoading, setTagListLoading] = React.useState(false);
  // ----
  const [courseList, setCourseList] = React.useState([]);
  const [courseId, setCourseId] = React.useState(null);
  const [courseListLoading, setCourseListLoading] = React.useState(false);
  // ----
  const [learningList, setLearningList] = React.useState([]);
  const [learningId, setLearningId] = React.useState(null);
  const [learningListLoading, setLearningListLoading] = React.useState(false);
  // ----

  const handleSignUp = async (data: any) => {
    if (!termsAccepted) {
      Alert.alert('Alert', 'please check privacy & policy!');
      return;
    }

    if (!courseId?._id) {
      Alert.alert('Alert', 'please select course Name!');
      return;
    }
    if (!tagId?._id) {
      Alert.alert('Alert', 'please select course Type!');
      return;
    }
    if (!learningId?._id) {
      Alert.alert('Alert', 'please select course learning mode!');
      return;
    }
    const payload = {
      name: data.name,
      phone: data.phone,
      email: data?.email,
      course_id: courseId?._id,
      learning_mode: learningId?._id,
      coursecatinterest_id: tagId?._id,
      date_of_joining: new Date().toISOString().slice(0, 10),
    };
    console.log(payload);

    try {
      setLoading(true);
      const res = await api_enroll(payload);
      console.log(res);

      // Alert.alert('Alert', res?.message || 'success');
      // navigation.navigate('Login');
      const pass = `${payload.name
        ?.substring(0, 4)
        ?.toUpperCase()}${payload?.phone?.substring(6)}`;
      console.log({pass});
      setSignUpAlertData({id: payload.email, pass});
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
    return;
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('name', `${data.name}`);
    formData.append('phone', data.phone);
    formData.append('sex', gender);
    try {
      setLoading(true);
      const res = await api_signup(formData);
      console.log(res);
      Alert.alert('Alert', res?.message || 'success');
      navigation.navigate('Login');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
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

  React.useEffect(() => {
    fetchTags();
    fetchCourses();
    fetchlearningMode();
  }, []);

  return (
    <MainLayout title="Enroll For Your Course" onBack={navigation.goBack}>
      {signUpAlertData && (
        <SignUpAlertModal
          id={signUpAlertData.id}
          pass={signUpAlertData.pass}
          action={() => {
            navigation.navigate('Login');
            setSignUpAlertData(null);
          }}
        />
      )}
      <ScrollView>
        <Formik
          initialValues={{
            email: '',
            name: '',
            phone: '',
          }}
          validateOnMount={true}
          validationSchema={SignupSchema}
          onSubmit={res => {
            handleSignUp(res);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldTouched,
            isValid,
            handleSubmit,
            handleBlur,
          }) => (
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  height: 180,
                  width: '65%',
                  backgroundColor: 'white',
                  marginTop: 30,
                  marginLeft: 65,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/SignUpImg.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 250,
                    height: 250,
                  }}
                />
              </View>

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
                      style={{flex: 1}}
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={() => setFieldTouched('name')}
                    />
                  </View>
                  {touched.name && errors.name && (
                    <ErrorText text={errors.name || ''} />
                  )}
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
                      style={{
                        flex: 1,
                      }}
                      value={values.phone}
                      onChangeText={handleChange('phone')}
                      onBlur={() => setFieldTouched('phone')}
                    />
                  </View>
                  {touched.phone && errors.phone && (
                    <ErrorText text={errors.phone || ''} />
                  )}
                </View>
              </View>

              <RegularText style={{marginTop: 15, fontSize: 14}}>
                Email
              </RegularText>
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
                  onPress={() => navigation.goBack()}
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
                  placeholder="example@gmail.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
              </View>
              {touched.email && errors.email && (
                <ErrorText text={errors.email || ''} />
              )}
              {/* {} */}

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
                  }}
                  onPress={() =>
                    SheetManager.show(SHEETS.TagSheet, {
                      payload: {
                        onSelect: (id: string) => setTagId(id),
                        loading: tagListLoading,
                        items: tagList,
                      },
                    })
                  }>
                  <RegularText style={{fontSize: 14, opacity: 0.5}}>
                    {tagId?.displayname || 'select course'}
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
                  }}
                  onPress={() =>
                    SheetManager.show(SHEETS.CourseSheet, {
                      payload: {
                        onSelect: (id: string) => setCourseId(id),
                        loading: courseListLoading,
                        items: courseList,
                      },
                    })
                  }>
                  <RegularText style={{fontSize: 14, opacity: 0.5}}>
                    {courseId?.title || 'select course'}
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
                  marginTop: 15,
                  alignItems: 'center',
                }}>
                <CheckBox
                  disabled={false}
                  value={termsAccepted}
                  onValueChange={newValue => setTermsAccepted(newValue)}
                />
                <SmallText style={{opacity: 0.5}}> I accept the </SmallText>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PrivacyPolicy');
                  }}>
                  <SmallText style={{color: COLORS.lightBlue}}>
                    privacy & policy
                  </SmallText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  alignItems: 'center',
                }}>
                <TeritaryBtn
                  loading={loading}
                  text={'Sign Up'}
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </MainLayout>
  );
};

export default SignupScreen;
