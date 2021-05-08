import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import UserImageBtn from "../../UserImageBtn";

const UserInfo = (props) => {
  return (
    <View style={styles.userInfoContainer}>
      <UserImageBtn
        handleImagePress={props.handleImagePress}
        uri={props.user.image}
        styles={{ width: wp("20%"), height: wp("20%") }}
      />

      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{props.user.username}</Text>
        <Text style={styles.fullNameText}>{props.user.fullname}</Text>
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
    paddingHorizontal: wp("2%"),
    backgroundColor: "#fff",
  },
  usernameContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: wp("8%"),
    flex: 1,
  },
  usernameText: {
    textAlign: "center",
    fontSize: wp("5%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#313131",
  },
  fullNameText: {
    textAlign: "center",
    fontSize: wp("3.5%"),
    fontFamily: "AvenirNextRegular",
    color: "#464646",
  },
});

export default UserInfo;
