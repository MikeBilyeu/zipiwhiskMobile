import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import {
  loginUsernameChange,
  loginPasswordChange,
  authLogin,
} from "../../redux/actions/login";

import AuthScreenWrapper from "./AuthScreenWrapper";
import Input from "../Input";
import Btn from "./Btn";
import NavBtn from "./NavBtn";
import Or from "./Or";

const Login = (props) => {
  const loginDisabled =
    props.login.isLoading ||
    !props.login.username ||
    !props.login.password ||
    props.login.usernameError ||
    props.login.passwordError;

  const handleLogin = async () => {
    await props.authLogin();
    if (props.auth.isAuth && !props.auth.isVerified) {
      props.navigation.navigate("VerifyEmail");
    }
  };

  return (
    <AuthScreenWrapper headerText="Login">
      <Input
        value={props.login.username}
        handleChange={props.loginUsernameChange}
        placeholder="Username or Email"
        textContentType="username"
        iconName="person"
        autoCapitalize="none"
        error={props.login.usernameError}
      />

      <Input
        value={props.login.password}
        handleChange={props.loginPasswordChange}
        placeholder="Password"
        textContentType="password"
        iconName="lock-closed"
        autoCapitalize="none"
        secureTextEntry={true}
        error={props.login.passwordError}
      />

      <TouchableOpacity
        onPress={() => props.navigation.navigate("ForgotPassword")}
        activeOpacity={0.4}
        style={styles.forgotPasswordBtnContainer}
      >
        <Text style={styles.forgotPasswordBtnText}>{"Forgot password?"}</Text>
      </TouchableOpacity>

      <Btn
        text={props.login.isLoading ? "logging in..." : "Login"}
        handleOnPress={handleLogin}
        disabled={loginDisabled}
      />

      <Or />

      <NavBtn
        text="Signup"
        handleOnPress={() => props.navigation.navigate("Signup")}
        disabled={props.login.isLoading}
      />
    </AuthScreenWrapper>
  );
};

const styles = StyleSheet.create({
  forgotPasswordBtnContainer: {
    elevation: 8,
    paddingVertical: 5,
    paddingHorizontal: 25,
    alignSelf: "flex-end",
  },
  forgotPasswordBtnText: {
    color: "#B7B7B7",
    alignSelf: "center",
    fontFamily: "AvenirNextRegular",
  },
});

const mapStateToProps = (state) => ({
  login: state.login,
  auth: state.auth,
});

const mapDispatchToProps = {
  loginUsernameChange,
  loginPasswordChange,
  authLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
