import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroupScreen from '../screens/GroupScreen';

const Stack = createNativeStackNavigator();
export default function GroupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GroupScreen"
        component={GroupScreen}
        options={{title: 'Groups', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
