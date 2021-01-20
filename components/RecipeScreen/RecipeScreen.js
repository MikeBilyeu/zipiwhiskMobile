import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import Header from "./Header";
import Footer from "./Footer";
import Recipe from "./Recipe";

const Data = {
  id: 49802390484,
  title: "Peanut Butter Banana Smoothie",
  user: { image: "../../assets/userImage.png", username: "zipiwhisk" },
  recipeImage: {
    uri:
      "https://res.cloudinary.com/mikebilyeuimg/image/upload/c_scale,h_1500,q_auto:good/v1603140916/Recipes/lp4ypoiaoqkvvzkp7qk5.jpg",
  },
  recipeYield: 4,
  ingredientList: [
    {
      totalAmount: [{ amount: "¼", unit: "cup" }],
      ingredient: "All-purpose flour",
    },
    {
      totalAmount: [
        { amount: "1", unit: "Tbsp" },
        { amount: "2", unit: "tsp" },
      ],
      ingredient: "Vegatable oil",
    },
    {
      totalAmount: [{ amount: "1", unit: "cup" }],
      ingredient: "Red wine",
    },
  ],
  instructions: [
    "Add the beef a few pieces at a time; don’t overcrowd. Cook, turning the pieces until beef is browned on all sides, about 5 minutes per batch; add more oil as needed between batches.",
  ],
  nutritionFacts: {
    calories: 275,
    protien: "8g",
    fats: "10g",
    carbs: "26g",
  },
  comments: [
    {
      id: 3240984,
      comment: "Nice",
      user_id: 324832904,
      recipe_id: 49802390484,
      parent_comment_id: null,
      created_at: "2021-01-20T00:16:57+00:00",
    },
    {
      id: 230483024,
      comment: "Love it!",
      user_id: 324832904,
      recipe_id: 49802390484,
      parent_comment_id: null,
      created_at: "2021-01-20T00:16:27+00:00",
    },
    {
      id: 230483024,
      comment: "Nice!",
      user_id: 2342890880,
      recipe_id: 49802390484,
      parent_comment_id: null,
      created_at: "2021-01-20T00:14:20+00:00",
    },
    {
      id: 230483024,
      comment: "Im making this ASAP.",
      user_id: 3242384932084032,
      recipe_id: 49802390484,
      parent_comment_id: null,
      created_at: "2021-01-20T00:13:57+00:00",
    },
  ],
  numLikes: 1500,
};

function RecipeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={Data.recipeImage} style={styles.image}>
        <Header />
        <Footer numLikes={Data.numLikes} numComments={Data.comments.length} />
        <Recipe title={Data.title} />
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
