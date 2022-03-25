import React from "react";
import Header from "./Header";
import data from "../../data";
import RecipeScroll from "./RecipeScroll";

const RecipeScreen = (props) => {
  console.log("RECIPE ROUTE: ", props.route.params.isLoading);
  return (
    <RecipeScroll
      data={props.route.params.data}
      initalScroll={props.route.params.index}
    >
      <Header
        title={props.route.params.title}
        subTitle={props.route.params.subTitle}
      />
    </RecipeScroll>
  );
};

export default RecipeScreen;
