import React, { useState, useRef } from "react";
import { StyleSheet, View, Pressable, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { changeMedia } from "../../redux/actions/recipeForm";

const RenderCamera = (props) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const flashIconName =
    flash === Camera.Constants.FlashMode.off
      ? "ios-flash-off-outline"
      : "ios-flash";
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      props.changeMedia({ media_url: result.uri, media_type: result.type });
    }
  };

  return (
    <Camera ref={cameraRef} style={styles.camera} type={type} flashMode={flash}>
      <StatusBar hidden />
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          hitSlop={25}
          style={({ pressed }) => [
            styles.btn,
            { left: 0, opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <Ionicons name="ios-close" size={wp("6.5%")} color="#FFF" />
        </Pressable>

        <Pressable
          onPress={() => {
            setFlash(
              flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
            );
          }}
          hitSlop={25}
          style={({ pressed }) => [
            styles.btn,
            { right: null, left: null, opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <Ionicons name={flashIconName} size={wp("6.5%")} color="#FFF" />
        </Pressable>

        <Pressable
          onPress={pickImage}
          hitSlop={25}
          style={({ pressed }) => [
            styles.btn,
            { left: 0, bottom: 0, opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <Ionicons name="library" size={wp("6.5%")} color="#FFF" />
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.CaptureBtnOuter,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          hitSlop={15}
          onPress={async () => {
            if (cameraRef) {
              let photo = await cameraRef.current.takePictureAsync();
              props.changeMedia({
                media_url: photo.uri,
                media_type: "image",
              });
            }
          }}
        >
          <View style={styles.CaptureBtn} />
        </Pressable>
        <Pressable
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
          hitSlop={25}
          style={({ pressed }) => [
            styles.btn,
            { right: 0, bottom: 0, opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <Ionicons
            name="camera-reverse-outline"
            size={wp("6.5%")}
            color="#FFF"
          />
        </Pressable>
      </View>
    </Camera>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: wp("3%"),
    marginVertical: hp("3%"),
  },
  CaptureBtnOuter: {
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "rgba(250,250,250,.95)",
    width: wp("19%") + 10,
    height: wp("19%") + 10,
    borderRadius: 100,
    marginBottom: hp("5%"),
  },

  CaptureBtn: {
    width: wp("19%"),
    height: wp("19%"),
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

export default connect(null, { changeMedia })(RenderCamera);
