import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import SetNewPasswordScreen from '../screens/auth/SetNewPasswordScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import VerifyOtpScreen from '../screens/auth/VerifyOtpScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import SplashScreen from 'react-native-splash-screen';
import DrawerNavigator from './DrawerNavigator';
import {RootStackParams} from './types';
import {useDispatch, useSelector} from 'react-redux';
import {setAuth, tokenSelector} from '../redux/feature/auth/authSlice';
import {LOCAL_KEYS, getLocalUser} from '../utils/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGetOnboardingStatus from '../hooks/useGetOnboardingStatus';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootNavigator = () => {
  const {isFirstLaunch, isLoading} = useGetOnboardingStatus();
  const token = useSelector(tokenSelector);
  const [isNewlyInstalled, setIsNewlyInstalled] = useState(true);
  const dispatch = useDispatch();

  console.log({isFirstLaunch, isLoading}, 'onboarded');

  React.useEffect(() => {
    const checkLocalAuth = async () => {
      try {
        const localAuth = await getLocalUser();
        if (localAuth) {
          dispatch(setAuth(localAuth));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          SplashScreen.hide();
        }, 1000);
      }
    };

    const checkNewlyInstall = async () => {
      try {
        const res = await AsyncStorage.getItem(LOCAL_KEYS.IS_NEWLY_INSTALLED);

        if (res === 'false') {
          // hide
          setIsNewlyInstalled(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLocalAuth();
    checkNewlyInstall();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {token ? (
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      ) : (
        <>
          {isFirstLaunch && (
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          )}
          {/* {isNewlyInstalled && ( */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          {/* )} */}
          <Stack.Screen name="Login" component={LoginScreen} />

          <Stack.Screen name="Signup" component={SignupScreen} />

          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
          <Stack.Screen
            name="SetNewPassword"
            component={SetNewPasswordScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
