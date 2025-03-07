import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {COLORS} from '../../constants/theme';
import {RegularText, SmallText, BigText} from '../../components/MyText';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PrimaryBtn from '../../components/PrimaryBtn';
import MainLayout from '../../components/Layout/MainLayout';
import ImagePicker from 'react-native-image-crop-picker';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {api_updateUser} from '../../api/auth';
import {SHEETS} from '../../sheets/sheets';
import DatePicker from 'react-native-date-picker';
import {useSelector} from 'react-redux';
import {authSelector, tokenSelector} from '../../redux/feature/auth/authSlice';
import {Platform} from 'react-native';
import {getImageUrl} from '../../api';
import TeritaryBtn from '../../components/Layout/TeritaryBtn';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email.')
    .required('* Email address is required *'),
  name: yup.string().min(4).required('* name is required *'),
  phone: yup.string().min(10).max(10).required('* phone is required *'),
  linkedinUrl: yup.string(),
});

const EditProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const auth = useSelector(authSelector);
  const [selectedImage, setSelectedImage] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [dob, setDob] = React.useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [gender, setGender] = React.useState(auth?.sex || 'male');
  const [country, setCountry] = React.useState('India');
  const token = useSelector(tokenSelector);

  function selectImage() {
    ImagePicker?.openPicker({
      width: 190,
      height: 190,
      cropping: true,
    }).then(image => {
      console.log(image);
      setSelectedImage(image);
    });
  }

  const handleUpdate = async (data: any) => {
    console.log(data);
    console.log(dob, 'dob');
    const formatedDob = dob.toJSON().slice(0, 10);

    try {
      setLoading(true);
      const fdata = new FormData();
      if (selectedImage !== null) {
        console.log(selectedImage, 'selectedIMGE-----');
        const imgObj = {
          name: selectedImage.path.replace('file://', ''),
          type: selectedImage.mime,
          uri:
            Platform.OS === 'ios'
              ? selectedImage.path.replace('file://', '')
              : selectedImage.path,
        };
        fdata.append('image', imgObj);
      }
      fdata.append('name', data.name);
      fdata.append('email', data.email);
      fdata.append('phone', data.phone);
      fdata.append('linkedIn', data.linkedinUrl);
      fdata.append('country', data.country);
      fdata.append('dob', formatedDob);
      fdata.append('sex', gender);

      const res = await api_updateUser(fdata, token, auth.id);

      console.log(res);
      Alert.alert('Alert', 'Success!');
      navigation.goBack();
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <MainLayout title="Edit Profile" onBack={navigation.goBack}>
      <ScrollView>
        <Formik
          initialValues={{
            name: auth?.name || '',
            phone: auth?.phone || '',
            email: auth?.email || '',
            linkedinUrl: '',
          }}
          validateOnMount={true}
          validationSchema={validationSchema}
          onSubmit={res => {
            console.log('res');
            handleUpdate(res);
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
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: 120,
                    width: 120,
                    borderRadius: 120,
                    overflow: 'hidden',
                    backgroundColor: '#757575',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: -20,
                  }}>
                  {selectedImage ? (
                    <Image
                      source={{uri: selectedImage.path}}
                      style={{
                        resizeMode: 'contain',
                        width: 120,
                        height: 120,
                        borderRadius: 120,
                      }}
                    />
                  ) : auth?.image ? (
                    <Image
                      source={{uri: getImageUrl(auth?.image)}}
                      style={{
                        resizeMode: 'contain',
                        width: 120,
                        height: 120,
                        borderRadius: 120,
                      }}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/images/ProfilePicImg.png')}
                      style={{
                        resizeMode: 'contain',
                        width: 120,
                        height: 120,
                        borderRadius: 120,
                      }}
                    />
                  )}
                </View>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                    backgroundColor: '#FE9539',
                    marginLeft: -35,
                    marginTop: 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={selectImage}>
                  <Ionicons
                    style={{marginBottom: 2}}
                    name="ios-camera-reverse-outline"
                    size={25}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderTopColor: 'white',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'white',
                  borderBottomColor: COLORS.gray,
                }}>
                <RegularText style={{marginTop: 20, fontSize: 14}}>
                  Name
                </RegularText>
                {touched.name && errors.name && (
                  <SmallText
                    style={{
                      color: 'red',
                      marginLeft: 10,
                    }}>
                    {errors.name}
                  </SmallText>
                )}
                <TextInput
                  style={{
                    color: '#757575',
                    height: 40,
                    width: '100%',
                    marginLeft: -5,
                  }}
                  placeholder=""
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderTopColor: 'white',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'white',
                  borderBottomColor: COLORS.gray,
                }}>
                <RegularText style={{marginTop: 20, fontSize: 14}}>
                  Mobile Number
                </RegularText>
                {touched.phone && errors.phone && (
                  <SmallText
                    style={{
                      color: 'red',
                      marginLeft: 10,
                    }}>
                    {errors.phone}
                  </SmallText>
                )}
                <TextInput
                  editable={false}
                  style={{
                    color: '#757575',
                    height: 40,
                    width: '100%',
                    marginLeft: -5,
                  }}
                  placeholder="+0123456789"
                  keyboardType="numeric"
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={() => setFieldTouched('phone')}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderTopColor: 'white',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'white',
                  borderBottomColor: COLORS.gray,
                }}>
                <RegularText style={{marginTop: 20, fontSize: 14}}>
                  Email
                </RegularText>
                {touched.email && errors.email && (
                  <SmallText
                    style={{
                      color: 'red',
                      marginLeft: 10,
                    }}>
                    {errors.email}
                  </SmallText>
                )}
                <TextInput
                  editable={false}
                  style={{
                    color: '#757575',
                    height: 40,
                    width: '100%',
                    marginLeft: -5,
                  }}
                  placeholder="demo784@gmail.com"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
              </View>
              {/* {} */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 1,
                }}>
                <TouchableOpacity
                  onPress={() => setIsDatePickerOpen(true)}
                  style={{
                    borderWidth: 1,
                    borderTopColor: 'white',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'white',
                    borderBottomColor: COLORS.gray,
                    width: '48%',
                  }}>
                  <RegularText style={{marginTop: 20, fontSize: 14}}>
                    Date Of Birth
                  </RegularText>

                  <DatePicker
                    modal
                    mode="date"
                    open={isDatePickerOpen}
                    date={dob}
                    onConfirm={dob => {
                      setIsDatePickerOpen(false);
                      setDob(dob);
                    }}
                    onCancel={() => {
                      setIsDatePickerOpen(false);
                    }}
                  />
                  <Text style={{marginLeft: 10}}>
                    {dob ? dob.toISOString().slice(0, 10) : 'YYYY/MM/DD'}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderTopColor: 'white',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'white',
                    borderBottomColor: COLORS.gray,
                    width: '48%',
                  }}>
                  <RegularText style={{marginTop: 20, fontSize: 14}}>
                    Gender
                  </RegularText>
                  <TouchableOpacity
                    onPress={() =>
                      SheetManager.show(SHEETS.GenderSelectSheet, {
                        payload: {
                          onSelect: (v: string) => setGender(v),
                        },
                      })
                    }>
                    <RegularText
                      style={{marginTop: 5, fontSize: 14, opacity: 0.5}}>
                      {gender}
                    </RegularText>
                  </TouchableOpacity>
                </View>
              </View>
              {/* {} */}

              <View
                style={{
                  borderWidth: 1,
                  borderTopColor: 'white',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'white',
                  borderBottomColor: COLORS.gray,
                }}>
                <RegularText style={{marginTop: 20, fontSize: 14}}>
                  Linkedin Url
                </RegularText>
                {touched.linkedinUrl && errors.linkedinUrl && (
                  <SmallText
                    style={{
                      color: 'red',
                      marginLeft: 10,
                    }}>
                    {errors.linkedinUrl}
                  </SmallText>
                )}
                <TextInput
                  style={{
                    color: '#757575',
                    height: 40,
                    width: '100%',
                    marginLeft: -5,
                  }}
                  placeholder="www.linkedin.com/userId"
                  value={values.linkedinUrl}
                  onChangeText={handleChange('linkedinUrl')}
                  onBlur={() => setFieldTouched('linkedinUrl')}
                />
              </View>
              {/* <RegularText style={{marginTop: 15, fontSize: 14}}>
                Location
              </RegularText> */}
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderTopColor: 'white',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'white',
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgray',
                }}>
                <SimpleLineIcons name="globe" size={17} color={COLORS.gray} />
                <TextInput
                  style={{
                    color: '#757575',
                    height: 40,
                    marginLeft: 5,
                    width: '85%',
                    marginRight: 10,
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Enter your location"
                />
              </View> */}

              <View
                style={{
                  justifyContent: 'space-between',
                  // paddingHorizontal: 40,
                  paddingVertical: 20,
                  alignItems: 'center',
                }}>
                <TeritaryBtn
                  loading={loading}
                  text={'Update'}
                  onPress={() => {
                    console.log('90');
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

export default EditProfileScreen;
