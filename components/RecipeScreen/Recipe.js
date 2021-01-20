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

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const Recipe = (props) => {
  const [servings, setServings] = useState(4);
  return (
    <ScrollView style={styles.RecipeScrollView}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
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

        <View style={styles.servingsContainer}>
          <TextInput
            style={styles.servingsInput}
            onChangeText={(text) => setServings(text)}
            value={servings}
            selectionColor="#464646"
            returnKeyType="done"
            keyboardType="numeric"
          />
          <Text pointerEvents="none" style={styles.servingsText}>
            Servings
          </Text>
        </View>

        <View>
          <Text>Ingredients</Text>
        </View>

        <View>
          <Text>Instructions</Text>
        </View>

        <View>
          <Text>Calories</Text>
        </View>

        <View>
          <Text>Comments</Text>
        </View>
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
    height: 700,
    paddingTop: 50,
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
  },

  timeText: { fontSize: 18, fontFamily: "AvenirNextRegular", color: "#313131" },
  servingsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 100,
    width: 200,
    height: 50,
    margin: 5,
  },
  servingsInput: {
    fontSize: 30,
    color: "#0172C4",
    width: "100%",
    height: 50,
    paddingRight: 135,
    position: "absolute",
    fontFamily: "AvenirNextDemiBold",
    textAlign: "right",
  },
  servingsText: {
    fontSize: 18,
    fontFamily: "AvenirNextRegular",
    color: "#313131",
    marginLeft: 20,
  },
});

export default Recipe;
