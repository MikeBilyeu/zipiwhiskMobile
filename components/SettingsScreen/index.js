import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Header from "./Header";
import ImageAndLogout from "./ImageAndLogout";
import Input from "../Input";
import SelectInput from "../SelectInput";
import RenderCamera from "./RenderCamera";
import ImageModal from "./ImageModal";

import {
  getUserState,
  usernameChange,
  fullnameChange,
  restrictionChange,
  imageUrlChange,
  editProfile,
} from "../../redux/actions/userForm";

const restrictions = [
  { label: "Omnivore", value: "omnivore" },
  { label: "Vegatarian", value: "vegatarian" },
  { label: "Vegan", value: "vegan" },
  { label: "Gluten-free", value: "gluten-free" },
];

const SettingsScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [renderCamera, setRenderCamera] = useState(false);

  useEffect(() => {
    props.getUserState();
  }, []);

  return renderCamera ? (
    <RenderCamera
      setRenderCamera={setRenderCamera}
      setModalVisible={setModalVisible}
    />
  ) : (
    <View style={styles.container}>
      <Header
        title="Settings"
        subTitle="Profile"
        handleSavePress={() => props.editProfile(props.navigation.goBack)}
        isLoading={props.userForm.isLoading}
      />

      <ImageModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setRenderCamera={setRenderCamera}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <ImageAndLogout setModalVisible={setModalVisible} />
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
          <SelectInput
            value={props.userForm.restriction}
            items={restrictions}
            handleChange={props.restrictionChange}
            iconName="restaurant"
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
});

const mapStateToProps = (state) => ({
  userForm: state.userForm,
});

const mapDispatchToProps = {
  getUserState,
  usernameChange,
  fullnameChange,
  restrictionChange,
  imageUrlChange,
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
