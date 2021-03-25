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

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const continueDisabled = !email || !password;

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

          <Input
            value={email}
            handleChange={setEmail}
            placeholder="Email"
            textContentType="emailAddress"
            iconPath={require("../../assets/email.png")}
          />

          <Input
            value={password}
            handleChange={setPassword}
            placeholder="Password"
            textContentType="newPassword"
            iconPath={require("../../assets/password.png")}
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={null}
            activeOpacity={0.8}
            style={[
              styles.continueBtn,
              continueDisabled && styles.continueBtnDisabled,
            ]}
            disabled={continueDisabled}
          >
            <Text style={styles.continueBtnText}>{"Continue"}</Text>
          </TouchableOpacity>

          <Or />

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            activeOpacity={0.4}
            style={styles.loginBtn}
          >
            <Text style={styles.loginBtnText}>{"Login"}</Text>
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
  continueBtnDisabled: {
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

export default Signup;
