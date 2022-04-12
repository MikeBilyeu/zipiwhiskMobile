import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const NumFollows = ({ text, num, username }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.numWrapper,
      ]}
      hitSlop={{ left: 15, right: 15 }}
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  numWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("20%"),
  },
  num: {
    fontFamily: "AvenirNextBold",
    fontSize: wp("3.8%"),
    color: "#313131",
  },
  numText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.5%"),
    color: "#313131",
  },
});

export default NumFollows;
