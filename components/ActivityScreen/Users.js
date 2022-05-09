import React from "react";
import { StyleSheet, View } from "react-native";
import UserNameBtn from "./UserNameBtn";
import ToggleFollowBtn from "../ToggleFollowBtn";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Users = ({ id, username, name, image, isFollowing }) => (
  <View style={styles.container}>
    <UserNameBtn username={username} image_url={image} name={name} id={id} />
    <ToggleFollowBtn id={id} isFollowing={isFollowing} />
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
    marginVertical: hp(".75%"),
  },
});
export default Users;
