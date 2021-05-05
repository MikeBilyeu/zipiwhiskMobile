import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NumFollows = ({ text, num, username }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.numWrapper}
      onPress={() =>
        navigation.push("Follows", {
          screen: text,
          num,
          username,
        })
      }
    >
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
