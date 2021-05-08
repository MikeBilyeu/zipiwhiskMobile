import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
          height={wp("35%")}
          renderItemType="small"
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
