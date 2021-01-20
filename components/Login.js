import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  TextInput,
  Image,
  View,
} from "react-native";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginDisabled = !username || !password;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image
            source={require("../assets/zipiwhisk.png")}
            style={{ height: 55 }}
            resizeMode="contain"
          />
          <Text style={styles.header}>Login</Text>

          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/username.png")}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Username"
              textContentType="username"
              clearButtonMode="while-editing"
              selectionColor="#464646"
              returnKeyType="done"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/password.png")}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              textContentType="password"
              clearButtonMode="while-editing"
              selectionColor="#464646"
              returnKeyType="done"
            />
          </View>

          <TouchableOpacity
            onPress={null}
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

          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>{"Or"}</Text>
            <View style={styles.orLine} />
          </View>

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
    marginBottom: 15,
    color: "#313131",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    height: 50,
    width: "95%",
    borderRadius: 100,
    paddingHorizontal: 0,
    margin: 5,
  },
  icon: {
    padding: 10,
    marginHorizontal: 20,
    height: 20,
    width: 20,
    resizeMode: "stretch",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: "#313131",
    height: 50,
    width: "95%",
    position: "absolute",
    paddingLeft: 45,
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

  orContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginVertical: 20,
  },
  orLine: {
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 0.5,
    width: 75,
    marginHorizontal: 15,
  },
  orText: {
    color: "#E2E2E2",
    fontSize: 15,
  },
  signupBtnContainer: {},
  signupBtnText: {
    color: "#0172C4",
    fontSize: 18,
  },
});

export default Login;
