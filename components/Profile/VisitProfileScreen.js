import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import VisitProfileHeader from "./Header/VisitProfileHeader";
import SearchDropDown from "../SearchDropDown";
import RecipeScroll from "./RecipeScroll";

function VisitProfileScreen() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggleDropDown = () => setDropDownOpen(!dropDownOpen);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <VisitProfileHeader
          toggleDropDown={toggleDropDown}
          dropDownOpen={dropDownOpen}
        />
        <SearchDropDown dropDownOpen={dropDownOpen} height={145} />
        <RecipeScroll paddingTop={145} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default VisitProfileScreen;
