import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GroupDashboardTopTabNavigator from "./GroupDashboardTopTabNavigator";

export type GroupStackParamList = {
  GroupDashboard: { groupId: string };
};

const Stack = createNativeStackNavigator<GroupStackParamList>();

export default function GroupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GroupDashboard"
        component={GroupDashboardTopTabNavigator}
        options={{ title: "Group Dashboard", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
