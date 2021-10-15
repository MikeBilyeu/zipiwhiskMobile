import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useKeepAwake } from "expo-keep-awake";

import RecipeCard from "../RecipeCard";
import RecipeScroll from "./RecipeScroll";
import Header from "./Header";

const RecipeScreen = ({
  route: {
    params: { data },
  },
}) => {
  useKeepAwake();
  const [toggleRecipe, setToggleRecipe] = useState(false);
  return (
    <>
      <StatusBar style="light" />
      {!toggleRecipe && <Header />}
      <RecipeCard
        data={data}
        handleSinglePress={() => setToggleRecipe(!toggleRecipe)}
        toggleRecipe={toggleRecipe}
      />
      {toggleRecipe && (
        <RecipeScroll data={data} setToggleRecipe={setToggleRecipe} />
      )}
    </>
  );
};

export default RecipeScreen;
