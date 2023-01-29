import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroupListScreen from '../screens/Groups/List/GroupListScreen';

const Stack = createNativeStackNavigator();
export default function GroupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GroupScreen"
        component={GroupListScreen}
        options={{title: 'Groups', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
