import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoreNavigator from './CoreNavigator';
import GroupStack from './GroupStack';

const Stack = createNativeStackNavigator();
export default function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CoreNavigator"
        component={CoreNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GroupStack"
        component={GroupStack}
        options={{headerShown: true, title: 'Detalhe grupo'}}
      />
    </Stack.Navigator>
  );
}
