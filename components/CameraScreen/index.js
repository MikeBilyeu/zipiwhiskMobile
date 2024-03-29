import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";

import RenderCamera from "./RenderCamera";
import RenderPreview from "./RenderPreview";
import VideoEdit from "./VideoEdit";

const CameraScreen = (props) => {
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [hasLibraryPermission, setLibraryPermission] = useState(null);
  const [renderPreview, setRenderPreview] = useState(false);
  const [renderEdit, setRenderEdit] = useState(false);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
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

  return renderEdit ? (
    <VideoEdit setRenderEdit={setRenderEdit} />
  ) : props.recipeForm.image_url || renderPreview ? (
    <RenderPreview setRenderPreview={setRenderPreview} />
  ) : (
    <RenderCamera
      setRenderPreview={setRenderPreview}
      setRenderEdit={setRenderEdit}
    />
  );
};

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

export default connect(mapStateToProps)(CameraScreen);
