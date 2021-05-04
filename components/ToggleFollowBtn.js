import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ToggleFollowBtn = ({ BtnStyles, textStyles, following }) => {
  if (following) {
    return (
      <TouchableOpacity style={[styles.unfollowBtn, BtnStyles]} onPress={null}>
        <Text style={[styles.unfollowBtnText, textStyles]}>Unfollow</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={[styles.followBtn, BtnStyles]} onPress={null}>
      <Text style={[styles.followBtnText, textStyles]}>Follow</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  unfollowBtn: {
    minWidth: 140,
    paddingHorizontal: 20,
    paddingVertical: 9,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#313131",
  },
  unfollowBtnText: {
    textAlign: "center",
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 15,
  },
  followBtn: {
    minWidth: 140,
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

export default ToggleFollowBtn;
