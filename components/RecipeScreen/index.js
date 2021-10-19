import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useKeepAwake } from "expo-keep-awake";
import { FlatList, Dimensions } from "react-native";

import RecipeCard from "../RecipeCard";
import RecipeScroll from "./RecipeScroll";
import Header from "./Header";
import data from "../../data";

const windowHeight = Dimensions.get("window").height;

const RecipeScreen = (props) => {
  useKeepAwake();
  const [toggleRecipe, setToggleRecipe] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(0);

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
    <>
      <StatusBar style="light" />
      {!toggleRecipe && (
        <Header
          title={props.route.params.title}
          subTitle={props.route.params.subTitle}
        />
      )}
      <FlatList
        data={data}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={null}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        scrollEnabled={!toggleRecipe}
        initialScrollIndex={props.route.params.index}
        getItemLayout={(data, index) => ({
          length: windowHeight,
          offset: windowHeight * index,
          index,
        })}
      />
      {toggleRecipe && (
        <RecipeScroll
          data={data[recipeIndex]}
          setToggleRecipe={setToggleRecipe}
        />
      )}
    </>
  );
};

export default RecipeScreen;
