import React, { useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { signupPasswordChange, registerUser } from "../../redux/actions/auth";

import AuthScreenWrapper from "./AuthScreenWrapper";
import Input from "../Input";
import Btn from "./Btn";
import NavBtn from "./NavBtn";
import Or from "./Or";

function SignupContinued(props) {
  const signupDisabled = !props.signup.username;

  return (
    <AuthScreenWrapper headerText="Signup">
      <Text style={styles.header}>{props.signup.email.toLowerCase()}</Text>
      <Input
        value={props.signup.password}
        handleChange={props.signupPasswordChange}
        placeholder="Password"
        textContentType="password"
        iconName="lock-closed"
        secureTextEntry={true}
      />
      <Btn
        text="Signup"
        handleOnPress={props.registerUser}
        disabled={signupDisabled}
      />
      <Or />
      <NavBtn
        text="Go Back"
        handleOnPress={() => props.navigation.navigate("Signup")}
      />
    </AuthScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: hp("3%"),
    color: "#313131",
    fontSize: wp("4.5%"),
    fontFamily: "AvenirNextDemiBold",
  },
});

const mapStateToProps = (state) => ({ signup: state.auth.signup });

const mapDispatchToProps = { registerUser, signupPasswordChange };

export default connect(mapStateToProps, mapDispatchToProps)(SignupContinued);
