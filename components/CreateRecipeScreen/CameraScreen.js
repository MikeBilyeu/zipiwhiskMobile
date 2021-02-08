import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Camera, takePictureAsync } from "expo-camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const RenderCamera = ({ setImagePath }) => {
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

          <Ionicons
            onPress={() => navigation.goBack()}
            name="ios-close"
            size={30}
            color="#FFF"
            style={[styles.closeBtn, { right: 0, left: null }]}
          />
          <TouchableOpacity
            style={styles.CaptureBtnOuter}
            onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.current.takePictureAsync();
                setImagePath(photo.uri);
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

const RenderPreview = ({ imagePath, setImagePath }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={{ uri: imagePath }} style={styles.imagePreview}>
        <View style={styles.buttonContainer}>
          <Ionicons
            onPress={() => setImagePath(null)}
            name="ios-close"
            size={30}
            color="#FFF"
            style={[styles.closeBtn, { left: 0 }]}
          />
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() =>
              navigation.navigate("CreateRecipe", { imageUri: imagePath })
            }
          >
            <Text style={styles.nextBtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const CameraScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  let imageUri = props.route.params?.imageUri;
  const [imagePath, setImagePath] = useState(imageUri);
  const navigation = useNavigation();
  useEffect(() => {
    setImagePath(imageUri);
  }, [props.route.params]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return imagePath ? (
    <RenderPreview imagePath={imagePath} setImagePath={setImagePath} />
  ) : (
    <RenderCamera setImagePath={setImagePath} />
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
  imagePreview: {
    flex: 1,
    width: "100%",
  },
  closeBtn: {
    position: "absolute",
  },
  nextBtn: {
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    alignSelf: "flex-end",
    backgroundColor: "rgba(226,226,226,.8)",
    marginBottom: 20,
  },
  nextBtnText: {
    color: "white",
    fontSize: 20,
    fontFamily: "AvenirNextDemiBold",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

export default CameraScreen;
