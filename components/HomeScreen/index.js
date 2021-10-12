import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList, Animated } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { StatusBar } from "expo-status-bar";

import Header from "./Header";
import RecipeCard from "../RecipeCard";
import RecipeScroll from "../RecipeScreen/RecipeScroll";
import data from "../../data";

const Home = () => {
  useKeepAwake();
  const [toggleRecipe, setToggleRecipe] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(null);
  const handleLoadMore = () => console.log("load more");
  const yValue = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const toTop = () => {
    !toggleRecipe &&
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const renderItem = (props) => {
    return (
      <RecipeCard
        data={props.item}
        handleSinglePress={() => {
          setToggleRecipe(!toggleRecipe);
          setRecipeIndex(props.index);
        }}
        toggleRecipe={toggleRecipe}
      />
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {!toggleRecipe && <Header handleScrollTop={toTop} />}
      <FlatList
        ref={flatListRef}
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
        scrollEnabled={!toggleRecipe}
      />
      {toggleRecipe && recipeIndex !== null && (
        <RecipeScroll
          data={data[recipeIndex]}
          yValue={yValue}
          setToggleRecipe={setToggleRecipe}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
});

export default Home;
