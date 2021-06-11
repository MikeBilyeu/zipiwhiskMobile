import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ScreenHeader from "../ScreenHeader";
import ImageAndLogout from "./ImageAndLogout";
import Input from "../Input";

import {
  getUserState,
  usernameChange,
  fullnameChange,
  imageUrlChange,
  editProfile,
} from "../../redux/actions/userForm";

import Modal from "../Modal";
import ModalBtn from "../Modal/ModalBtn";
import RenderCamera from "./RenderCamera";

const SettingsScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [renderCamera, setRenderCamera] = useState(false);

  useEffect(() => {
    props.getUserState();
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      props.imageUrlChange(result.uri);
      setModalVisible(false);
    }
  };
  return renderCamera ? (
    <RenderCamera
      setRenderCamera={setRenderCamera}
      setModalVisible={setModalVisible}
    />
  ) : (
    <View style={styles.container}>
      <ScreenHeader
        title="Settings"
        subTitle="Profile"
        handleSavePress={() => props.editProfile(props.navigation.goBack)}
        isLoading={props.userForm.isLoading}
      />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText="Change Profile Image"
      >
        <ModalBtn
          text="Remove Current Image"
          handleOnPress={() => {
            props.imageUrlChange(null);
            setModalVisible(false);
          }}
        />
        <ModalBtn
          text="Take Photo"
          handleOnPress={() => setRenderCamera(true)}
        />
        <ModalBtn text="Choose From Library" handleOnPress={pickImage} />
      </Modal>

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
  imageUrlChange,
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
