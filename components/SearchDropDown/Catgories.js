import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Animated,
  View,
} from "react-native";

const CategoryBtn = ({ name }) => {
  return (
    <TouchableOpacity style={styles.btnWrapper} onPress={null}>
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

const Categories = (props) => (
  <>
    <Animated.View
      style={[styles.categoryContainer, props.opacityAnimationStyle]}
    >
      <TextInput editable={false} style={styles.containerTitle}>
        Categories
      </TextInput>
      <View style={styles.btnContainer}>
        <CategoryBtn name="Breakfast" />
        <CategoryBtn name="Lunch" />
        <CategoryBtn name="Dinner" />
        <CategoryBtn name="Dessert" />
        <CategoryBtn name="Beverage" />
      </View>
    </Animated.View>
    <Animated.Image
      source={require("../../assets/line.png")}
      style={[{ width: 60, height: 4 }, props.opacityAnimationStyle]}
    />
  </>
);

const styles = StyleSheet.create({
  categoryContainer: {
    width: "100%",
    flex: 1,
  },
  containerTitle: {
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
    color: "#B7B7B7",
    textAlign: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
    paddingBottom: 5,
    paddingTop: 15,
  },

  btnContainer: {
    flex: 1,
    marginVertical: 15,
  },
  btnWrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  btnText: {
    fontSize: 18,
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
  },
});
export default Categories;
