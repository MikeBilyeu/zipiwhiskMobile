import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";

import RenderCamera from "./RenderCamera";
import RenderPreview from "./RenderPreview";

const CameraScreen = (props) => {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [hasLibraryPermission, setLibraryPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestPermissionsAsync();
      setCameraPermission(cameraStatus === "granted");

      if (Platform.OS !== "web") {
        const { status: libraryStatus } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        setLibraryPermission(libraryStatus === "granted");
      }
    })();
  }, []);

  if (hasCameraPermission === null || hasLibraryPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasLibraryPermission === false) {
    return <Text>No access to camera or photos</Text>;
  }

  return props.recipeForm.media_url &&
    props.recipeForm.media_type == "image" ? (
    <RenderPreview />
  ) : (
    <RenderCamera />
  );
};

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

export default connect(mapStateToProps)(CameraScreen);
