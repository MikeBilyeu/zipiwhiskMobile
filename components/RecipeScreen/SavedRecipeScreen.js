import React from "react";
import { connect } from "react-redux";
import Header from "../RecipeScroll/Header";
import RecipeScroll from "../RecipeScroll";

import { selectSaves, selectCategory } from "../../redux/reducers/userReducer";

const SavedRecipeScreen = (props) => {
  return (
    <RecipeScroll data={props.saves} initalScroll={props.route.params.index}>
      <Header title="Saved Recipes" subTitle={props.category || null} />
    </RecipeScroll>
  );
};

const mapStateToProps = (state) => ({
  saves: selectSaves(state),
  category: selectCategory(state),
});
export default connect(mapStateToProps)(SavedRecipeScreen);
