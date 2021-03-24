import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

import moment from "moment";
import ToggleFollowBtn from "../ToggleFollowBtn";
import UserNameBtn from "../UserNameBtn";

const Follow = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <UserNameBtn username={data.user.username} image={data.user.image} />
        <Text style={styles.text}>Started following you.</Text>
      </View>

      <ToggleFollowBtn BtnStyles={{ alignSelf: "flex-end" }} />

      <Text style={styles.time}>{moment(data.timestamp).fromNow()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 5,
    paddingTop: 10,
    marginBottom: 20,
  },
  contentWrapper: {
    flexDirection: "row",
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

export default Follow;
