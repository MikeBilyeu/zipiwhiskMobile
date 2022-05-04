import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import UserNameBtn from "./UserNameBtn";
import Time from "./Time";

const Notification = (props) => {
  return (
    <>
      <View style={styles.wrapper}>
        <UserNameBtn
          username={props.data.user.username}
          image_url={props.data.user.image_url}
          name={props.data.user.name}
          id={props.data.user.id}
        />
        <Text style={[styles.text, props.textStyles]}>{props.text}</Text>
        {props.children}
      </View>
      <Time time={props.data.timestamp} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: wp("5%"),
    marginBottom: wp("5%"),
  },
  text: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.2%"),
    lineHeight: wp("4%"),
    paddingRight: wp("2.5%"),
    flex: 1,
    textAlign: "right",
  },
});

export default Notification;
