import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

const CamBtn = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      hitSlop={25}
      style={({ pressed }) => [
        styles.btn,
        props.styles,
        { opacity: pressed ? 0.5 : 1 },
      ]}
    >
      <Ionicons
        name={props.icon}
        size={wp("6.5%")}
        color={props.color || "#FFF"}
      />
      {props.children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: wp("15%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

export default CamBtn;
