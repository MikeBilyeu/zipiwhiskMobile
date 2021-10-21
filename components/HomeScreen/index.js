import React, { useState, useRef } from "react";
import { FlatList, View } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { StatusBar } from "expo-status-bar";

import Header from "./Header";
import RecipeCard from "../RecipeCard";
import RecipeScroll from "../RecipeScreen/RecipeScroll";
import data from "../../data";

const Home = () => {
  useKeepAwake();
  const [toggleRecipe, setToggleRecipe] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(0);
  const handleLoadMore = () => console.log("load more");

  const flatListRef = useRef();
  const toTop = () => {
    !toggleRecipe &&
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const renderItem = (props) => (
    <RecipeCard
      data={props.item}
      handleSinglePress={() => {
        setToggleRecipe(!toggleRecipe);
        setRecipeIndex(props.index);
      }}
      toggleRecipe={toggleRecipe}
    />
  );
  return (
    <View style={{ backgroundColor: "#000" }}>
      <StatusBar style="light" />
      {!toggleRecipe && <Header handleScrollTop={toTop} />}
      <FlatList
        ref={flatListRef}
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
          setToggleRecipe={setToggleRecipe}
        />
      )}
    </View>
  );
};

export default Home;
