import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ScreenHeader from "../ScreenHeader";
import Input from "../Input";
import UserImageBtn from "../UserImageBtn";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  usernameChange,
  fullnameChange,
  editProfile,
} from "../../redux/actions/userForm";
import { logout } from "../../redux/actions/auth";

const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Settings"
        subTitle="Profile"
        handleSavePress={() => props.editProfile(props.navigation.goBack)}
        isLoading={props.userForm.isLoading}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <UserImageBtn
              uri={props.userForm.image_url}
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
            value={props.userForm.username}
            handleChange={props.usernameChange}
            placeholder="Username"
            textContentType="username"
            iconName="person"
            autoCapitalize="none"
            error={props.userForm.usernameError}
          />
          <Input
            value={props.userForm.fullname}
            handleChange={props.fullnameChange}
            placeholder="Full Name"
            textContentType="name"
            iconName="document-text"
          />
        </View>
      </TouchableWithoutFeedback>
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
  inner: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: hp("1%"),
    paddingHorizontal: wp("2%"),
  },
  emailWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: hp("2%"),
    height: hp("12%"),
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
    width: wp("35%"),
  },
  logoutBtnText: {
    color: "#0172C4",
    fontSize: 16,
    fontFamily: "AvenirNextDemiBold",
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  userForm: state.userForm,
  user: state.user,
});

const mapDispatchToProps = {
  logout,
  usernameChange,
  fullnameChange,
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
