import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, TextInput, Image, Animated } from "react-native";

import Categories from "./Catgories";
import Animations from "./Animations";
import SearchBar from "./SearchBar";

const SearchDropDown = ({ dropDownOpen, height }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [mount, setMount] = useState(false);

  const dropDownValue = useRef(new Animated.Value(-600)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const backgroudnopacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() =>
    Animations(
      dropDownOpen,
      dropDownValue,
      mount,
      setMount,
      opacityValue,
      backgroudnopacityValue
    )
  );

  const dropDownAnimationStyle = {
    transform: [{ translateY: dropDownValue }],
  };

  const opacityAnimationStyle = { opacity: opacityValue };
  const darkBackgroundAnimationStye = {
    opacity: backgroudnopacityValue,
  };

  return (
    mount && (
      <View style={styles.container}>
        <Animated.View
          style={[styles.darkBackground, darkBackgroundAnimationStye]}
        />
        <Animated.View
          style={[
            styles.dropDown,
            { paddingTop: height + 10, height: height + 425 },
            dropDownAnimationStyle,
          ]}
        >
          <SearchBar
            opacityAnimationStyle={opacityAnimationStyle}
            setIsFocused={setIsFocused}
          />
          {!isFocused && (
            <Categories opacityAnimationStyle={opacityAnimationStyle} />
          )}
        </Animated.View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  darkBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0,0,0)",
    opacity: 0.5,
    position: "absolute",
  },
  dropDown: {
    //paddingTop: 85,
    paddingBottom: 15,
    backgroundColor: "#fff",
    width: "100%",
    //height: 500,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 50 },
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
  },
});

export default SearchDropDown;
