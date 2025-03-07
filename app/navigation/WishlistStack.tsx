import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WishlistStackParams} from './types';
import WishlistScreen from '../screens/WishlistScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentDoneScreen from '../screens/PaymentScreen/PaymentDoneScreen';

const Stack = createNativeStackNavigator<WishlistStackParams>();
const WishlistStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PaymentDone" component={PaymentDoneScreen} />
    </Stack.Navigator>
  );
};

export default WishlistStack;
