import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import RecipeCard from "./RecipeCard";
import data from "../data";

const Home = () => {
  const handleLoadMore = () => console.log("load more");
  const renderItem = ({ item }) => <RecipeCard data={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={data}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
});

export default Home;
