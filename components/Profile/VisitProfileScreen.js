import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { getUserProfile } from "../../redux/actions/userProfile";

import VisitProfileHeader from "./Header/VisitProfileHeader";
import SearchDropDown from "../SearchDropDown";
import RecipeScroll from "./RecipeScroll";

const VisitProfileScreen = (props) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggleDropDown = () => setDropDownOpen(!dropDownOpen);
  const { id } = props.route.params;

  useEffect(() => {
    props.getUserProfile(id);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <VisitProfileHeader
        toggleDropDown={toggleDropDown}
        dropDownOpen={dropDownOpen}
      />
      <SearchDropDown
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
        height={wp("66%")}
        renderItemType="small"
      />
      <RecipeScroll paddingTop={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default connect(null, { getUserProfile })(VisitProfileScreen);
