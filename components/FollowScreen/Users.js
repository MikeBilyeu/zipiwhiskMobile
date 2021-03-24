import React from "react";
import { StyleSheet, View } from "react-native";
import UserNameBtn from "../UserNameBtn";
import ToggleFollowBtn from "../ToggleFollowBtn";

const Users = ({ username, image }) => (
  <View style={styles.container}>
    <UserNameBtn username={username} image={image} />

    <ToggleFollowBtn BtnStyles={{ alignSelf: "flex-end" }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 5,
    paddingTop: 5,
    marginBottom: 5,
  },
  text: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
    lineHeight: 30,
  },
  time: {
    color: "#B7B7B7",
    fontSize: 15,
    fontFamily: "AvenirNextRegular",
  },
});
export default Users;
