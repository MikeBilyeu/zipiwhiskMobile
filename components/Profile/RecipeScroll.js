import React from "react";
import { StyleSheet, FlatList } from "react-native";

import RecipeCard from "../RecipeCard";
import data from "../../data";

const RecipeScroll = ({ paddingTop = 130 }) => {
  const renderItem = ({ item }) => <RecipeCard data={item} />;
  return (
    <FlatList
      style={styles.listContainer}
      contentContainerStyle={{ paddingTop: paddingTop }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
  },
});

export default RecipeScroll;
