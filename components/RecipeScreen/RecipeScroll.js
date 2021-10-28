import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, cloneElement } from "react";
import { useKeepAwake } from "expo-keep-awake";
import { FlatList, Dimensions, View } from "react-native";

import RecipeCard from "../RecipeCard";
import Recipe from "./Recipe";
import Comments from "./Comments";

const screenHeight = Dimensions.get("screen").height;

const RecipeScroll = (props) => {
  useKeepAwake();
  const [toggleRecipe, setToggleRecipe] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(props.initalScroll || 0);

  const handleLoadMore = () => console.log("load more");

  const flatListRef = useRef();
  const handleScrollTop = () => {
    !toggleRecipe &&
      !openComments &&
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const renderItem = (props) => (
    <RecipeCard
      data={props.item}
      handleSinglePress={() => setToggleRecipe(!toggleRecipe)}
      toggleRecipe={toggleRecipe}
      openComments={openComments}
      setOpenComments={setOpenComments}
    />
  );

  return (
    <View style={{ backgroundColor: "#000" }}>
      <StatusBar style="light" />

      {!toggleRecipe && cloneElement(props.children, { handleScrollTop })}

      <FlatList
        ref={flatListRef}
        data={props.data}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        scrollEnabled={!openComments}
        initialScrollIndex={props.initalScroll || 0}
        onMomentumScrollEnd={(event) => {
          setRecipeIndex(
            Math.round(
              parseFloat(event.nativeEvent.contentOffset.y / screenHeight)
            )
          );
        }}
        getItemLayout={(data, index) => ({
          length: screenHeight,
          offset: screenHeight * index,
          index,
        })}
      />
      {toggleRecipe && recipeIndex !== null && (
        <Recipe
          data={props.data[recipeIndex]}
          setToggleRecipe={setToggleRecipe}
        />
      )}
      {openComments && (
        <Comments
          setOpenComments={setOpenComments}
          comments={props.data[recipeIndex].comments}
        />
      )}
    </View>
  );
};

export default RecipeScroll;
