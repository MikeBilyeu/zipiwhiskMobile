import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { getUserProfile } from "../../redux/actions/userProfile";

import VisitProfileHeader from "./Header/VisitProfileHeader";
import RecipeScroll from "./RecipeScroll";

const VisitProfileScreen = (props) => {
  const { id } = props.route.params;

  useEffect(() => {
    props.getUserProfile(id);
  }, []);

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <VisitProfileHeader />
      <RecipeScroll paddingTop={hp("16%")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default connect(null, { getUserProfile })(VisitProfileScreen);
