import React, { useState, useRef } from "react";
import { StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";
import { Camera } from "expo-camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { changeImage } from "../../redux/actions/recipeForm";

const RenderCamera = (props) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const flashIconName =
    flash === Camera.Constants.FlashMode.off
      ? "ios-flash-off-outline"
      : "ios-flash";
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        flashMode={flash}
      >
        <View style={styles.buttonContainer}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="ios-close"
            size={30}
            color="#FFF"
            style={[styles.closeBtn, { left: 0 }]}
          />
          <Ionicons
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              );
            }}
            name={flashIconName}
            size={30}
            color="#FFF"
            style={[styles.closeBtn, { right: null, left: null }]}
          />

          <TouchableOpacity
            style={styles.CaptureBtnOuter}
            onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.current.takePictureAsync();
                props.changeImage(photo.uri);
              }
            }}
          >
            <View style={styles.CaptureBtn} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 40,
  },
  CaptureBtnOuter: {
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "rgba(250,250,250,.95)",
    width: 85,
    height: 85,
    borderRadius: 85,
  },
  CaptureBtn: {
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: "rgba(250,250,250,.5)",
  },
  closeBtn: {
    position: "absolute",
  },
});

export default connect(null, { changeImage })(RenderCamera);
