import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";

const ForgotPassword = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        We sent you an email to reset your password.
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}
        activeOpacity={0.4}
        style={styles.loginBtn}
      >
        <Text style={styles.backBtnText}>{"Go back"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 25,
    color: "#313131",
  },
  backBtnText: {
    fontSize: 18,
    color: "#0172C4",
  },
});

export default ForgotPassword;
