import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Video } from "expo-av";
import { useKeepAwake } from "expo-keep-awake";

import Recipe from "./Recipe";

const RecipeScreen = ({
  route: {
    params: { data },
  },
}) => {
  useKeepAwake();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {data.recipeVideo ? (
        <Video
          source={{ uri: data.recipeVideo }}
          style={styles.video}
          resizeMode="cover"
          isLooping
          shouldPlay
        />
      ) : (
        <ImageBackground
          source={{ uri: data.recipeImage }}
          style={styles.image}
        />
      )}

      <Recipe data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    position: "relative",
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default RecipeScreen;
