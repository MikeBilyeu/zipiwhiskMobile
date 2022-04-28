import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const renderList = (list) =>
  list.split(/\r?\n/).map((i, index) => {
    return (
      <View key={i + index} style={styles.ingredientContainer}>
        <View style={styles.ingredientWrapper}>
          {/* <Text style={styles.ingredientAmount}>{i.amount}</Text> */}
          {/* <Text style={styles.ingredientName}>{i.ingredient}</Text> */}
          <Text style={styles.ingredientName}>{i}</Text>
        </View>
      </View>
    );
  });

const Ingredients = (props) => {
  return (
    <>
      <Text pointerEvents="none" style={styles.servingsText}>
        {`${props.data.recipeYield.toString()} Serving${
          props.data.recipeYield > 1 ? "s" : ""
        }`}
      </Text>
      <View style={styles.listContainer}>
        {renderList(props.data.ingredientList)}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  servingsText: {
    fontSize: wp("4%"),
    fontFamily: "AvenirNextRegular",
    color: "#fff",
    opacity: 1,
  },
  listContainer: {
    width: "100%",
    marginTop: wp("6%"),
    marginBottom: hp("7.5%"),
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
    fontSize: wp("4%"),
    fontFamily: "AvenirNextRegular",
    color: "#fff",
  },
});

export default Ingredients;
