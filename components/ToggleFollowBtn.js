import React, { useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, Pressable, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { followUser, unfollowUser } from "../redux/actions/follows";

const ToggleFollowBtn = ({
  id,
  isFollowing,
  BtnStyles,
  followUser,
  unfollowUser,
}) => {
  const handleOnPress = () => {
    if (isFollowing) {
      unfollowUser(id);
    } else {
      followUser(id);
    }
  };

  return (
    <Pressable
      style={[
        styles.btn,
        isFollowing ? styles.followingBtn : styles.followBtn,
        BtnStyles,
      ]}
      onPress={handleOnPress}
    >
      {isFollowing ? <View style={styles.btnIcon} /> : null}
      <Text
        style={[
          styles.btnText,
          isFollowing ? styles.followingText : styles.followText,
        ]}
      >
        {isFollowing ? "Following" : "Follow"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: wp("28%"),
    height: wp("8.5%"),
    borderRadius: wp("1%"),
    borderWidth: wp(".275%"),
  },
  followingBtn: {
    borderColor: "#313131",
    backgroundColor: "#fff",
  },
  followBtn: {
    borderColor: "#01C481",
    backgroundColor: "#01C481",
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.2%"),
  },
  followingText: { color: "#313131" },
  followText: {},
  btnIcon: {
    width: wp("1%"),
    height: wp("1%"),
    borderRadius: 100,
    marginRight: wp("3%"),
    backgroundColor: "#FF2121",
  },
});

export default connect(null, { followUser, unfollowUser })(ToggleFollowBtn);
