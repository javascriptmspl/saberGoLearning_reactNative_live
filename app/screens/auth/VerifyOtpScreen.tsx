import {View, Alert, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import OtpInputs from 'react-native-otp-inputs';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {useRouter} from 'react-native-actions-sheet/dist/src/hooks/use-router';
import {api_otpVerify, api_sendOTP} from '../../api/auth';
import {number} from 'yup';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/theme';
import TeritaryBtn from '../../components/Layout/TeritaryBtn';

const VerifyOtpScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [otp, setOtp] = useState('');
  const params = useRoute<any>().params;
  console.log({params});

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const t = params.token;
      console.log({t, otp});
      const res = await api_otpVerify(otp, t);
      console.log({res});
      Alert.alert('Alert', res.message || 'OTP Successfully Verified');
      // @ts-ignore
      navigation.navigate('SetNewPassword', {token: params.token});
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout title="Verification Account" onBack={navigation.goBack}>
      <View
        style={{
          flex: 1,
          marginHorizontal: '10%',
          marginTop: 25,
          alignItems: 'center',
        }}>
        <BigText bold style={{textAlign: 'center'}}>
          Enter the 4- digit code sent to your email
        </BigText>

        <OtpInputs
          style={{flexDirection: 'row', marginVertical: 30}}
          autofillFromClipboard
          inputStyles={{
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            margin: 10,
            fontSize: 15,
            textAlign: 'center',
          }}
          handleChange={code => setOtp(code)}
          numberOfInputs={4}
        />
        <TouchableOpacity>
          <SmallText style={{color: COLORS.lightBlue}}>Resend code</SmallText>
        </TouchableOpacity>

        <TeritaryBtn
          containerStyle={{marginTop: 40}}
          loading={loading}
          onPress={handleVerifyOtp}
          text="Verify Code"
        />
      </View>
    </MainLayout>
  );
};

export default VerifyOtpScreen;
