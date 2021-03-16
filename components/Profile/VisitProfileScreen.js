import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

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
        height={255}
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
