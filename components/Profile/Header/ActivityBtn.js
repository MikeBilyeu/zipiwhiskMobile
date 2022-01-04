import React from "react";
import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const ActivityBtn = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Activity")}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.btn]}
      hitSlop={25}
    >
      <Ionicons name="people-outline" size={wp("7%")} color="#000" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    left: wp("2%"),
    overflow: "hidden",
    width: wp("15%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActivityBtn;
