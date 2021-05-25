import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ToggleFollowBtn = ({ BtnStyles, textStyles, following }) => {
  const [isFollowing, setIsFollowing] = useState(following);
  return (
    <TouchableOpacity
      style={[isFollowing ? styles.unfollowBtn : styles.followBtn, BtnStyles]}
      onPress={() => setIsFollowing(!isFollowing)}
    >
      <Text
        style={[
          isFollowing ? styles.unfollowBtnText : styles.followBtnText,
          textStyles,
        ]}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  unfollowBtn: {
    width: wp("30%"),
    paddingHorizontal: wp("4.5%"),
    paddingVertical: wp("2.8%") - 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: wp("1.5%"),
    borderWidth: 1,
    borderColor: "#313131",
  },
  unfollowBtnText: {
    textAlign: "center",
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.5%"),
  },
  followBtn: {
    width: wp("30%"),
    paddingHorizontal: wp("4.5%"),
    paddingVertical: wp("2.8%"),
    justifyContent: "center",
    backgroundColor: "#0172C4",
    borderRadius: wp("1.5%"),
  },
  followBtnText: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.5%"),
  },
});

export default ToggleFollowBtn;
