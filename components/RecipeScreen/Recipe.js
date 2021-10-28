import React, { useRef, useEffect } from "react";
import { StyleSheet, Animated, Easing, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const Recipe = ({ data, children, setToggleRecipe }) => {
  const yValue = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  let scaleInterpolate = yValue.interpolate({
    inputRange: [-201, -200, 0, 1],
    outputRange: [1.2, 1.2, 1, 1],
  });

  const animatedScaleStyle = {
    transform: [{ scale: scaleInterpolate }],
  };

  return (
    <>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.cancelBtn,
        ]}
        onPress={() => setToggleRecipe(false)}
        hitSlop={{
          top: 100,
          bottom: 30,
          left: 30,
          right: 30,
        }}
      >
        <Ionicons name="ios-close" size={wp("7.5%")} color="#fff" />
      </Pressable>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: yValue } } }],
          {
            useNativeDriver: true,
          }
        )}
        style={[
          styles.RecipeScrollView,
          animatedScaleStyle,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        {children}

        <Pressable
          style={styles.recipeScrollConatiner}
          onPress={() => setToggleRecipe(false)}
        >
          <Ingredients data={data} />

          <Instructions data={data} />
        </Pressable>
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cancelBtn: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    top: hp("6%"),
    right: wp("6%"),
    position: "absolute",
  },
  RecipeScrollView: {
    backgroundColor: "rgba(0,0,0,.7)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  recipeScrollConatiner: {
    paddingTop: hp("12%"),
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Recipe;
