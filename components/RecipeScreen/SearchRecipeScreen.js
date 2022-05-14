import React from "react";
import { connect } from "react-redux";
import Header from "../RecipeScroll/Header";
import RecipeScroll from "../RecipeScroll";

import {
  selectRecipes,
  selectcategoryFilter,
} from "../../redux/reducers/searchReducer";

const SearchRecipeScreen = (props) => {
  return (
    <RecipeScroll data={props.recipes} initalScroll={props.route.params.index}>
      <Header title="Explore" subTitle={props.category || null} />
    </RecipeScroll>
  );
};

const mapStateToProps = (state) => ({
  recipes: selectRecipes(state),
  category: selectcategoryFilter(state),
});
export default connect(mapStateToProps)(SearchRecipeScreen);
