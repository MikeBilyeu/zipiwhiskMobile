import React, { useState } from "react";
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

import Input from "./Input";
import Or from "./Or";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginDisabled = !username || !password;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image
            source={require("../../assets/zipiwhisk.png")}
            style={{ height: 55 }}
            resizeMode="contain"
          />
          <Text style={styles.header}>Login</Text>
          <Input
            value={username}
            handleChange={setUsername}
            placeholder="Username"
            textContentType="username"
            iconPath={require("../../assets/username.png")}
          />

          <Input
            value={password}
            handleChange={setPassword}
            placeholder="Password"
            textContentType="password"
            iconPath={require("../../assets/password.png")}
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={() => props.navigation.navigate("ForgotPassword")}
            activeOpacity={0.4}
            style={styles.ForgotPasswordBtnContainer}
          >
            <Text style={styles.ForgotPasswordBtnText}>
              {"Forgot password?"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={null}
            activeOpacity={0.8}
            style={[
              styles.loginBtnContainer,
              loginDisabled && styles.loginBtnContainerDisabled,
            ]}
            disabled={loginDisabled}
          >
            <Text style={styles.loginBtnText}>{"Login"}</Text>
          </TouchableOpacity>

          <Or />

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Signup")}
            activeOpacity={0.4}
            style={styles.signupBtnContainer}
          >
            <Text style={styles.signupBtnText}>{"Signup"}</Text>
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
  ForgotPasswordBtnContainer: {
    elevation: 8,
    paddingVertical: 5,
    paddingHorizontal: 25,
    alignSelf: "flex-end",
  },
  ForgotPasswordBtnText: {
    color: "#B7B7B7",
    alignSelf: "center",
  },
  loginBtnContainer: {
    elevation: 8,
    marginTop: 35,
    backgroundColor: "#0172C4",
    borderRadius: 100,
    width: "95%",
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  loginBtnContainerDisabled: {
    opacity: 0.6,
  },
  loginBtnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  signupBtnContainer: {},
  signupBtnText: {
    color: "#0172C4",
    fontSize: 18,
  },
});

export default Login;
