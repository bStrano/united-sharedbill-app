import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../screens/SettingScreen";

export type SettingStackParamList = {
  SettingScreen: undefined;
};

const Stack = createNativeStackNavigator<SettingStackParamList>();
export default function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: "Settings", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
