import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Share,
  TouchableWithoutFeedback,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const Recipe = ({ data, yValue, children, setToggleRecipe }) => {
  let scaleInterpolate = yValue.interpolate({
    inputRange: [-201, -200, 0, 1],
    outputRange: [1.2, 1.2, 1, 1],
  });

  const animatedScaleStyle = {
    transform: [{ scale: scaleInterpolate }],
  };

  return (
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
      <TouchableWithoutFeedback onPress={() => setToggleRecipe(false)}>
        <View style={[styles.recipeScrollConatiner]}>
          <View style={styles.timeContainer}>
            <Ionicons name="timer-outline" size={wp("6%")} color={"#fff"} />

            <Text style={styles.timeText}>1Hr 30Min</Text>
          </View>

          <Ingredients data={data} />

          <Instructions data={data} />
        </View>
      </TouchableWithoutFeedback>
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
    backgroundColor: "rgba(0,0,0,.8)",
  },
  recipeScrollConatiner: {
    paddingTop: wp("10%"),
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -15 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
