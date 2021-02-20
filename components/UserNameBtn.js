import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserNameBtn = ({ username, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.userContainer}
      onPress={() => navigation.navigate("VisitProfile")}
    >
      <Image style={styles.userImage} source={{ uri: image }} />
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
});

export default UserNameBtn;
