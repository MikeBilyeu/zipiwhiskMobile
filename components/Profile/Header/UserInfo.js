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
            marginRight: !props.children && wp("15%"),
          },
          styles.userContainer,
        ]}
        hitSlop={25}
      >
        <Image
          style={{
            borderRadius: 50,
            width: wp("10%"),
            height: wp("10%"),
          }}
          source={props.imageUrl ? { uri: props.imageUrl } : defaultImage}
        />
        <View style={styles.usernameWrapper}>
          <Text style={styles.usernameText}>{props.username}</Text>
          {props.fullname ? (
            <Text style={styles.fullNameText}>{props.fullname}</Text>
          ) : null}
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
    marginRight: wp("11%"),
  },
  usernameText: {
    textAlign: "center",
    fontSize: wp("5%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#313131",
    marginBottom: wp(".5%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  fullNameText: {
    textAlign: "center",
    fontSize: wp("3.25%"),
    fontFamily: "AvenirNextRegular",
    color: "#313131",
  },
});

export default UserInfo;
