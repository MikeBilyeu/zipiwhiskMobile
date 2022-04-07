import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFeedRecipes } from "../../redux/actions/feed";
import { selectRecipes } from "../../redux/reducers/feedReducer";
import Header from "./Header";
import RecipeScroll from "../RecipeScreen/RecipeScroll";

const HomeScreen = (props) => {
  useEffect(() => {
    props.getFeedRecipes();
  }, []);

  return (
    <RecipeScroll data={props.recipes} handleLoadMore={props.getFeedRecipes}>
      <Header />
    </RecipeScroll>
  );
};

const mapStateToProps = (state) => ({
  recipes: selectRecipes(state),
});

export default connect(mapStateToProps, { getFeedRecipes })(HomeScreen);
