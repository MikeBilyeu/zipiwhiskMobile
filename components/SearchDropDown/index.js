import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  PanResponder,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import StatusBarBackground from "../StatusBarBackground";
import DropDownResults from "./DropDownResults";
import Categories from "./Categories";
import Animations from "./Animations";
import SearchBar from "./SearchBar";

const windowHeight = Dimensions.get("window").height;

const SearchDropDown = ({
  dropDownOpen,
  setDropDownOpen,
  height,
  renderItemType,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [mount, setMount] = useState(false);
  const pan = useRef(new Animated.ValueXY({ x: 0, y: -450 })).current;

  let panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: 0,
          y: 0,
        });
      },
      onPanResponderMove: (e, gesture) => {
        // Prevent over pull down
        if (gesture.dy < 0) {
          return Animated.event([null, { dy: pan.y }], {
            useNativeDriver: false,
          })(e, gesture);
        }
      },
      onPanResponderRelease: (e, { dy, vy }) => {
        // Swipe velocity threshold
        if (vy < -0.85 || dy < -350) {
          Animated.decay(pan, {
            velocity: { x: 0, y: -11 },
            deceleration: 0.97,
            useNativeDriver: true,
          }).start(() => setDropDownOpen(false));
        } else {
          pan.flattenOffset();
          Animated.spring(pan.y, {
            toValue: 0,
            friction: 9,
            useNativeDriver: true,
          }).start(() => {
            pan.setValue({ x: 0, y: 0 });
          });
        }
      },
    })
  ).current;

  //Only use panResponder when displaying categories
  let panHandlers = !isFocused && panResponder.panHandlers;

  useEffect(() => Animations(dropDownOpen, pan, mount, setMount));

  const darkBackgroundAnimationStye = {
    opacity: pan.y.interpolate({
      inputRange: [-400, 0],
      outputRange: [0, 0.4],
    }),
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
              paddingTop: height + 5,
              top: -5,
              height: isFocused ? windowHeight : height + hp("55%"),
              transform: [{ translateY: pan.y }],
            },
          ]}
          {...panHandlers}
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
            <Categories
              setDropDownOpen={setDropDownOpen}
              renderItemType={renderItemType}
            />
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
  },
  darkBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0,0,0)",
    position: "absolute",
  },
  dropDown: {
    //position: "absolute",
    paddingBottom: wp("4%"),
    backgroundColor: "#FFF",
    width: "100%",
    borderBottomRightRadius: wp("6%"),
    borderBottomLeftRadius: wp("6%"),
    alignItems: "center",
    paddingHorizontal: wp("2%"),
  },
  swipeLine: {
    width: wp("15%"),
    height: wp("1%"),
    position: "absolute",
    bottom: wp("3%"),
  },
});

export default SearchDropDown;
