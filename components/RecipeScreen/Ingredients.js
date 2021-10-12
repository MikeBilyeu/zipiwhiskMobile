import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const renderList = (list) => {
  return list.map((i) => (
    <View key={i.ingredient} style={styles.ingredientContainer}>
      <View style={styles.ingredientWrapper}>
        <Text style={styles.ingredientAmount}>{i.amount}</Text>
        <Text style={styles.ingredientName}>{i.ingredient}</Text>
      </View>
    </View>
  ));
};

const Ingredients = (props) => {
  return (
    <View style={styles.container}>
      <Text pointerEvents="none" style={styles.servingsText}>
        {props.data.recipeYield.toString()} Servings
      </Text>

      <View style={styles.listContainer}>
        {renderList(props.data.ingredientList)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: hp("10%"),
    paddingHorizontal: wp("2%"),
  },

  servingsText: {
    fontSize: wp("5%"),
    fontFamily: "AvenirNextRegular",
    color: "#fff",
  },
  groceryBtn: {
    alignSelf: "flex-start",
  },

  listContainer: {
    width: "100%",
    marginVertical: wp("4%"),
  },

  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: wp("5%"),
  },
  ingredientImage: {
    width: wp("13%"),
    height: wp("13%"),
    marginLeft: 10,
    borderRadius: 10,
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
