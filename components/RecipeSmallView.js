import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { parseNum } from "./utils";

const RecipeSmallView = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Recipe", { data: item })}
    >
      <Image style={styles.image} source={{ uri: item.recipeImage }} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.recipeInfo} ellipsizeMode="tail">{`${parseNum(
          item.numLikes
        )} Saves, ${parseNum(item.nutrition.calories)} Calories, ${parseNum(
          item.numComments
        )} Comments`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    marginBottom: 20,
  },
  image: {
    height: 45,
    width: 45,
    marginRight: 10,
    marginLeft: 0,
    resizeMode: "cover",
    borderRadius: 100,
  },
  textWrapper: {},
  title: {
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 18,
    marginBottom: 5,
  },
  recipeInfo: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
  },
});

export default RecipeSmallView;
