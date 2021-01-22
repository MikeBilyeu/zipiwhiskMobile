import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground, Animated } from "react-native";
import Data from "../data";

import Header from "./Header";
import Footer from "./Footer";
import Recipe from "./Recipe";

function RecipeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={Data.recipeImage} style={styles.image}>
        <Recipe Data={Data} />
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
