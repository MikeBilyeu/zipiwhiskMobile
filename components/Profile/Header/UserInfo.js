import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import defaultImage from "../../../assets/userImage.png";

const UserInfo = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.userInfoContainer}>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.backBtn,
        ]}
        hitSlop={20}
        onPress={() => {
          route.name === "Profile"
            ? navigation.navigate("Home", { screen: "Home" })
            : navigation.goBack();
        }}
      >
        <Ionicons name="chevron-back" size={wp("6.5%")} color="#313131" />
      </Pressable>
      <Pressable
        onPress={props.handleImagePress}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
            marginRight: !props.children && wp("31%"),
          },
          styles.userContainer,
        ]}
        hitSlop={{ top: 10, bottom: 10 }}
      >
        <Image
          style={{
            marginLeft: wp("4%"),
            borderRadius: wp("100%"),
            width: wp("11%"),
            height: wp("11%"),
            borderWidth: 1,
            borderColor: "#E2E2E2",
          }}
          source={props.imageUrl ? { uri: props.imageUrl } : defaultImage}
        />
        <View style={styles.usernameWrapper}>
          {props.fullname ? (
            <Text style={styles.fullNameText}>{props.fullname}</Text>
          ) : null}
          <Text style={styles.usernameText}>{props.username}</Text>
        </View>
      </Pressable>
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
    paddingVertical: hp("1%"),
  },
  backBtn: {
    height: wp("15%"),
    width: wp("15%"),
    alignItems: "center",
    justifyContent: "center",
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: wp("15%"),
    flex: 1,
  },
  usernameWrapper: {
    justifyContent: "center",
    marginLeft: wp("2%"),
  },
  fullNameText: {
    fontSize: wp("3.2%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#313131",
    marginBottom: wp(".75%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  usernameText: {
    fontSize: wp("3.2%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#B7B7B7",
  },
});

export default UserInfo;
