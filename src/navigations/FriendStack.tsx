import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FriendScreen from '../screens/Friends/List/FriendScreen';

const Stack = createNativeStackNavigator();
export default function FriendStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FriendScreen"
        component={FriendScreen}
        options={{title: 'My home', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
