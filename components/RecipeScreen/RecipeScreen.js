import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import Header from "./Header";
import Footer from "./Footer";
import Recipe from "./Recipe";

const Data = {
  id: 49802390484,
  numLikes: 1500,
  title: "Peanut Butter Banana Smoothie",
  user: { image: "../../assets/userImage.png", username: "zipiwhisk" },
  recipeImage: {
    uri:
      "https://res.cloudinary.com/mikebilyeuimg/image/upload/c_scale,h_1500,q_auto:good/v1603140916/Recipes/lp4ypoiaoqkvvzkp7qk5.jpg",
  },
  recipeYield: 4,
  ingredientList: [
    {
      amount: "¼ cup",
      ingredient: "All-purpose flour",
      image: {
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmaF1M32DN3r7ciBu7pGxbv_jGrBq-6vlfc8F_JZlyJY8lfcFK59_LaCp0Ac_p52crRxruIi5&usqp=CAc",
      },
    },
    {
      amount: "1 Tbsp + 2 tsp",
      ingredient: "Vegatable oil ",
      image: {
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WIIweap2Y7yXbnNS8qTVs5kI_HRDX9WlpzYTy8M12YBFwR20vfVL2zpRwc4&usqp=CAc",
      },
    },
    {
      amount: "1 cup",
      ingredient: "Red wine",
      image: {
        uri: "https://images.heb.com/is/image/HEBGrocery/000538201",
      },
    },
  ],
  instructions: [
    `Combine the flour and pepper in a bowl, add the beef and toss to coat well.`,
    `Heat 3 teaspoons of the oil in a large pot. Add the beef a few pieces at a time; do not overcrowd. Cook, turning the pieces until beef is browned on all sides, about 5 minutes per batch; add more oil as needed between batches`,
    `Remove the beef from the pot and add the vinegar and wine. Cook over medium-high heat, scraping the pan with a wooden spoon to loosen any browned bits. Add the beef, beef broth and bay leaves. Bring to a boil, then reduce to a slow simmer.`,
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
};

function RecipeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={Data.recipeImage} style={styles.image}>
        <Header />
        <Footer numLikes={Data.numLikes} numComments={Data.comments.length} />
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
