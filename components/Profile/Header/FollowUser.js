import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const FollowUser = (props) => {
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
          style={{
            width: wp("5%"),
            height: wp("5%"),
            transform: [{ rotate: "90deg" }],
          }}
        />
      </TouchableOpacity>
      <Text style={styles.username}>@{props.username}</Text>
      <TouchableOpacity style={styles.FollowBtn}>
        <Text style={styles.FollowBtnText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("5%"),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: wp("12%"),
    backgroundColor: "#fff",
  },
  backBtn: {
    width: wp("20%"),
  },
  username: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4%"),
    textAlign: "center",
    color: "#313131",
  },
  FollowBtnText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4%"),
    color: "#0172C4",
    width: wp("20%"),
    textAlign: "right",
  },
});

export default FollowUser;
