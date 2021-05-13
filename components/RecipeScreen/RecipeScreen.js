import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, View, ImageBackground, Animated } from "react-native";
import { Video } from "expo-av";
import { useKeepAwake } from "expo-keep-awake";

import Recipe from "./Recipe";

const RecipeScreen = ({
  route: {
    params: { data },
  },
}) => {
  useKeepAwake();
  const yValue = useRef(new Animated.Value(0)).current;

  let scaleInterpolate = yValue.interpolate({
    inputRange: [-201, -200, 0, 1],
    outputRange: [1.1, 1.15, 1, 1],
  });

  let opacityInterpolate = yValue.interpolate({
    inputRange: [-200, 0],
    outputRange: [0.8, 1],
  });

  const animatedScaleStyle = {
    transform: [{ scale: scaleInterpolate }],
    opacity: opacityInterpolate,
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {data.media_type === "video" ? (
        <Animated.View style={[styles.full, animatedScaleStyle]}>
          <Video
            source={{ uri: data.media_url }}
            style={styles.full}
            resizeMode="cover"
            isLooping
            shouldPlay
          />
        </Animated.View>
      ) : (
        <Animated.View style={[styles.full, animatedScaleStyle]}>
          <ImageBackground
            source={{ uri: data.media_url }}
            style={styles.full}
          />
        </Animated.View>
      )}

      <Recipe data={data} yValue={yValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  full: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default RecipeScreen;
