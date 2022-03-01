import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Or = () => (
  <View style={styles.orContainer}>
    <View style={styles.orLine} />
    <Text style={styles.orText}>{"Or"}</Text>
    <View style={styles.orLine} />
  </View>
);
const styles = StyleSheet.create({
  orContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginTop: hp("3.5%"),
    marginBottom: hp("2%"),
  },
  orLine: {
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 0.7,
    width: wp("25%"),
    marginHorizontal: 15,
  },
  orText: {
    color: "#E2E2E2",
    fontSize: wp("4.5%"),
    fontFamily: "AvenirNextRegular",
  },
});

export default Or;
