import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, View, ImageBackground, Animated } from "react-native";
import Data from "../data";

import Header from "./Header";
import Footer from "./Footer";
import Recipe from "./Recipe";

function RecipeScreen() {
  const offset = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={Data.recipeImage} style={styles.image}>
        <Header />
        <Footer numLikes={Data.numLikes} numComments={Data.numComments} />
        <Recipe animatedValue={offset} Data={Data} />
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
