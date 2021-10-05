import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { followUser, unfollowUser } from "../redux/actions/userProfile";

const ToggleFollowBtn = ({
  id,
  following,
  BtnStyles,
  textStyles,
  followUser,
  unfollowUser,
}) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const handleOnPress = () => {
    if (isFollowing) {
      unfollowUser(id);
      setIsFollowing(0);
    } else {
      followUser(id);
      setIsFollowing(1);
    }
  };

  return (
    <TouchableOpacity style={[styles.btn, BtnStyles]} onPress={handleOnPress}>
      <View
        style={[
          styles.btnIcon,
          isFollowing
            ? { backgroundColor: "#F44545" }
            : { backgroundColor: "#01C481" },
        ]}
      />
      <Text style={styles.btnText}>{isFollowing ? "Following" : "Follow"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: wp("3.2%"),
    width: wp("33%"),
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  btnText: {
    textAlign: "center",
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.5%"),
  },
  btnIcon: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginRight: 12,
  },
});

export default connect(null, { followUser, unfollowUser })(ToggleFollowBtn);
