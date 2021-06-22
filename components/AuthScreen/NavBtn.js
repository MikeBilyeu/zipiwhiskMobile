import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const NavBtn = (props) => (
  <TouchableOpacity
    onPress={props.handleOnPress}
    activeOpacity={0.4}
    style={styles.btn}
    disabled={props.disabled}
  >
    <Text style={styles.btnText}>{props.text}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: wp("10%"),
    paddingVertical: wp("2%"),
  },
  btnText: {
    color: "#0172C4",
    fontSize: wp("4.5%"),
    fontFamily: "AvenirNextRegular",
  },
});

export default NavBtn;
