import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyDrawer from './drawer/MyDrawer';
import MainTabNavigator from './MainTabNavigator';
import HelpAndSupport from '../screens/HelpAndSupport';
import MyCoupanScreen from '../screens/MyCoupanScreen';
import SettingStack from './drawer/SettingStack';
import ProfileStack from './drawer/ProfileStack';
import CardStack from './drawer/CardStack';
import {DrawerNavigatorParams} from './types';
import FeeDetailsStack from './drawer/FeeDetailsStack';
import ResourcesScreen from '../screens/ResourcesScreen';
import ResourcesStack from './drawer/ResourcesStack';

const Drawer = createDrawerNavigator<DrawerNavigatorParams>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      id="DrawerNavigator"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#f1f1f1',
          width: '100%',
        },
      }}
      drawerContent={() => <MyDrawer />}>
      <Drawer.Screen name="MainTabs" component={MainTabNavigator} />
      {/* NESTED SCREENS */}
      <Drawer.Screen name="ProfileStack" component={ProfileStack} />
      <Drawer.Screen name="FeeDetailsStack" component={FeeDetailsStack} />
      <Drawer.Screen name="SettingStack" component={SettingStack} />
      <Drawer.Screen name="MyCoupan" component={MyCoupanScreen} />
      <Drawer.Screen name="CardStack" component={CardStack} />
      <Drawer.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <Drawer.Screen name="ResourcesStack" component={ResourcesStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
