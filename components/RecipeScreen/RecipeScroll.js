import React from "react";
import { StyleSheet, View, Animated, Share, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const Recipe = ({ data, yValue, children, setToggleRecipe }) => {
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
        style={[styles.RecipeScrollView, animatedScaleStyle]}
      >
        {children}

        <View style={[styles.recipeScrollConatiner]}>
          <Ingredients data={data} />

          <Instructions data={data} />
        </View>
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  RecipeScrollView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.6)",
  },
  recipeScrollConatiner: {
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -15 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cancelBtn: {
    justifyContent: "center",
    alignItems: "center",

    zIndex: 10,
    top: hp("7%"),
    right: wp("5%"),
    position: "absolute",
    borderColor: "#fff",
  },

  timeContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: wp("8%"),
    marginBottom: wp("6%"),
    height: wp("13%"),
  },

  timeText: {
    fontSize: wp("5%"),
    fontFamily: "AvenirNextRegular",
    color: "#fff",
  },
});

export default Recipe;
