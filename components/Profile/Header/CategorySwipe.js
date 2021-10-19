import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const renderCategories = (categories, selected, setSelected) =>
  categories.map((categoryName) => (
    <Pressable
      onPress={() => {
        categoryName === selected
          ? setSelected(null)
          : setSelected(categoryName);
      }}
      hitSlop={15}
      style={[styles.btn, categoryName === selected && styles.btnSelected]}
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
    </Pressable>
  ));

const CategorySwipe = (props) => {
  const [selected, setSelected] = useState(null);
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {renderCategories(
        ["Breakfast", "Lunch/Dinner", "Snack", "Dessert", "Beverage"],
        selected,
        setSelected
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: hp("1%"),
    maxHeight: 60,
  },
  btn: {
    justifyContent: "center",
    paddingVertical: wp("3.2%"),
    paddingHorizontal: wp("10%"),
    marginHorizontal: wp("2%"),
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
