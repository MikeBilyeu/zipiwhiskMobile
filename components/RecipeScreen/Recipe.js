import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Share,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import Header from "./Header";
import Footer from "./Footer";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import NutritionFacts from "./NutritionFacts";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const Recipe = ({ data, yValue }) => {
  const onShare = async () => {
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
      <Header styles={animatedHeaderStyle} onShare={onShare} />
      <Footer
        title={data.title}
        numLikes={data.numLikes}
        numComments={data.numComments}
        userImage={data.user.image}
        styles={animatedFooterStyle}
      />

      <View pointerEvents="none" style={[styles.titleContainer]}>
        <Text style={styles.titleText} ellipsizeMode={"tail"} numberOfLines={2}>
          {data.title}
        </Text>
        <Image
          source={require("../../assets/whiteArrow.png")}
          style={{
            transform: [{ rotate: "-90deg" }],
            width: wp("4%"),
            height: wp("4%"),
            opacity: 0.3,
          }}
        />
      </View>
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
    paddingBottom: 10,
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
    fontSize: wp("4.5%"),
    fontFamily: "AvenirNextRegular",
    color: "#313131",
  },
});

export default Recipe;
