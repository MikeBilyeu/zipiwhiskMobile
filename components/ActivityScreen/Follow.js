import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import moment from "moment";

const Follow = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity style={styles.userContainer}>
          <Image style={styles.userImage} source={{ uri: data.user.image }} />
          <Text style={styles.username}>{data.user.username}</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Started following you.</Text>
      </View>

      <TouchableOpacity style={styles.followBtn} onPress={null}>
        <Text style={styles.followBtnText}>Follow Back</Text>
      </TouchableOpacity>

      <Text style={styles.time}>{moment(data.timestamp).fromNow()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
    padding: 5,
    paddingTop: 10,
    marginBottom: 20,
  },
  contentWrapper: {
    flexDirection: "row",
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    marginBottom: 5,
  },
  userImage: {
    height: 30,
    width: 30,
    marginRight: 5,
    marginLeft: 0,
    resizeMode: "stretch",
    borderRadius: 100,
  },
  username: {
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 15,
    lineHeight: 18,
  },
  text: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
    lineHeight: 30,
  },
  followBtn: {
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0172C4",
    borderRadius: 5,
  },
  followBtnText: {
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 15,
    lineHeight: 18,
  },
  time: {
    color: "#B7B7B7",
    fontSize: 15,
    fontFamily: "AvenirNextRegular",
  },
});

export default Follow;
