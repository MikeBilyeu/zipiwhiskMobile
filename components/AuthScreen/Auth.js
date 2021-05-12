import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Signup from "./Signup";
import SignupContinued from "./SignupContinued";
import ForgotPassword from "./ForgotPassword";

const Stack = createStackNavigator();

function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignupContinued" component={SignupContinued} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default Auth;
