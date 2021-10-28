import React from "react";

import data from "../../data";
import Header from "./Header";
import RecipeScroll from "../RecipeScreen/RecipeScroll";

const Home = () => (
  <RecipeScroll data={data}>
    <Header />
  </RecipeScroll>
);

export default Home;
