import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import SearchBar from "./SearchBar";
import DropDownResults from "./DropDownResults";
import CategorySwipe from "../Profile/Header/CategorySwipe";

const SearchScreen = ({}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        search={search}
        setSearch={setSearch}
      />
      <DropDownResults />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SearchScreen;
