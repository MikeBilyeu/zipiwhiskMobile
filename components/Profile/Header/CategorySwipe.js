import React from "react";
import { StyleSheet, ScrollView, Text, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const renderCategories = (categories, category, categoryChange) =>
  categories.map((categoryName) => (
    <Pressable
      onPress={() => {
        categoryName === category
          ? categoryChange("")
          : categoryChange(categoryName);
      }}
      hitSlop={15}
      style={[styles.btn, categoryName === category && styles.btnSelected]}
      key={categoryName}
    >
      <Text
        style={[
          styles.btnText,
          categoryName === category && styles.btnTextSelected,
        ]}
      >
        {categoryName}
      </Text>
    </Pressable>
  ));

const CategorySwipe = (props) => {
  return (
    <ScrollView scrollEnabled={false}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {renderCategories(
          ["Breakfast", "Lunch/Dinner", "Snack", "Dessert", "Beverage"],
          props.category,
          props.categoryChange
        )}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp("1%"),
    alignItems: "center",
    height: hp("8%"),
    maxHeight: 70,
  },
  btn: {
    height: hp("6%"),
    maxHeight: 45,
    justifyContent: "center",
    paddingTop: hp(".25%"),
    paddingHorizontal: wp("9%"),
    marginHorizontal: wp("2%"),
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  btnSelected: {
    backgroundColor: "#01C481",
  },
  btnText: {
    fontSize: wp("4.2%"),
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
  },
  btnTextSelected: {
    color: "#fff",
  },
});

export default CategorySwipe;
