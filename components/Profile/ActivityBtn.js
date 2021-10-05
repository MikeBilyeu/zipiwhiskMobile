import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const ActivityBtn = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Activity")}
      style={styles.btn}
    >
      <Ionicons
        name="chatbubble-ellipses-outline"
        size={wp("7%")}
        color="#fff"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: wp("12%"),
    height: wp("12%"),
    backgroundColor: "rgba(0,0,0,.65)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 10,
  },
  icon: {},
});

export default ActivityBtn;
