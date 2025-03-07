export type RootStackParams = {
  OnBoarding: undefined;
  Welcome: undefined;
  Signup: undefined;
  PrivacyPolicy: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  VerifyOtp: undefined;
  SetNewPassword: { token: string };
  DrawerNavigator: undefined;
  Pdf: undefined;

};

// TABS ====>
export type TabNavigatorParams = {
  Dashboard: undefined;
  Courses: undefined;
  Wishlist: undefined;
  Attendance: undefined
  Job:undefined
  Resources:undefined
  Events:undefined
};

export type DashboardStackParams = {
  DashboardScreen: undefined;
  Notification: undefined;
  DevelopmentCourse: undefined;
  SearchResult: undefined;
  Filter: undefined;
  CourseDetail: { courseId: string };
  MobileCourses: undefined;
  WebCourses: undefined;

  OtherCourses: undefined;
  JobsScreen: undefined;
  ContactUs: undefined;
  VideoPlayer: { videoUri: string };
  ConnectionLost: undefined;
  Pdf: undefined;
  BlogScreen: { blogId: number }
  MeanStack:undefined;
  Syllabus:undefined;
  Classes:undefined;
  Assignment:undefined;
  Project:undefined;
  Discussion:undefined;
  Grade:undefined;
  Task:undefined;
  OnlinePayment:undefined;
  Card:undefined;
  BankDetail:undefined;
};

export type WishlistStackParams = {
  WishlistScreen: undefined;
  Payment: undefined;
  PaymentDone: undefined;
};

export type CoursesStackParams = {
  CoursesScreen: undefined;
};

export type AttendanceStackParams = {
  Attendance: undefined;
};
export type JobStackParams = {
  Jobs: undefined;
};
export type EventStackParams = {
  Events: undefined;
};



// DRAWER ===>
export type DrawerNavigatorParams = {
  MainTabs: undefined;
  ProfileStack: undefined;
  FeeDetailsStack: undefined;
  SettingStack: undefined;
  MyCoupan: undefined;
  CardStack: undefined;
  HelpAndSupport: undefined;
  ResourcesStack: undefined;
  
};
