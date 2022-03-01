import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AuthScreenWrapper from "./AuthScreenWrapper";
import NavBtn from "./NavBtn";

const VerifyEmail = (props) => {
  return (
    <AuthScreenWrapper headerText="Verify Email">
      <Text
        style={styles.text}
      >{`We sent you a verification link to ${props.user.email}`}</Text>
      <NavBtn
        text="Go Back"
        handleOnPress={() => props.navigation.navigate("Login")}
      />
    </AuthScreenWrapper>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: wp("3.5%"),
    textAlign: "center",
    marginBottom: wp("10%"),
    color: "#313131",
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(VerifyEmail);
