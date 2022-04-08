import React from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  selectId,
  selectCategory,
  selectRecipeDataIsLoading,
  selectRecipes,
} from "../../redux/reducers/userReducer";

import ProfileHeader from "./Header/ProfileHeader";
import RecipeScroll from "./RecipeScroll";

const ProfileScreen = (props) => {
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <ProfileHeader />
      <RecipeScroll
        paddingTop={hp("26%")}
        category={props.category}
        isLoading={props.isLoading}
        recipes={props.recipes}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

const mapStateToProps = (state) => ({
  userId: selectId(state),
  category: selectCategory(state),
  isLoading: selectRecipeDataIsLoading(state),
  recipes: selectRecipes(state),
});

export default connect(mapStateToProps)(ProfileScreen);
