import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const CategoryBtn = ({ name }) => {
  return (
    <TouchableOpacity style={styles.btnWrapper} onPress={null}>
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

const SearchDropDown = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.dropDown}>
        <View style={styles.searchWrapper}>
          <Image
            source={require("../assets/search.png")}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchText}
            placeholder="Search"
            returnKeyType="search"
            defaultValue={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>

        <View style={styles.categoryContainer}>
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
        </View>
        <Image
          source={require("../assets/line.png")}
          style={{ width: 60, height: 4 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,.55)",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  dropDown: {
    paddingTop: 75,
    paddingBottom: 15,
    backgroundColor: "#FFF",
    width: "100%",
    height: 500,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchWrapper: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
  },
  searchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 15,
    opacity: 0.5,
  },
  searchText: {
    height: 50,
    paddingLeft: 50,
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    paddingTop: 3,
  },

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

export default SearchDropDown;
