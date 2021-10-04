import React from "react";
import { StyleSheet, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import RecipeCardSmall from "../RecipeCardSmall";
import data from "../../data";

const RecipeScroll = () => {
  const renderItem = ({ item }) => <RecipeCardSmall item={item} />;
  return (
    <FlatList
      style={[styles.listContainer, { flex: 1 }]}
      contentContainerStyle={{ paddingTop: wp("45%") }}
      data={data}
      numColumns={3}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
    //position: "absolute",
    borderWidth: 1,
  },
});

export default RecipeScroll;
