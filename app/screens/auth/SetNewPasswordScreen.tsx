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
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import PrimaryBtn from '../../components/PrimaryBtn';
import MainLayout from '../../components/Layout/MainLayout';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {api_setNewPassword} from '../../api/auth';
import {ScrollView} from 'react-native-gesture-handler';
import TeritaryBtn from '../../components/Layout/TeritaryBtn';

const SetNewPasswordSchema = yup.object().shape({
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

const SetNewPasswordScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = React.useState(false);
  const params = useRoute<any>().params;
  console.log({params});

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleSetNewPassword = async (data: any) => {
    setLoading(true);
    try {
      const res = await api_setNewPassword(data, params.token);
      console.log({res});
      Alert.alert('Alert', res?.message || 'success!');
      navigation.navigate('Login');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout title="Set New Password" onBack={navigation.goBack}>
      <ScrollView>
        <Formik
          initialValues={{
            newPassword: '',
            confirmNewPassword: '',
          }}
          validateOnMount={true}
          validationSchema={SetNewPasswordSchema}
          onSubmit={res => {
            handleSetNewPassword(res.newPassword);
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
                marginTop: 15,
              }}>
              <View
                style={{
                  height: 240,
                  width: '65%',
                  marginTop: 40,
                  marginLeft: 65,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/SetNewPassImg.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 220,
                  }}
                />
              </View>

              <RegularText style={{fontSize: 14}}>New Password</RegularText>

              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  alignItems: 'center',
                  borderTopColor: 'white',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'white',
                  borderBottomColor: COLORS.lightBlue,
                }}>
                <AntDesign name="lock1" size={18} color={'gray'} />
                <TextInput
                  style={{
                    color: COLORS.lightBlue,
                    height: 40,
                    marginLeft: 5,
                    width: '85%',
                    marginRight: 10,
                  }}
                  placeholder=""
                  secureTextEntry={!isPasswordVisible}
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  onBlur={() => setFieldTouched('newPassword')}
                />
                <Feather
                  style={{}}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  // name="eye"
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
                  borderBottomColor: COLORS.lightBlue,
                }}>
                <AntDesign name="lock1" size={18} color={'gray'} />
                <TextInput
                  style={{
                    color: COLORS.lightBlue,
                    height: 40,
                    marginLeft: 5,
                    width: '85%',
                    marginRight: 10,
                  }}
                  placeholder=""
                  secureTextEntry={!isPasswordVisible2}
                  value={values.confirmNewPassword}
                  onChangeText={handleChange('confirmNewPassword')}
                  onBlur={() => setFieldTouched('confirmNewPassword')}
                />
                <Feather
                  style={{}}
                  onPress={() => setIsPasswordVisible2(!isPasswordVisible2)}
                  name={isPasswordVisible2 ? 'eye-off' : 'eye'}
                  size={18}
                  color={'gray'}
                />
              </View>
              {touched.confirmNewPassword && errors.confirmNewPassword && (
                <ErrorText text={errors.confirmNewPassword || ''} />
              )}

              <View
                style={{
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  alignItems: 'center',
                  marginTop: 40,
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

export default SetNewPasswordScreen;
