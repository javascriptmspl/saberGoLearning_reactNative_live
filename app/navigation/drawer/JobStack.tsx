import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AttendanceStackParams, JobStackParams} from '../types';
import AttendanceScreen from '../../screens/AttendanceScreen';
import JobScreen from '../../screens/JobScreen';
import JobsScreen from '../../screens/JobsScreen';

const Stack = createNativeStackNavigator<JobStackParams>();
const JobStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Jobs" component={JobsScreen} />
    </Stack.Navigator>
  );
};

export default JobStack;
