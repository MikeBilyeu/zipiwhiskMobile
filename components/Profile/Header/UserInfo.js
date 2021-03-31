import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { userData } from "./data";

const UserInfo = (props) => {
  return (
    <View style={styles.userInfoContainer}>
      <TouchableOpacity
        onPress={null}
        activeOpacity={0.5}
        style={styles.userImageWrapper}
      >
        <Image
          style={{ width: 65, height: 65, borderRadius: 50 }}
          source={{ uri: userData.image }}
        />
      </TouchableOpacity>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{userData.username}</Text>
        <Text style={styles.fullNameText}>{userData.fullName}</Text>
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  userImageWrapper: {},
  usernameContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 35,
    flex: 1,
  },
  usernameText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "AvenirNextBold",
    color: "#313131",
  },
  fullNameText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "AvenirNextRegular",
    color: "#464646",
  },
});

export default UserInfo;
