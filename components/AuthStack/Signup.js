import React from "react";
import { connect } from "react-redux";

import {
  signupEmailChange,
  signupUsernameChange,
} from "../../redux/actions/signup";

import AuthScreenWrapper from "./AuthScreenWrapper";
import Input from "../Input";
import Btn from "./Btn";
import NavBtn from "./NavBtn";
import Or from "./Or";

const Signup = (props) => {
  const continueDisabled =
    !props.signup.email ||
    !props.signup.username ||
    props.signup.usernameError ||
    props.signup.emailError;

  const handleContinuePress = () => {
    props.navigation.navigate("SignupContinued");
  };

  return (
    <AuthScreenWrapper headerText="Signup">
      <Input
        value={props.signup.email}
        handleChange={props.signupEmailChange}
        placeholder="Email"
        textContentType="emailAddress"
        keyboardType="email-address"
        iconName="mail"
        autoCapitalize="none"
        error={props.signup.emailError}
      />
      <Input
        value={props.signup.username}
        handleChange={props.signupUsernameChange}
        placeholder="Username"
        textContentType="username"
        iconName="person"
        autoCapitalize="none"
        error={props.signup.usernameError}
      />
      <Btn
        text="Continue"
        handleOnPress={handleContinuePress}
        disabled={continueDisabled}
      />
      <Or />
      <NavBtn
        text="Login"
        handleOnPress={() => props.navigation.navigate("Login")}
      />
    </AuthScreenWrapper>
  );
};

const mapStateToProps = (state) => ({ signup: state.signup });
const mapDispatchToProps = {
  signupEmailChange,
  signupUsernameChange,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
