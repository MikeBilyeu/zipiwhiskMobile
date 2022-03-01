import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import AuthScreenWrapper from "./AuthScreenWrapper";
import NavBtn from "./NavBtn";

const ForgotPassword = (props) => (
  <AuthScreenWrapper headerText="Forgot Password">
    <Text style={styles.text}>
      We sent you an email to reset your password.
    </Text>
    <NavBtn
      text="Go Back"
      handleOnPress={() => props.navigation.navigate("Login")}
    />
  </AuthScreenWrapper>
);

const styles = StyleSheet.create({
  text: {
    fontSize: wp("5%"),
    textAlign: "center",
    marginBottom: wp("10%"),
    color: "#313131",
  },
});

export default ForgotPassword;
