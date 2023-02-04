import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroupDashboardTopTabNavigator from './GroupDashboardTopTabNavigator';

const Stack = createNativeStackNavigator();
export default function GroupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GroupDashboard"
        component={GroupDashboardTopTabNavigator}
        options={{title: 'Group Dashboard', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
