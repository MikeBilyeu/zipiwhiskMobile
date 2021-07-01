import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const UserNameBtn = ({ id, username, image_url }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.userContainer}
      onPress={() => navigation.push("VisitProfile", { id })}
    >
      <Image style={styles.userImage} source={{ uri: image_url }} />
      <Text style={styles.username}>{username}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  userImage: {
    height: wp("10%"),
    width: wp("10%"),
    marginRight: wp("1.5%"),
    marginLeft: 0,
    resizeMode: "cover",
    borderRadius: 100,
  },
  username: {
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4%"),
    lineHeight: wp("4%"),
  },
});

export default UserNameBtn;
