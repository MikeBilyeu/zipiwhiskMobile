import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import NutritionFacts from "./NutritionFacts";
import Comments from "./Comments";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const Recipe = ({ Data }) => {
  return (
    <ScrollView style={styles.RecipeScrollView}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{Data.title}</Text>
        <Image
          source={require("../../assets/whiteArrow.png")}
          style={{
            transform: [{ rotate: "-90deg" }],
            width: 15,
            height: 15,
          }}
        />
      </View>
      <View style={styles.recipeScrollConatiner}>
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

        <Ingredients Data={Data} />

        <Instructions Data={Data} />

        <NutritionFacts Data={Data} />

        <Comments Data={Data} />
      </View>
    </ScrollView>
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
    height: screenHeight,
    paddingBottom: 15,
  },
  titleText: {
    color: "#FFF",
    fontSize: 20,
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
