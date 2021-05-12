import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

import ScreenHeader from "../ScreenHeader";
import Input from "../Input";
import UserImageBtn from "../UserImageBtn";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  logout,
  usernameChange,
  fullnameChange,
} from "../../redux/actions/user";

const SettingsScreen = (props) => {
  const [fullName, setFullName] = useState("");

  return (
    <View style={styles.container}>
      <ScreenHeader title="Settings" subTitle="Profile" />
      <View style={styles.wrapper}>
        <View style={{ flexDirection: "row" }}>
          <UserImageBtn
            uri={props.user.image}
            styles={{ width: 85, height: 85 }}
          />
          <View style={styles.emailWrapper}>
            <Text style={styles.email}>{props.user.email}</Text>
            <TouchableOpacity style={styles.logoutBtn} onPress={props.logout}>
              <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Input
          value={props.user.username}
          handleChange={props.usernameChange}
          placeholder="Username"
          textContentType="username"
          iconName="person"
        />
        <Input
          value={props.user.fullname}
          handleChange={props.fullnameChange}
          placeholder="Full Name"
          textContentType="name"
          iconName="document-text"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF",
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingTop: 25,
    width: "100%",
    flex: 1,
  },
  emailWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  email: {
    color: "#464646",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
  },
  logoutBtn: {
    borderWidth: 1,
    borderColor: "#0172C4",
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 5,
    width: 150,
  },
  logoutBtnText: {
    color: "#0172C4",
    fontSize: 16,
    fontFamily: "AvenirNextDemiBold",
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = { logout, usernameChange, fullnameChange };

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
