import React from "react";
import { StyleSheet, FlatList } from "react-native";

import RecipeCardSmall from "../RecipeCardSmall";
import data from "../../data";

const RecipeScroll = (props) => {
  const renderItem = ({ item }) => <RecipeCardSmall item={item} />;
  return (
    <FlatList
      style={styles.listContainer}
      contentContainerStyle={{ paddingTop: props.paddingTop }}
      showsVerticalScrollIndicator={false}
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
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default RecipeScroll;
