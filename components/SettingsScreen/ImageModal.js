import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";

import { imageUrlChange } from "../../redux/actions/userForm";
import Modal from "../Modal";
import ModalBtn from "../Modal/ModalBtn";

const ImageModal = (props) => {
  useEffect(() => {
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
      allowsEditing: true,
      quality: 0,
      aspect: [1, 1],
    });

    if (!result.cancelled) {
      props.imageUrlChange(result.uri);
      props.setModalVisible(false);
    }
  };
  return (
    <Modal
      modalVisible={props.modalVisible}
      setModalVisible={props.setModalVisible}
      modalText="Change Profile Image"
    >
      <ModalBtn
        text="Remove Current Image"
        handleOnPress={() => {
          props.imageUrlChange(null);
          props.setModalVisible(false);
        }}
      />
      <ModalBtn
        text="Take Photo"
        handleOnPress={() => props.setRenderCamera(true)}
      />
      <ModalBtn text="Choose From Library" handleOnPress={pickImage} />
    </Modal>
  );
};

const mapDispatchToProps = {
  imageUrlChange,
};

export default connect(null, mapDispatchToProps)(ImageModal);
