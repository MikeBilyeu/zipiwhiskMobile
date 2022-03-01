import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { signupPasswordChange, registerUser } from "../../redux/actions/signup";

import AuthScreenWrapper from "./AuthScreenWrapper";
import Input from "../Input";
import Btn from "./Btn";
import NavBtn from "./NavBtn";
import Or from "./Or";

function SignupContinued(props) {
  const signupDisabled = props.signup.isLoading || !props.signup.password;
  console.log(props.signup);
  const handleSignup = () => {
    props.registerUser();
    props.navigation.navigate("VerifyEmail", {
      email: props.signup.email.toLowerCase(),
    });
  };

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
        text={
          props.login.isLoading
            ? "logging in..."
            : props.signup.isLoading
            ? "Loading..."
            : "Signup"
        }
        handleOnPress={handleSignup}
        disabled={signupDisabled}
      />
      <Or />
      <NavBtn
        text="Go Back"
        handleOnPress={() => props.navigation.navigate("Signup")}
        disabled={props.signup.isLoading}
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

const mapStateToProps = (state) => ({
  signup: state.signup,
  login: state.login,
});

const mapDispatchToProps = { registerUser, signupPasswordChange };

export default connect(mapStateToProps, mapDispatchToProps)(SignupContinued);
