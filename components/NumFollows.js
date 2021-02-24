import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const NumFollows = ({ text, num }) => {
  return (
    <TouchableOpacity style={styles.numWrapper} onPress={null}>
      <Text style={styles.num}>{num}</Text>
      <Text style={styles.numText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  numWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  num: {
    fontFamily: "AvenirNextBold",
    fontSize: 16,
    color: "#313131",
  },
  numText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: 16,
    color: "#313131",
  },
});

export default NumFollows;
