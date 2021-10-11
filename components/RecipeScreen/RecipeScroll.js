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
          <Image
            source={require("../../assets/line.png")}
            style={{
              width: wp("15%"),
              height: wp("1%"),
              position: "absolute",
              top: wp("8%"),
            }}
          />
          <View style={styles.timeContainer}>
            <Ionicons name="timer-outline" size={wp("6%")} color={"#464646"} />

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
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: wp("3%"),
    height: wp("30%"),
    marginTop: screenHeight - wp("30%"),
    marginBottom: wp("3%"),
  },
  titleText: {
    color: "#FFF",
    fontSize: wp("8%"),
    lineHeight: wp("8%"),
    fontFamily: "AvenirNextBold",
    textAlign: "center",
    width: screenWidth - wp("30%"),
    marginBottom: wp("2%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  recipeScrollConatiner: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: wp("10%"),
    borderTopRightRadius: wp("10%"),
    paddingTop: wp("10%"),
    marginTop: screenHeight - hp("6%"),
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
    color: "#313131",
  },
});

export default Recipe;
