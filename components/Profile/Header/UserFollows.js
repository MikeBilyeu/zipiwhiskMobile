import React from "react";
import { View, StyleSheet } from "react-native";

import ToggleFollowBtn from "../../ToggleFollowBtn";
import NumFollows from "../../NumFollows";

const UserFollows = (props) => {
  return (
    <View style={styles.container}>
      <NumFollows
        text="Followers"
        num={props.user.numFollowers}
        username={props.user.username}
      />
      <ToggleFollowBtn />
      <NumFollows
        text="Following"
        num={props.user.numFollowing}
        username={props.user.username}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
});

export default UserFollows;
