import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoreNavigator from "./CoreNavigator";
import GroupStack, { GroupStackParamList } from "./GroupStack";
import GroupRegisterScreen from "@screens/Groups/Register/GroupRegisterScreen";
import GroupInviteFriends from "@screens/Groups/InviteFriends/GroupInviteFriends";
import { useIntl } from "react-intl";
import { MESSAGES } from "@constants/messages-ids";

export type AuthenticatedStackParamList = {
  CoreNavigator: undefined;
  GroupStack: any; //TODO: inform the correct type
  GroupRegister: undefined;
  GroupInviteFriends: undefined;
};
const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

export default function AuthenticatedStack() {
  const intl = useIntl();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CoreNavigator"
        component={CoreNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GroupStack"
        component={GroupStack}
        options={{
          headerShown: true,
          title: intl.formatMessage({ id: MESSAGES.ids.LABEL_GROUP_DETAIL }),
        }}
      />
      <Stack.Screen
        name="GroupRegister"
        component={GroupRegisterScreen}
        options={{ headerShown: true, title: "Novo grupo" }}
      />
      <Stack.Screen
        name="GroupInviteFriends"
        component={GroupInviteFriends}
        options={{ headerShown: false, title: "Novo grupo" }}
      />
    </Stack.Navigator>
  );
}
