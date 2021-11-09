import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import UserImageBtn from "../../UserImageBtn";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const UserInfo = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.userInfoContainer}>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.backBtn,
        ]}
        hitSlop={20}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={wp("6.5%")} color="#313131" />
      </Pressable>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>@{props.user.username}</Text>
        <Text style={styles.fullNameText}>{props.user.fullname}</Text>
      </View>
      <UserImageBtn
        handleImagePress={props.handleImagePress}
        uri={props.user.image_url}
        styles={{ width: wp("13%"), height: wp("13%") }}
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
    paddingVertical: hp("1%"),
  },
  usernameContainer: {
    justifyContent: "space-between",
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
    height: wp("13%"),
    width: wp("13%"),
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default UserInfo;
