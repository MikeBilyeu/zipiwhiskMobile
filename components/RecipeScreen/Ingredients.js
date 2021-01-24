import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const screenWidth = Dimensions.get("screen").width;

const renderList = (list) => {
  return list.map((i) => (
    <View key={i.ingredient} style={styles.ingredientContainer}>
      <View style={styles.ingredientWrapper}>
        <Text style={styles.ingredientAmount}>{i.amount}</Text>
        <Text style={styles.ingredientName}>{i.ingredient}</Text>
      </View>
      <Image source={{ uri: i.image }} style={styles.ingredientImage} />
    </View>
  ));
};

const Ingredients = (props) => {
  const [servings, setServings] = useState(props.data.recipeYield.toString());

  return (
    <View style={styles.container}>
      <View style={styles.servingsContainer}>
        <TextInput
          style={styles.servingsInput}
          onChangeText={(text) => setServings(text)}
          value={servings}
          selectionColor="#464646"
          returnKeyType="done"
          keyboardType="numeric"
        />
        <Text pointerEvents="none" style={styles.servingsText}>
          Servings
        </Text>
      </View>

      <TouchableOpacity style={styles.groceryBtn}>
        <Image
          source={require("../../assets/cart.png")}
          style={{ width: 30, height: 35 }}
        />
      </TouchableOpacity>

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
    marginVertical: 25,
    paddingHorizontal: 10,
  },
  servingsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 100,
    width: 200,
    height: 50,
    margin: 5,
  },
  servingsInput: {
    fontSize: 30,
    color: "#0172C4",
    width: "100%",
    height: 50,
    paddingRight: 135,
    position: "absolute",
    fontFamily: "AvenirNextDemiBold",
    textAlign: "right",
  },
  servingsText: {
    fontSize: 18,
    fontFamily: "AvenirNextRegular",
    color: "#313131",
    marginLeft: 20,
  },
  groceryBtn: {
    alignSelf: "flex-start",
  },

  listContainer: {
    width: "100%",
    marginVertical: 10,
  },

  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  ingredientImage: {
    width: 45,
    height: 45,
    marginLeft: 10,
    borderRadius: 10,
  },
  ingredientWrapper: {
    justifyContent: "space-between",
    flex: 1,
  },
  ingredientAmount: {
    fontSize: 30,
    fontFamily: "AvenirNextBold",
    color: "#313131",
  },
  ingredientName: {
    marginTop: 10,
    fontSize: 22,
    fontFamily: "AvenirNextRegular",
    color: "#313131",
  },
});

export default Ingredients;
