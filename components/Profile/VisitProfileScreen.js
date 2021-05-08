import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import VisitProfileHeader from "./Header/VisitProfileHeader";
import SearchDropDown from "../SearchDropDown";
import RecipeScroll from "./RecipeScroll";

function VisitProfileScreen() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggleDropDown = () => setDropDownOpen(!dropDownOpen);

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
        height={wp("68%")}
        renderItemType="small"
      />
      <RecipeScroll paddingTop={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default VisitProfileScreen;
