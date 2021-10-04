import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import UserImageBtn from "../../UserImageBtn";
import { useNavigation } from "@react-navigation/native";

const UserInfo = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.userInfoContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.4}
        style={styles.backBtn}
      >
        <Image
          source={require("../../../assets/arrow.png")}
          style={{
            width: wp("5%"),
            height: wp("5%"),
            transform: [{ rotate: "-90deg" }],
          }}
        />
      </TouchableOpacity>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{props.user.username}</Text>
        <Text style={styles.fullNameText}>{props.user.fullname}</Text>
      </View>
      <UserImageBtn
        handleImagePress={props.handleImagePress}
        uri={props.user.image_url}
        styles={{ width: wp("12%"), height: wp("12%") }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    marginTop: 5,
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
    marginTop: wp("1%"),
    marginBottom: 2,
  },
  fullNameText: {
    textAlign: "center",
    fontSize: wp("3.25%"),
    fontFamily: "AvenirNextRegular",
    color: "#313131",
  },
  backBtn: {
    height: wp("12%"),
    width: wp("12%"),
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default UserInfo;
