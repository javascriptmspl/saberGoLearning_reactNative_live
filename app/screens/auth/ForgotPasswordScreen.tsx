import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollViewBase,
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
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {api_sendOTP} from '../../api/auth';
import {setAuth} from '../../redux/feature/auth/authSlice';
import TeritaryBtn from '../../components/Layout/TeritaryBtn';

const SigninSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('* Email address is required *'),
});

const ForgotPasswordScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const token = useSelector((s: any) => s.auth.accessToken);
  const dispatch = useDispatch();

  const handleSendOtp = async (email: any) => {
    console.log('email', email);

    setLoading(true);
    try {
      const res = await api_sendOTP(email);
      console.log({res});
      Alert.alert(
        'Alert',
        res.message || 'OTP successfully sent on registered Email',
      );
      // @ts-ignore
      navigation.navigate('VerifyOtp', {token: res?.data.token});
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout title="Forgot Password" onBack={navigation.goBack}>
      <ScrollView>
        <Formik
          initialValues={{
            email: '',
          }}
          validateOnMount={true}
          validationSchema={SigninSchema}
          onSubmit={res => {
            console.log(res);
            handleSendOtp(res.email);
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
                marginTop: 20,
              }}>
              <View
                style={{
                  height: 205,
                  width: '65%',
                  backgroundColor: 'white',
                  marginTop: 25,
                  marginLeft: 65,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/ForgotPassImg.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 210,
                    height: 210,
                  }}
                />
              </View>
              <RegularText style={{marginTop: 15, fontSize: 14}}>
                Email
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
                <Fontisto
                  style={{marginLeft: 0.5}}
                  onPress={() => navigation.goBack()}
                  name="email"
                  size={18}
                  color={COLORS.lightBlue}
                />
                <TextInput
                  style={{
                    color: COLORS.lightBlue,
                    height: 40,
                    marginLeft: 5,
                    width: '85%',
                    marginRight: 10,
                  }}
                  placeholder="example@gmail.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                <AntDesign
                  style={{}}
                  onPress={() => navigation.goBack()}
                  name="checkcircle"
                  size={18}
                  color={COLORS.lightBlue}
                />
              </View>
              {touched.email && errors.email && (
                <SmallText
                  style={{
                    color: 'red',
                    marginLeft: 10,
                    marginTop: 5,
                  }}>
                  {errors.email}
                </SmallText>
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
                  text={'Send Code'}
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

export default ForgotPasswordScreen;
