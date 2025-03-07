import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ResourcesStackParams} from './types';
import FeeDetailsScreen from '../../screens/FeeDetailsScreen';
import ResourcesScreen from '../../screens/ResourcesScreen';

const Stack = createNativeStackNavigator<ResourcesStackParams>();
const ResourcesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Resources" component={ResourcesScreen} />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
