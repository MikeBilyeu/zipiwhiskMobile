import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const NutritionFacts = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleConatainer}>
        <Text style={styles.title}>Nutrition Facts</Text>
        <Text style={styles.subTitle}>Amount Per Serving</Text>
      </View>

      <View style={styles.caloriesContainer}>
        <Text style={styles.caloriesNum}>{data.nutrition.calories}</Text>
        <Text style={styles.caloriesText}>Calories</Text>
      </View>

      <View style={styles.macrosContainer}>
        <View style={styles.macroWrapper}>
          <View style={[styles.colorKey, styles.protienColor]}></View>
          <Text style={styles.macroText}>Protiens</Text>
          <Text style={styles.macroNum}>{data.nutrition.protiens}</Text>
        </View>
        <View style={styles.macroWrapper}>
          <View style={[styles.colorKey, styles.fatColor]}></View>
          <Text style={styles.macroText}>Fats</Text>
          <Text style={styles.macroNum}>{data.nutrition.fats}</Text>
        </View>
        <View style={styles.macroWrapper}>
          <View style={[styles.colorKey, styles.carbColor]}></View>
          <Text style={styles.macroText}>Carbs</Text>
          <Text style={styles.macroNum}>{data.nutrition.carbs}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: screenHeight * 0.9,
    //paddingVertical: 50,
    marginVertical: 50,
  },
  title: {
    fontFamily: "AvenirNextBold",
    color: "#313131",
    fontSize: 30,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 15,
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
    marginVertical: 5,
  },
  caloriesContainer: {
    borderWidth: 12,
    borderColor: "#3870ED",
    backgroundColor: "transparent",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,

    borderRadius: 300,
    width: screenWidth - 50,
    height: screenWidth - 50,
    alignItems: "center",
    justifyContent: "center",
  },
  caloriesNum: {
    shadowOpacity: 0,
    fontSize: 45,
    fontFamily: "AvenirNextBold",
    color: "#313131",
  },
  caloriesText: {
    fontSize: 15,
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
  },

  macrosContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  macroWrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
  },
  colorKey: {
    width: 18,
    height: 18,
    borderRadius: 5,
  },
  protienColor: {
    backgroundColor: "#3870ED",
  },
  fatColor: {
    backgroundColor: "#ED8C38",
  },
  carbColor: {
    backgroundColor: "#01C481",
  },
  macroText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "AvenirNextDemiBold",
    color: "#464646",
  },
  macroNum: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "AvenirNextBold",
    color: "#464646",
  },
});

export default NutritionFacts;
