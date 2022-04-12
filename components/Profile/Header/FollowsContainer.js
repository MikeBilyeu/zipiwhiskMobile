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
        num={props.numFollowers}
        username={props.username}
      />
      {/* {props.children} */}

      <NumFollows
        text="Following"
        num={props.numFollowings}
        username={props.username}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: wp("2%"),
  },
});

export default FollowsContainer;
