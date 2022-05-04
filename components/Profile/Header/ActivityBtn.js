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
      hitSlop={{ top: 10, bottom: 10 }}
    >
      <Ionicons name="people-outline" size={wp("7%")} color="#000" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: wp("18%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActivityBtn;
