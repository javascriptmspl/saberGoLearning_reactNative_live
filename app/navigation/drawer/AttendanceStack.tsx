import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AttendanceStackParams} from '../types';
import AttendanceScreen from '../../screens/AttendanceScreen';

const Stack = createNativeStackNavigator<AttendanceStackParams>();
const AttendanceStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
    </Stack.Navigator>
  );
};

export default AttendanceStack;
