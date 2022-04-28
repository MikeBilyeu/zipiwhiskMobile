import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFeedRecipes, refreshFeedRecipes } from "../../redux/actions/feed";
import {
  selectRecipes,
  selectIsRefreshing,
} from "../../redux/reducers/feedReducer";
import Header from "./Header";
import RecipeScroll from "../RecipeScroll";

const HomeScreen = (props) => {
  useEffect(() => {
    props.getFeedRecipes();
  }, []);

  return (
    props.recipes && (
      <RecipeScroll
        data={props.recipes}
        handleLoadMore={props.getFeedRecipes}
        handleRefresh={props.refreshFeedRecipes}
        refreshing={props.refreshing}
      >
        <Header />
      </RecipeScroll>
    )
  );
};

const mapStateToProps = (state) => ({
  recipes: selectRecipes(state),
  refreshing: selectIsRefreshing(state),
});

export default connect(mapStateToProps, { getFeedRecipes, refreshFeedRecipes })(
  HomeScreen
);
