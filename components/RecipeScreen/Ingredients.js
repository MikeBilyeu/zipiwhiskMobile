import React, { useState } from "react";

import { StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const renderList = (list) =>
  list.map((i, index) => (
    <View key={i.ingredient + index} style={styles.ingredientContainer}>
      <View style={styles.ingredientWrapper}>
        <Text style={styles.ingredientAmount}>{i.amount}</Text>
        <Text style={styles.ingredientName}>{i.ingredient}</Text>
      </View>
    </View>
  ));
const Ingredients = (props) => {
  return (
    <>
      <Text pointerEvents="none" style={styles.servingsText}>
        {props.data.recipeYield.toString()} Servings
      </Text>

      <View style={styles.listContainer}>
        {renderList(props.data.ingredientList)}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
    marginBottom: hp("8%"),
    borderWidth: 0.5,
    borderColor: "white",
  },
  servingsText: {
    fontSize: wp("5%"),
    fontFamily: "AvenirNextRegular",
    color: "#fff",
  },
  listContainer: {
    width: "100%",
    marginTop: wp("6%"),
    marginBottom: hp("13%"),
    paddingHorizontal: wp("2%"),
  },
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: wp("5%"),
  },
  ingredientWrapper: {
    justifyContent: "space-between",
    flex: 1,
  },
  ingredientAmount: {
    fontSize: wp("7.5%"),
    fontFamily: "AvenirNextBold",
    color: "#fff",
  },
  ingredientName: {
    marginTop: wp("2%"),
    fontSize: wp("6%"),
    fontFamily: "AvenirNextRegular",
    color: "#fff",
  },
});

export default Ingredients;
