import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  StatusBar,
  Text,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import {
  imageChange,
  videoChange,
  mediaTypeChange,
} from "../../redux/actions/recipeForm";

const RenderCamera = (props) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [isRecording, setIsRecording] = useState(false);
  useEffect(() => {}, [isRecording]);
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
      if (result.type == "image") {
        props.imageChange({ image_url: result.uri });
      }
      if (result.type == "video") {
        props.videoChange({ video_urls: [result.uri] });
      }
    }
  };

  const handelOnPress = async () => {
    if (cameraRef) {
      if (props.recipeForm.media_type === "image") {
        let photo = await cameraRef.current.takePictureAsync();
        props.imageChange({
          image_url: photo.uri,
        });
      } else {
        if (isRecording) {
          cameraRef.current.stopRecording();
          setIsRecording(false);
        } else {
          setIsRecording(true);
          let video = await cameraRef.current.recordAsync();
          props.videoChange({
            video_urls: [...props.recipeForm.video_urls, video.uri],
          });
        }
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        flashMode={flash}
      >
        <StatusBar hidden />
      </Camera>
      <View style={styles.buttonContainer}>
        {!isRecording && (
          <>
            <Pressable
              onPress={() => navigation.goBack()}
              hitSlop={25}
              style={({ pressed }) => [
                styles.btn,
                { left: 0, opacity: pressed ? 0.5 : 1 },
              ]}
            >
              <Ionicons name="chevron-back" size={wp("6.5%")} color="#FFF" />
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
              style={({ pressed }) => [styles.btn, { right: null, left: null }]}
            >
              <Ionicons name={flashIconName} size={wp("6.5%")} color="#FFF" />
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
                { right: 0, top: 0, opacity: pressed ? 0.5 : 1 },
              ]}
            >
              <Ionicons
                name="camera-reverse-outline"
                size={wp("6.5%")}
                color="#FFF"
              />
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

            {props.recipeForm.video_urls[0] ? (
              <Pressable
                style={({ pressed }) => [
                  styles.previewBtn,
                  { opacity: pressed ? 0.5 : 1, right: 0, bottom: 0 },
                ]}
                onPress={() => props.setRenderPreview(true)}
                hitSlop={25}
              >
                <Text style={styles.previewBtnText}>Preview</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={() =>
                  props.mediaTypeChange(
                    props.recipeForm.media_type == "image" ? "video" : "image"
                  )
                }
                hitSlop={25}
                style={({ pressed }) => [styles.btn, { right: 0, bottom: 0 }]}
              >
                <Ionicons
                  name={
                    props.recipeForm.media_type === "image"
                      ? "camera"
                      : "videocam"
                  }
                  size={wp("6.5%")}
                  color="#fff"
                />
                <Text
                  style={{
                    color: "white",
                    fontFamily: "AvenirNextDemiBold",
                    fontSize: wp("3.5%"),
                  }}
                >
                  {props.recipeForm.media_type[0].toUpperCase() +
                    props.recipeForm.media_type.substring(1)}
                </Text>
              </Pressable>
            )}
          </>
        )}

        <Pressable
          style={({ pressed }) => [
            styles.CaptureBtnOuter,
            {
              opacity:
                pressed && props.recipeForm.media_type === "image" ? 0.5 : 1,
              borderColor: isRecording ? "#FF0000" : "rgba(250,250,250,.95)",
            },
          ]}
          hitSlop={15}
          onPressIn={handelOnPress}
        >
          <View
            style={[
              styles.CaptureBtn,
              props.recipeForm.media_type == "video" && styles.CaptureBtnVideo,
            ]}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
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
    marginBottom: hp("9%"),
  },
  CaptureBtn: {
    width: wp("19%"),
    height: wp("19%"),
    borderRadius: 100,
    backgroundColor: "rgba(250,250,250,.5)",
  },
  CaptureBtnVideo: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 100,
    backgroundColor: "#FF0000",
  },
  btn: {
    width: wp("15%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  previewBtn: {
    position: "absolute",
    height: wp("10%"),
    width: wp("30%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    alignSelf: "flex-end",
    backgroundColor: "rgba(0,0,0,.9)",
    marginRight: wp("3%"),
    marginBottom: hp("2%"),
  },
  previewBtnText: {
    color: "white",
    fontSize: wp("4%"),
    fontFamily: "AvenirNextDemiBold",
  },
});

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

export default connect(mapStateToProps, {
  imageChange,
  videoChange,
  mediaTypeChange,
})(RenderCamera);
