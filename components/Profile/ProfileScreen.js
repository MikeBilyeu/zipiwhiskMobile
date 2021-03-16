import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import ProfileHeader from "./Header/ProfileHeader";
import SearchDropDown from "../SearchDropDown";
import RecipeScroll from "./RecipeScroll";

function ProfileScreen() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggleDropDown = () => setDropDownOpen(!dropDownOpen);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ProfileHeader
          toggleDropDown={toggleDropDown}
          dropDownOpen={dropDownOpen}
        />
        <SearchDropDown
          dropDownOpen={dropDownOpen}
          setDropDownOpen={setDropDownOpen}
          height={130}
        />
        <RecipeScroll paddingTop={0} />
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

export default ProfileScreen;
