import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AttendanceStackParams,
  EventStackParams,
  JobStackParams,
} from '../types';
import AttendanceScreen from '../../screens/AttendanceScreen';
import JobScreen from '../../screens/JobScreen';
import EventsScreen from '../../screens/EventsScreen';

const Stack = createNativeStackNavigator<EventStackParams>();
const EventStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Events" component={EventsScreen} />
    </Stack.Navigator>
  );
};

export default EventStack;
