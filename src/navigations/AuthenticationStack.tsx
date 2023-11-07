import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Authentication/Login/LoginScreen";
import RegisterScreen from "../screens/Authentication/RegisterScreen";
import ForgotPasswordScreen from "../screens/Authentication/ForgotPasswordScreen";
import WelcomeScreen from "../screens/Authentication/WelcomeScreen";
import { FormProvider } from "@providers/FormProvider";
import { UserRegister } from "types/UserRegisterInterface";
import RegisterUserProvider from "@providers/RegisterUserProvider";
import React from "react";

export type AuthenticationStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ForgotPasswordScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();
export default function AuthenticationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={(props: any) => (
          <FormProvider formClass={UserRegister}>
            <RegisterUserProvider>
              <RegisterScreen {...props} />
            </RegisterUserProvider>
          </FormProvider>
        )}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
