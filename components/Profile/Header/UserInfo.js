import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ActivityBtn from "./ActivityBtn";
import defaultImage from "../../../assets/userImage.png";

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
      <Pressable
        onPress={props.handleImagePress}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.userContainer,
        ]}
        hitSlop={25}
      >
        <Image
          style={[{ borderRadius: 50, width: wp("9%"), height: wp("9%") }]}
          source={
            props.user.image_url ? { uri: props.user.image_url } : defaultImage
          }
        />
        <View style={styles.usernameWrapper}>
          <Text style={styles.usernameText}>@{props.user.username}</Text>
          <Text style={styles.fullNameText}>{props.user.fullname}</Text>
        </View>
      </Pressable>
      <ActivityBtn />
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
  userContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  usernameWrapper: {
    justifyContent: "center",
    marginLeft: wp("2%"),
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
