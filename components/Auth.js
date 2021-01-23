import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Signup from "./Signup";

const Stack = createStackNavigator();

function Auth() {
  return (
    <View>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </View>
  );
}

export default Auth;
