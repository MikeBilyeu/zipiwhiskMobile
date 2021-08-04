import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RenderCategoryBtns = (value, setValue) =>
  value.map((curr, i) => {
    return (
      <TouchableOpacity
        onPress={() => setValue(i)}
        style={[
          styles.btnContainer,
          curr.selected && styles.btnContainerSelected,
        ]}
        key={curr.name}
      >
        <Text style={[styles.btnText, curr.selected && styles.btnTextSelected]}>
          {curr.name}
        </Text>
      </TouchableOpacity>
    );
  });

const Categories = ({ info, value, setValue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameWrapper}>
        <Text style={styles.nameText}>Categories</Text>
        <Text style={styles.infoText}>{info}</Text>
      </View>
      <View style={styles.categoryContainer}>
        {RenderCategoryBtns(value, setValue)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  nameWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  nameText: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
  },
  infoText: {
    color: "#B7B7B7",
  },
  categoryContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnContainer: {
    paddingVertical: wp("3%"),
    paddingHorizontal: wp("5%"),
    margin: wp("3.2%"),
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: "#fff",
  },
  btnText: {
    color: "#707070",
    fontFamily: "AvenirNextRegular",
    fontSize: 16,
    paddingHorizontal: 10,
  },
  btnContainerSelected: {
    borderWidth: 1,
    borderColor: "#313131",
  },
  btnTextSelected: {
    color: "#313131",
  },
});

export default Categories;
