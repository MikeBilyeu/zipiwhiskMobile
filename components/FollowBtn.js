import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FollowBtn = ({ BtnStyles, textStyles }) => {
  return (
    <TouchableOpacity style={[styles.followBtn, BtnStyles]} onPress={null}>
      <Text style={[styles.followBtnText, textStyles]}>Follow</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  followBtn: {
    minWidth: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    backgroundColor: "#0172C4",
    borderRadius: 5,
  },
  followBtnText: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 15,
  },
});

export default FollowBtn;
