import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    fontSize: wp("6%"),
    textAlign: "center",
    marginBottom: wp("10%"),
    color: "#313131",
  },
  backBtnText: {
    fontSize: wp("5%"),
    color: "#0172C4",
  },
});

export default ForgotPassword;
