import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoursesStackParams} from './types';
import CoursesScreen from '../screens/MyCoursesScreen';

const Stack = createNativeStackNavigator<CoursesStackParams>();
const CoursesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
    </Stack.Navigator>
  );
};

export default CoursesStack;
