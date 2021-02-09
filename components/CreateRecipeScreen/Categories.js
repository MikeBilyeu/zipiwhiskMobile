import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

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
    // borderBottomWidth: 0.5,
    // borderColor: "#E3E3E3",
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 100,
  },
  btnText: {
    color: "#707070",
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  btnContainerSelected: {
    backgroundColor: "#0172C4",
  },
  btnTextSelected: {
    color: "#fff",
  },
});

export default Categories;
