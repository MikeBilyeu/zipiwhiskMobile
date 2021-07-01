import React from "react";
import { StyleSheet, View } from "react-native";
import UserNameBtn from "../UserNameBtn";
import ToggleFollowBtn from "../ToggleFollowBtn";

const Users = ({ id, username, image }) => (
  <View style={styles.container}>
    <UserNameBtn username={username} image_url={image} id={id} />

    <ToggleFollowBtn />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
export default Users;
