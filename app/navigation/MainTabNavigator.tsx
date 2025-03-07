import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../constants/theme';
import {TabNavigatorParams} from './types';
import DashboardStack from './DashBoardStack';
import WishlistStack from './WishlistStack';
import CoursesStack from './CoursesStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AttendanceStack from './drawer/AttendanceStack';
import JobStack from './drawer/JobStack';
import ResourcesStack from './drawer/ResourcesStack';
import EventStack from './drawer/EventStack';

import Feather from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator<TabNavigatorParams>();
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#E8F1FC',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
      }}>
  
      {/* <Tab.Screen
        options={{
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarLabel: 'Job',
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                style={{marginTop: 10}}
                color={focused ? COLORS.orange : COLORS.gray}
                size={focused ? 25 : 24}
                name="hearto"
              />
            );
          },
        }}
        name="Wishlist"
        component={WishlistStack}
      /> */}
{/* 
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#FF7438',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <Feather
                style={{marginTop: 10}}
                color={focused ? '#FF7438' : 'black'}
                size={focused ? 25 : 24}
                name="shopping-bag"
              />
            );
          },
        }}
        name="Job"
        component={JobStack}
      /> */}

      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#FF7438',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <Feather
                style={{marginTop: 10}}
                color={focused ? '#FF7438' : 'black'}
                size={focused ? 25 : 24}
                name="book-open"
              />
            );
          },
        }}
        name="Resources"
        component={ResourcesStack}
      />
          <Tab.Screen
        options={{
          tabBarActiveTintColor: '#FF7438',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                style={{marginTop: 10}}
                color={focused ? '#FF7438' : 'black'}
                size={focused ? 25 : 24}
                name="hearto"
              />
            );
          },
        }}
        name="Wishlist"
        component={WishlistStack}
      />

      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: () => {
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 60,
                  position: 'absolute',
                  top: -15,
                }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    backgroundColor: '#FE9539',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <AntDesign color={COLORS.white} size={24} name="home" />
                </View>
              </View>
            );
          },
        }}
        name="Dashboard"
        component={DashboardStack}
      />
   

      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#FF7438',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                style={{marginTop: 10}}
                color={focused ? '#FF7438' : 'black'}
                size={focused ? 25 : 24}
                name="calendar"
              />
            );
          },
        }}
        name="Events"
        component={EventStack}
      />

      {/* <Tab.Screen
        options={{
          tabBarActiveTintColor: '#FF7438',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                style={{marginTop: 10}}
                color={focused ? '#FF7438' : 'black'}
                size={focused ? 25 : 24}
                name="user"
              />
            );
          },
        }}
        name="Attendance"
        component={AttendanceStack}
      /> */}

         <Tab.Screen
        options={{
          tabBarActiveTintColor: '#FF7438',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                style={{marginTop: 10}}
                color={focused ? '#FF7438' : 'black'}
                size={focused ? 25 : 24}
                name="book"
              />
            );
          },
        }}
        name="Courses"
        component={CoursesStack}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
