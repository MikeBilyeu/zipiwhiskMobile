import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

import ScreenHeader from "../ScreenHeader";
import Input from "../Input";
import UserImageBtn from "../UserImageBtn";
import { TouchableOpacity } from "react-native-gesture-handler";

import { logout } from "../../redux/actions/auth";

const SettingsScreen = (props) => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <View style={styles.container}>
      <ScreenHeader title="Settings" subTitle="Profile" />
      <View style={styles.wrapper}>
        <View style={{ flexDirection: "row" }}>
          <UserImageBtn
            handleImagePress={null}
            uri={"https://randomuser.me/api/portraits/men/32.jpg"}
            styles={{ width: 85, height: 85 }}
          />
          <View style={styles.emailWrapper}>
            <Text style={styles.email}>mrsmith28@gmail.com</Text>
            <TouchableOpacity style={styles.logoutBtn} onPress={props.logout}>
              <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Input
          value={username}
          handleChange={setUsername}
          placeholder="Username"
          textContentType="username"
          iconName="person"
        />
        <Input
          value={fullName}
          handleChange={setFullName}
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

export default connect(null, { logout })(SettingsScreen);
