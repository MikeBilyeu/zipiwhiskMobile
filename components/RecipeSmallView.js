import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import { parseNum } from "./utils";

const RecipeSmallView = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("Recipe", { data: item })}
    >
      <Image style={styles.image} source={{ uri: item.recipeImage }} />
      <View style={styles.textWrapper}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {item.title}
        </Text>
        <Text
          style={styles.recipeInfo}
          ellipsizeMode="tail"
          numberOfLines={1}
        >{`${parseNum(item.numLikes)} Saves, ${parseNum(
          item.nutrition.calories
        )} Calories, ${parseNum(item.numComments)} Comments`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: wp("1.75%"),
  },
  image: {
    height: wp("14%"),
    width: wp("14%"),
    marginRight: wp("3%"),
    marginLeft: 0,
    resizeMode: "cover",
    borderRadius: 100,
  },
  textWrapper: { flex: 1 },
  title: {
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("5%"),
    marginBottom: wp("1%"),
  },
  recipeInfo: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.75%"),
  },
});

export default RecipeSmallView;
