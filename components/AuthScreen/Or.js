import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    marginVertical: 20,
  },
  orLine: {
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: 0.7,
    width: 75,
    marginHorizontal: 15,
  },
  orText: {
    color: "#E2E2E2",
    fontSize: 15,
  },
});

export default Or;
