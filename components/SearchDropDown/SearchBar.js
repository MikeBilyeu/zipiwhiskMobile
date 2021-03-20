import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.searchWrapper}>
      <Animated.View style={[styles.searchBar, props.opacityAnimationStyle]}>
        <Ionicons
          name="search"
          size={25}
          color={props.isFocused ? "#313131" : "#B7B7B7"}
          style={styles.searchIcon}
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
        {props.isFocused && search !== "" && (
          <Ionicons
            name="close"
            size={20}
            color="#707070"
            style={styles.clearTextIcon}
            onPress={() => setSearch("")}
          />
        )}
      </Animated.View>
      {props.isFocused && (
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => Keyboard.dismiss()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    width: "100%",
    flexDirection: "row",
  },
  searchBar: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
  },
  searchIcon: {
    position: "absolute",
    left: 15,
  },
  searchText: {
    height: 50,
    paddingLeft: 50,
    paddingRight: 55,
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    paddingTop: 3,
  },
  clearTextIcon: {
    position: "absolute",
    right: 0,
    paddingHorizontal: 15,
    paddingRight: 20,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  cancelBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 5,
  },
  cancelText: {
    fontFamily: "AvenirNextRegular",
    color: "#707070",
    fontSize: 18,
  },
});

export default SearchBar;
