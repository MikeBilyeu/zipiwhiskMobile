import React, { useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, Pressable, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { followUser, unfollowUser } from "../redux/actions/visitProfile";

const ToggleFollowBtn = ({
  id,
  following,
  BtnStyles,
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
    <Pressable style={[styles.btn, BtnStyles]} onPress={handleOnPress}>
      <View
        style={[
          styles.btnIcon,
          isFollowing
            ? { backgroundColor: "#FF2121" }
            : { backgroundColor: "#01C481" },
        ]}
      />
      <Text style={styles.btnText}>{isFollowing ? "Following" : "Follow"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: wp("28%"),
    height: wp("9%"),
    borderRadius: wp("1%"),
    borderWidth: wp(".25%"),
    borderColor: "#707070",
  },
  btnText: {
    textAlign: "center",
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.2%"),
  },
  btnIcon: {
    width: wp("1.3%"),
    height: wp("1.3%"),
    borderRadius: 100,
    marginRight: wp("3%"),
    backgroundColor: "#00D088",
  },
});

export default connect(null, { followUser, unfollowUser })(ToggleFollowBtn);
