import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpenseScreen from '../screens/ExpenseScreen';

const Stack = createNativeStackNavigator();
export default function ExpenseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExpenseScreen"
        component={ExpenseScreen}
        options={{title: 'Expenses', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
