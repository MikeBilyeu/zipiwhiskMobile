import React from "react";
import { StyleSheet, FlatList } from "react-native";

import RecipeCardSmall from "../RecipeCardSmall";
import data from "../../data";

const RecipeScroll = ({ paddingTop = 130 }) => {
  const renderItem = ({ item }) => <RecipeCardSmall item={item} />;
  return (
    <FlatList
      style={styles.listContainer}
      contentContainerStyle={{ paddingTop: paddingTop }}
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
    position: "absolute",
    width: "100%",
    paddingTop: 170,
  },
});

export default RecipeScroll;
