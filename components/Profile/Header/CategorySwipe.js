import React, { useState } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const renderCategories = (categories, selected, setSelected) =>
  categories.map((categoryName) => (
    <TouchableOpacity
      style={[styles.btn, categoryName === selected && styles.btnSelected]}
      onPress={() => setSelected(categoryName)}
      key={categoryName}
    >
      <Text
        style={[
          styles.btnText,
          categoryName === selected && styles.btnTextSelected,
        ]}
      >
        {categoryName}
      </Text>
    </TouchableOpacity>
  ));

const CategorySwipe = (props) => {
  const [selected, setSelected] = useState("All Categories");
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {renderCategories(
        [
          "All Categories",
          "Breakfast",
          "Lunch/Dinner",
          "Snack",
          "Dessert",
          "Beverage",
        ],
        selected,
        setSelected
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: wp("2%"),
  },
  btn: {
    justifyContent: "center",
    paddingVertical: wp("3.7%"),
    paddingHorizontal: wp("10%"),
    marginHorizontal: wp("3.2%"),
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  btnSelected: {
    backgroundColor: "#01C481",
  },
  btnText: {
    fontSize: wp("3.2%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#464646",
    textAlign: "center",
  },
  btnTextSelected: {
    color: "#fff",
  },
});

export default CategorySwipe;
