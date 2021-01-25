import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground, Animated } from "react-native";
import { useKeepAwake } from "expo-keep-awake";

import Header from "./Header";
import Footer from "./Footer";
import Recipe from "./Recipe";

function RecipeScreen({
  route: {
    params: { data },
  },
}) {
  useKeepAwake();
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={{ uri: data.recipeImage }} style={styles.image}>
        <Recipe data={data} />
      </ImageBackground>
    </View>
  );
}

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
});

export default RecipeScreen;
