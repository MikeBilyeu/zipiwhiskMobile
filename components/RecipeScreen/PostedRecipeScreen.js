import React from "react";
import { connect } from "react-redux";
import Header from "../RecipeScroll/Header";
import RecipeScroll from "../RecipeScroll";

import { selectPosts } from "../../redux/reducers/userReducer";

const SavedRecipeScreen = (props) => {
  return (
    <RecipeScroll data={props.posts} initalScroll={props.route.params.index}>
      <Header title="Posted Recipes" />
    </RecipeScroll>
  );
};

const mapStateToProps = (state) => ({
  posts: selectPosts(state),
});
export default connect(mapStateToProps)(SavedRecipeScreen);
