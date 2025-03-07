import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import PrimaryBtn from '../../components/PrimaryBtn';
import MainLayout from '../../components/Layout/MainLayout';
import {api_changePassword} from '../../api/auth';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {useSelector} from 'react-redux';
import {authSelector, tokenSelector} from '../../redux/feature/auth/authSlice';
import {ScrollView} from 'react-native-gesture-handler';
import TeritaryBtn from '../../components/Layout/TeritaryBtn';

const ChangePasswordSchema = yup.object().shape({
  oldPassword: yup.string().min(8).required('* Password is required *'),
  newPassword: yup.string().min(8).required('* Password is required *'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match'),
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

const ChangePasswordScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = React.useState(false);
  const [isPasswordVisible3, setIsPasswordVisible3] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const token = useSelector(tokenSelector);
  const auth = useSelector(authSelector);

  const handleChangePassword = async (data: any) => {
    setLoading(true);
    try {
      const res = await api_changePassword(data, token, auth.id);
      console.log({res});
      Alert.alert('Alert', res?.message || 'success!');
      navigation.goBack();
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout title="Change Password" onBack={navigation.goBack}>
      <ScrollView>
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          }}
          validateOnMount={true}
          validationSchema={ChangePasswordSchema}
          onSubmit={res => {
            handleChangePassword(res);
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
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  height: 300,
                  width: '90%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor: 'red',
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/ChngPassImg.png')}
                  style={{
                    resizeMode: 'contain',
                    height: 300,
                    width: '100%',
                  }}
                />
              </View>

              <RegularText style={{fontSize: 14}}>Current Password</RegularText>

              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  alignItems: 'center',
                  borderTopColor: 'white',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'white',
                  borderBottomColor: COLORS.gray,
                }}>
                <AntDesign
                  // onPress={() => navigation.goBack()}
                  name="lock1"
                  // name="unlock"
                  size={18}
                  color={'gray'}
                />
                <TextInput
                  style={{
                    color: COLORS.black,
                    height: 40,
                    marginLeft: 5,
                    width: '85%',
                    marginRight: 10,
                  }}
                  placeholder=""
                  secureTextEntry={!isPasswordVisible}
                  value={values.oldPassword}
                  onChangeText={handleChange('oldPassword')}
                  onBlur={() => setFieldTouched('oldPassword')}
                />
                <Feather
                  style={{}}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  size={18}
                  color={'gray'}
                />
              </View>
              {touched.oldPassword && errors.oldPassword && (
                <ErrorText text={errors.oldPassword || ''} />
              )}

              <RegularText style={{marginTop: 15, fontSize: 14}}>
                New Password
              </RegularText>

              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  alignItems: 'center',
                  borderTopColor: 'white',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'white',
                  borderBottomColor: COLORS.gray,
                }}>
                <AntDesign name="lock1" size={18} color={'gray'} />
                <TextInput
                  style={{
                    color: COLORS.black,
                    height: 40,
                    marginLeft: 5,
                    width: '85%',
                    marginRight: 10,
                  }}
                  placeholder=""
                  secureTextEntry={!isPasswordVisible2}
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  onBlur={() => setFieldTouched('newPassword')}
                />
                <Feather
                  style={{}}
                  onPress={() => setIsPasswordVisible2(!isPasswordVisible2)}
                  name={isPasswordVisible2 ? 'eye-off' : 'eye'}
                  size={18}
                  color={'gray'}
                />
              </View>
              {touched.newPassword && errors.newPassword && (
                <ErrorText text={errors.newPassword || ''} />
              )}
              <RegularText style={{marginTop: 15, fontSize: 14}}>
                Confirm New Password
              </RegularText>

              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  alignItems: 'center',
                  borderTopColor: 'white',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'white',
                  borderBottomColor: COLORS.gray,
                }}>
                <AntDesign name="lock1" size={18} color={'gray'} />
                <TextInput
                  style={{
                    color: COLORS.black,
                    height: 40,
                    marginLeft: 5,
                    width: '85%',
                    marginRight: 10,
                  }}
                  placeholder=""
                  secureTextEntry={!isPasswordVisible3}
                  value={values.confirmNewPassword}
                  onChangeText={handleChange('confirmNewPassword')}
                  onBlur={() => setFieldTouched('confirmNewPassword')}
                />
                <Feather
                  style={{}}
                  onPress={() => setIsPasswordVisible3(!isPasswordVisible3)}
                  name={isPasswordVisible3 ? 'eye-off' : 'eye'}
                  size={18}
                  color={'gray'}
                />
              </View>
              {touched.confirmNewPassword && errors.confirmNewPassword && (
                <ErrorText text={errors.confirmNewPassword || ''} />
              )}
              <View
                style={{
                  //  justifyContent: 'space-between',
                  //  paddingHorizontal: 20,
                  paddingVertical: 20,
                  alignItems: 'center',
                  marginTop: 10,
                  // height:
                }}>
                <TeritaryBtn
                  loading={loading}
                  text={'Change Password'}
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

export default ChangePasswordScreen;
