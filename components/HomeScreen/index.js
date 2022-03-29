import React from "react";

import data from "../../data";
import Header from "./Header";
import RecipeScroll from "../RecipeScreen/RecipeScroll";

const HomeScreen = () => (
  <RecipeScroll data={data}>
    <Header />
  </RecipeScroll>
);

export default HomeScreen;
