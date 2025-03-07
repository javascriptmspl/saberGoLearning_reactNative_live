import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddCardScreen1 from '../../screens/MyCard/AddNewCard1';
import AddCardScreen2 from '../../screens/MyCard/AddNewCard2';
import MyCardScreen from '../../screens/MyCard';
import {CardStackParams} from './types';

const Stack = createNativeStackNavigator<CardStackParams>();
const CardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyCard" component={MyCardScreen} />
      <Stack.Screen name="AddCard1" component={AddCardScreen1} />
      <Stack.Screen name="AddCard2" component={AddCardScreen2} />
    </Stack.Navigator>
  );
};

export default CardStack;
