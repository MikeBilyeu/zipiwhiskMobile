import React, { useState } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { signupUsernameChange, registerUser } from "../../redux/actions/auth";
import Input from "../Input";

function SignupContinued(props) {
  const signupDisabled = !props.signup.username;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image
            source={require("../../assets/zipiwhisk.png")}
            style={{ height: 55 }}
            resizeMode="contain"
          />
          <Text style={styles.header}>Signup</Text>
          <Text style={styles.header}>{props.signup.email}</Text>

          <Input
            value={props.signup.username}
            handleChange={props.signupUsernameChange}
            placeholder="Useraname"
            textContentType="username"
            iconName="person"
          />

          <TouchableOpacity
            onPress={props.registerUser}
            activeOpacity={0.8}
            style={[
              styles.continueBtn,
              signupDisabled && styles.signupDisabled,
            ]}
            disabled={signupDisabled}
          >
            <Text style={styles.continueBtnText}>{"Signup"}</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  header: {
    fontSize: 18,
    marginBottom: 25,
    color: "#313131",
  },
  continueBtn: {
    elevation: 8,
    marginTop: 62,
    backgroundColor: "#0172C4",
    borderRadius: 100,
    width: "95%",
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  signupDisabled: {
    opacity: 0.6,
  },
  continueBtnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  loginBtn: {},
  loginBtnText: {
    color: "#0172C4",
    fontSize: 18,
  },
});

const mapStateToProps = (state) => ({ signup: state.auth.signup });

const mapDispatchToProps = { registerUser, signupUsernameChange };

export default connect(mapStateToProps, mapDispatchToProps)(SignupContinued);
