import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Share,
} from "react-native";

import Header from "./Header";
import Footer from "./Footer";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import NutritionFacts from "./NutritionFacts";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const Recipe = ({ data }) => {
  const yValue = useRef(new Animated.Value(0)).current;

  const onShare = async (d) => {
    try {
      const result = await Share.share({
        message: `${data.title} | ZipiWhisk`,
        url: null,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  let headerOpacityInterpolate = yValue.interpolate({
    inputRange: [screenHeight - 100, screenHeight - 50],
    outputRange: [1, 0],
  });

  let footerOpacityInterpolate = yValue.interpolate({
    inputRange: [175, 280],
    outputRange: [1, 0],
  });
  const animatedFooterStyle = {
    transform: [{ translateY: yValue }],
    opacity: footerOpacityInterpolate,
  };
  const animatedHeaderStyle = {
    transform: [{ translateY: yValue }],
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
      <Header styles={animatedHeaderStyle} onShare={onShare} />
      <Footer
        title={data.title}
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  recipeScrollConatiner: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 50,
    paddingBottom: 10,
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
