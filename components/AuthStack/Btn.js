import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Btn = (props) => (
  <TouchableOpacity
    onPress={props.handleOnPress}
    activeOpacity={0.8}
    style={[styles.btn, props.disabled && styles.disabled]}
    disabled={props.disabled}
  >
    <Text style={styles.btnText}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    elevation: 8,
    marginTop: hp("6%"),
    backgroundColor: "#0172C4",
    borderRadius: 100,
    width: "95%",
    paddingVertical: wp("4%"),
  },
  disabled: {
    opacity: 0.6,
  },
  btnText: {
    fontSize: wp("4.5%"),
    color: "#fff",
    alignSelf: "center",
    fontFamily: "AvenirNextDemiBold",
  },
});

export default Btn;
