import React from "react";
import { StyleSheet, FlatList } from "react-native";

import RecipeSmallView from "../RecipeSmallView";
import data from "../../data";

const RecipeScroll = ({ paddingTop = 130 }) => {
  const renderItem = ({ item }) => <RecipeSmallView item={item} />;
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
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});

export default RecipeScroll;
