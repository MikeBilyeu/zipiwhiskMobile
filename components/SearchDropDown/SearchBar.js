import React, { useState } from "react";
import { Animated, Image, StyleSheet, TextInput } from "react-native";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  return (
    <Animated.View style={[styles.searchWrapper, props.opacityAnimationStyle]}>
      <Image
        source={require("../../assets/search.png")}
        style={[styles.searchIcon]}
      />
      <TextInput
        style={styles.searchText}
        placeholder="Search"
        returnKeyType="search"
        onFocus={() => props.setIsFocused(true)}
        onBlur={() => props.setIsFocused(false)}
        defaultValue={search}
        onChangeText={(text) => setSearch(text)}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
  },
  searchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 15,
    opacity: 0.5,
  },
  searchText: {
    height: 50,
    paddingLeft: 50,
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    paddingTop: 3,
  },
});

export default SearchBar;
