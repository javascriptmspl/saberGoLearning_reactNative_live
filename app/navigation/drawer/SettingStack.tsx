import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChangePasswordScreen from '../../screens/ChangePassword';
import SettingScreen from '../../screens/SettingScreen';
import {SettingStackParams} from './types';
import PrivacyPolicyScreen from '../../screens/PrivacyPolicyScreen';

const Stack = createNativeStackNavigator<SettingStackParams>();
const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
