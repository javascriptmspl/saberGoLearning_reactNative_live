import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import {DashboardStackParams} from './types';
import NotificationScreen from '../screens/NotificationScreen';
import DevelopmentCourseScreen from '../screens/AllCourses/DevelopmentCourse';
import SearchResultScreen from '../screens/SearchResult';
import FilterScreen from '../screens/FilterScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import MobileCoursesScreen from '../screens/MobileCourses';

import JobsScreen from '../screens/JobsScreen';
import WebCoursesScreen from '../screens/WebCourses';
import OtherCoursesScreen from '../screens/OtherAllCourses';
import VideoPlayerScreen from '../screens/VideoPlayerScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import ConnectionLostScreen from '../screens/ConnectionLostScreen';
import PdfScreen from '../screens/PdfScreen';
import BlogScreen from '../screens/BlogScreen';
import MeanStackScreen from '../screens/MeanStackScreen';
import SyllabusScreen from '../screens/SyllabusScreen';
import ClassesScreen from '../screens/ClassesScreen';
import AssignmentScreen from '../screens/AssignmentScreen';
import ProjectScreen from '../screens/ProjectScreen';
import DiscussionScreen from '../screens/DiscussionScreen';
import GradeScreen from '../screens/GradeScreen';
import TaskScreen from '../screens/TaskScreen';
import OnlinePaymentScreen from '../screens/OnlinePaymentScreen';
import CardScreen from '../screens/CardScreen';
import BankDetailScreen from '../screens/BankDetailScreen';
const Stack = createNativeStackNavigator<DashboardStackParams>();
const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DashboardScreen" component={Dashboard} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen
        name="DevelopmentCourse"
        component={DevelopmentCourseScreen}
      />
      <Stack.Screen name="SearchResult" component={SearchResultScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
      <Stack.Screen name="MobileCourses" component={MobileCoursesScreen} />
      <Stack.Screen name="WebCourses" component={WebCoursesScreen} />
      <Stack.Screen name="JobsScreen" component={JobsScreen} />
      <Stack.Screen name="OtherCourses" component={OtherCoursesScreen} />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      <Stack.Screen name="ConnectionLost" component={ConnectionLostScreen} />
      <Stack.Screen name="Pdf" component={PdfScreen} />
      <Stack.Screen name="BlogScreen" component={BlogScreen} />
      <Stack.Screen name="MeanStack" component={MeanStackScreen} />
      <Stack.Screen name="Syllabus" component={SyllabusScreen} />
      <Stack.Screen name="Classes" component={ClassesScreen} />
      <Stack.Screen name="Assignment" component={AssignmentScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="Discussion" component={DiscussionScreen} />
      <Stack.Screen name="Grade" component={GradeScreen} />
      <Stack.Screen name="Task" component={TaskScreen} />
      <Stack.Screen name="OnlinePayment" component={OnlinePaymentScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="BankDetail" component={BankDetailScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
