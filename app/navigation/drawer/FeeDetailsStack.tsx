import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeeDetailsStackParams} from './types';
import FeeDetailsScreen from '../../screens/FeeDetailsScreen';

const Stack = createNativeStackNavigator<FeeDetailsStackParams>();
const FeeDetailsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FeeDetails" component={FeeDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeeDetailsStack;
