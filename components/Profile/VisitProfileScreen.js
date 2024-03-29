import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  selectId,
  selectRecipeDataIsLoading,
  selectRecipes,
} from "../../redux/reducers/visitProfileReducer";

import { getVisitProfile } from "../../redux/actions/visitProfile";

import VisitProfileHeader from "./Header/VisitProfileHeader";
import RecipeScroll from "./RecipeScroll";

const VisitProfileScreen = (props) => {
  const { id } = props.route.params;

  useEffect(() => {
    props.getVisitProfile(id);
  }, []);

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <VisitProfileHeader />
      <RecipeScroll
        paddingTop={hp("16%")}
        userId={props.userId}
        isLoading={props.isLoading}
        recipes={props.recipes}
        screenTitle="Saved"
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
  isLoading: selectRecipeDataIsLoading(state),
  recipes: selectRecipes(state),
});

export default connect(mapStateToProps, { getVisitProfile })(
  VisitProfileScreen
);
