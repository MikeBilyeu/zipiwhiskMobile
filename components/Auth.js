import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Signup from "./Signup";

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
    </Stack.Navigator>
  );
}

export default Auth;
