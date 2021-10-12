import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";

import { getUserProfile } from "../../redux/actions/userProfile";

import VisitProfileHeader from "./Header/VisitProfileHeader";
import RecipeScroll from "./RecipeScroll";

const VisitProfileScreen = (props) => {
  const { id } = props.route.params;

  useEffect(() => {
    props.getUserProfile(id);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <VisitProfileHeader />
      <RecipeScroll paddingTop={hp("14%")} />
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
