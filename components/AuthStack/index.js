import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Signup from "./Signup";
import SignupContinued from "./SignupContinued";
import ForgotPassword from "./ForgotPassword";
import VerifyEmail from "./VerifyEmail";

const Stack = createStackNavigator();

const Auth = (props) => {
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
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
    </Stack.Navigator>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Auth);
