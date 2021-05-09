import React, { useState, useRef } from "react";
import { StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.4}
            style={[styles.btn, { left: 0 }]}
          >
            <Ionicons name="ios-close" size={wp("9%")} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
              );
            }}
            activeOpacity={0.4}
            style={[styles.btn, { right: null, left: null }]}
          >
            <Ionicons name={flashIconName} size={wp("9%")} color="#FFF" />
          </TouchableOpacity>

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
    marginHorizontal: wp("5%"),
    marginVertical: hp("5%"),
  },
  CaptureBtnOuter: {
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "rgba(250,250,250,.95)",
    width: wp("20%") + 10,
    height: wp("20%") + 10,

    borderRadius: 100,
  },

  CaptureBtn: {
    width: wp("20%"),
    height: wp("20%"),
    borderRadius: 100,
    backgroundColor: "rgba(250,250,250,.5)",
  },

  btn: {
    width: wp("15%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

export default connect(null, { changeImage })(RenderCamera);
