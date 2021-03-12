import React from "react";
import { View, StyleSheet } from "react-native";

import ToggleFollowBtn from "../../ToggleFollowBtn";
import NumFollows from "../../NumFollows";
import { userData } from "./data";

const UserFollows = () => {
  return (
    <View style={styles.container}>
      <NumFollows
        text="Followers"
        num={userData.numFollowers}
        username={userData.username}
      />
      <ToggleFollowBtn />
      <NumFollows
        text="Following"
        num={userData.numFollowing}
        username={userData.username}
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
