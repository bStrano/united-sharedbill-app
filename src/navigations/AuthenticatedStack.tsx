import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoreNavigator from "./CoreNavigator";
import GroupStack from "./GroupStack";
import GroupRegisterScreen from "@screens/Groups/Register/GroupRegisterScreen";
import { FormProvider } from "@providers/FormProvider";
import { GroupRegister } from "types/GroupRegister";
import GroupInviteFriends from "@screens/Groups/InviteFriends/GroupInviteFriends";

const Stack = createNativeStackNavigator();
export default function AuthenticatedStack() {
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
        options={{ headerShown: true, title: "Detalhe grupo" }}
      />
      <Stack.Screen
        name="GroupRegister"
        component={() => {
          return (
            <FormProvider formClass={GroupRegister}>
              <GroupRegisterScreen />
            </FormProvider>
          );
        }}
        options={{ headerShown: true, title: "Novo grupo" }}
      />
      <Stack.Screen
        name="GroupInviteFriends"
        component={() => {
          return <GroupInviteFriends />;
        }}
        options={{ headerShown: false, title: "Novo grupo" }}
      />
    </Stack.Navigator>
  );
}
