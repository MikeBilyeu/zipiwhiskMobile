import React from "react";
import { connect } from "react-redux";

import {
  signupEmailChange,
  signupUsernameChange,
  checkEmail,
} from "../../redux/actions/signup";

import AuthScreenWrapper from "./AuthScreenWrapper";
import Input from "../Input";
import Btn from "./Btn";
import NavBtn from "./NavBtn";
import Or from "./Or";

const Signup = (props) => {
  const continueDisabled = !props.signup.email || !props.signup.username;

  const handleContinuePress = () => {
    props.checkEmail();
    //props.navigation.navigate("SignupContinued");
  };

  return (
    <AuthScreenWrapper headerText="Signup">
      <Input
        value={props.signup.email}
        handleChange={props.signupEmailChange}
        placeholder="Email"
        textContentType="emailAddress"
        iconName="mail"
        error={props.signup.emailError}
      />
      <Input
        value={props.signup.username}
        handleChange={props.signupUsernameChange}
        placeholder="Username"
        textContentType="username"
        iconName="person"
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
  checkEmail,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
