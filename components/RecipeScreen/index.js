import React from "react";
import Header from "./Header";
import data from "../../data";
import RecipeScroll from "./RecipeScroll";

const RecipeScreen = (props) => {
  return (
    <RecipeScroll data={data} initalScroll={props.route.params.index}>
      <Header
        title={props.route.params.title}
        subTitle={props.route.params.subTitle}
      />
    </RecipeScroll>
  );
};

export default RecipeScreen;
