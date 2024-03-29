import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import moment from "moment";

const Time = ({ time }) => (
  <Text style={styles.time}>{moment(time).fromNow()}</Text>
);
const styles = StyleSheet.create({
  time: {
    color: "#B7B7B7",
    fontSize: wp("3%"),
    fontFamily: "AvenirNextRegular",
    marginTop: wp("1%"),
    position: "absolute",
    top: wp("17%"),
  },
});

export default Time;
