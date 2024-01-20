import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GroupDashboardTopTabNavigator from "./GroupDashboardTopTabNavigator";
import CreateTransactionScreen from "@screens/Groups/Transactions/CreateTransaction";

export type GroupStackParamList = {
  GroupDashboard: { groupId: string };
  CreateTransactionScreen: { groupId: string };
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
      <Stack.Screen
        name="CreateTransactionScreen"
        component={CreateTransactionScreen}
        options={{ headerShown: true, title: "Create Transaction" }}
      />
    </Stack.Navigator>
  );
}
