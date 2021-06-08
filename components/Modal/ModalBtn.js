import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ModalBtn = (props) => (
  <TouchableOpacity
    style={styles.btn}
    onPress={() => {
      props.handleOnPress();
      props.setModalVisible(false);
    }}
  >
    <Text style={styles.btnText}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    paddingVertical: hp("2.5%"),
    width: "100%",
    elevation: 2,
  },
  btnText: {
    fontSize: wp("4%"),
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
  },
});

export default ModalBtn;
