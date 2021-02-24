import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FollowUser = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.4}
        style={styles.backBtn}
      >
        <Image
          source={require("../../../assets/arrow.png")}
          style={{ width: 20, height: 20, transform: [{ rotate: "90deg" }] }}
        />
      </TouchableOpacity>
      <Text style={styles.username}>@{data.user.username}</Text>
      <TouchableOpacity style={styles.FollowBtn}>
        <Text style={styles.FollowBtnText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  backBtn: {
    width: 75,
  },
  username: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: 16,
    textAlign: "center",
    color: "#313131",
  },
  FollowBtnText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: 16,
    color: "#0172C4",
    width: 75,
    textAlign: "right",
  },
});

export default FollowUser;

const data = {
  user: {
    id: 480348487,
    username: "mr_smith512",
    fullName: "Bob Smith",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    email: "mikebilyeu500@gmail.com",
    recipeUnit: "US",
    restriction: null,
  },
};
