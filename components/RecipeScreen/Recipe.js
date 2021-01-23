import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from "react-native";

import Header from "./Header";
import Footer from "./Footer";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import NutritionFacts from "./NutritionFacts";
import Comments from "./Comments";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const Recipe = ({ data }) => {
  const yValue = useRef(new Animated.Value(0)).current;

  let scrollInterpolate = yValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  let headerOpacityInterpolate = yValue.interpolate({
    inputRange: [screenHeight - 100, screenHeight - 50],
    outputRange: [1, 0],
  });

  let footerOpacityInterpolate = yValue.interpolate({
    inputRange: [175, 250],
    outputRange: [1, 0],
  });
  const animatedFooterStyle = {
    transform: [{ translateY: scrollInterpolate }],
    opacity: footerOpacityInterpolate,
  };
  const animatedHeaderStyle = {
    transform: [{ translateY: scrollInterpolate }],
    opacity: headerOpacityInterpolate,
  };

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: yValue } } }],
        {
          useNativeDriver: true,
        }
      )}
      style={[styles.RecipeScrollView]}
    >
      <Header styles={animatedHeaderStyle} />
      <Footer
        numLikes={data.numLikes}
        numComments={data.numComments}
        userImage={data.user.image}
        styles={animatedFooterStyle}
      />

      <View pointerEvents="none" style={[styles.titleContainer]}>
        <Text style={styles.titleText}>{data.title}</Text>
        <Image
          source={require("../../assets/whiteArrow.png")}
          style={{
            transform: [{ rotate: "-90deg" }],
            width: 15,
            height: 15,
          }}
        />
      </View>
      <View style={[styles.recipeScrollConatiner]}>
        <Image
          source={require("../../assets/line.png")}
          style={{ width: 60, height: 4, position: "absolute", top: 30 }}
        />
        <View style={styles.timeContainer}>
          <Image
            source={require("../../assets/timer.png")}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={styles.timeText}>1Hr 30Min</Text>
        </View>

        <Ingredients data={data} />

        <Instructions data={data} />

        <NutritionFacts data={data} />

        <Comments data={data} />
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  RecipeScrollView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 15,
    height: 90,
    marginTop: screenHeight - 90,
    marginBottom: 15,
  },
  titleText: {
    color: "#FFF",
    fontSize: 25,
    fontFamily: "AvenirNextDemiBold",
    textAlign: "center",
    fontWeight: "bold",
    width: screenWidth - 100,
    marginBottom: 10,
  },
  recipeScrollConatiner: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  timeContainer: {
    alignItems: "center",
    height: 50,
    justifyContent: "space-between",
    marginVertical: 25,
  },

  timeText: {
    fontSize: 18,
    fontFamily: "AvenirNextRegular",
    color: "#313131",
  },
});

export default Recipe;
