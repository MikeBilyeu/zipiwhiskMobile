import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import { connect } from "react-redux";

import RenderCamera from "./RenderCamera";
import RenderPreview from "./RenderPreview";

const CameraScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);

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

  return props.recipeForm.imagePath ? <RenderPreview /> : <RenderCamera />;
};

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

export default connect(mapStateToProps)(CameraScreen);
