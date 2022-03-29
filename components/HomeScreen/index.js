import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFeedRecipes } from "../../redux/actions/feed";
import Header from "./Header";
import RecipeScroll from "../RecipeScreen/RecipeScroll";

const HomeScreen = (props) => {
  useEffect(() => {
    props.getFeedRecipes();
  }, []);

  return (
    <RecipeScroll
      data={props.feedRecipes.recipes}
      handleLoadMore={props.getFeedRecipes}
    >
      <Header />
    </RecipeScroll>
  );
};

const mapStateToProps = (state) => ({
  feedRecipes: state.feedRecipes,
});

export default connect(mapStateToProps, { getFeedRecipes })(HomeScreen);
