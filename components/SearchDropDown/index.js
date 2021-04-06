import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  PanResponder,
} from "react-native";

import StatusBarBackground from "../StatusBarBackground";
import DropDownResults from "./DropDownResults";
import Categories from "./Categories";
import Animations from "./Animations";
import SearchBar from "./SearchBar";

const windowHeight = Dimensions.get("window").height;

const SearchDropDown = ({ dropDownOpen, setDropDownOpen, height }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [mount, setMount] = useState(false);
  const pan = useRef(new Animated.ValueXY({ x: 0, y: -285 })).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: 0,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  const backgroudnopacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() =>
    Animations(dropDownOpen, pan, mount, setMount, backgroudnopacityValue)
  );

  const darkBackgroundAnimationStye = {
    opacity: backgroudnopacityValue,
  };

  return (
    mount && (
      <View style={styles.container}>
        <StatusBarBackground />
        <Animated.View
          style={[styles.darkBackground, darkBackgroundAnimationStye]}
        >
          <TouchableOpacity
            style={{ width: "100%", flex: 1 }}
            onPress={() => setDropDownOpen(false)}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.dropDown,
            {
              paddingTop: height + 210,
              height: isFocused ? windowHeight : height + 625,
              transform: [{ translateY: pan.y }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          <SearchBar
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            setDropDownOpen={setDropDownOpen}
            search={search}
            setSearch={setSearch}
          />

          {isFocused ? (
            <DropDownResults />
          ) : (
            <Categories setDropDownOpen={setDropDownOpen} />
          )}

          <Animated.Image
            source={require("../../assets/line.png")}
            style={styles.swipeLine}
          />
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
    position: "absolute",
  },
  dropDown: {
    paddingBottom: 15,
    backgroundColor: "#fff",
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  swipeLine: {
    width: 60,
    height: 4,
    position: "absolute",
    bottom: 15,
  },
});

export default SearchDropDown;
