import React from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import NumFollows from "./NumFollows";

const FollowsContainer = (props) => {
  return (
    <View style={styles.followContainer}>
      <NumFollows
        text="Followers"
        num={props.user.num_followers}
        username={props.user.username}
      />
      {props.children}
      <NumFollows
        text="Following"
        num={props.user.num_followings}
        username={props.user.username}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: wp("4%"),
  },
});

export default FollowsContainer;
