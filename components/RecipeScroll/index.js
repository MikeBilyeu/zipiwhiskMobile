import React, { useRef, useState, cloneElement } from "react";
import { connect } from "react-redux";
import { useKeepAwake } from "expo-keep-awake";
import { FlatList, Dimensions, View } from "react-native";

import {
  likeRecipe,
  unlikeRecipe,
  saveRecipe,
  unsaveRecipe,
  setParentCommentId,
  setInputFocused,
} from "../../redux/actions/recipe";

import FocusAwareStatusBar from "../FocusAwareStatusBar";
import RecipeCard from "./RecipeCard";
import Recipe from "./Recipe";
import Comments from "./Comments";
import Footer from "./Footer";

const screenHeight = Dimensions.get("screen").height;

const RecipeScroll = ({
  data,
  initalScroll,
  unlikeRecipe,
  likeRecipe,
  saveRecipe,
  unsaveRecipe,
  children,
  handleLoadMore,
  refreshing,
  handleRefresh,
  setParentCommentId,
  setInputFocused,
}) => {
  useKeepAwake();

  const [toggleComments, setToggleComments] = useState(false);
  const [toggleRecipe, setToggleRecipe] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(initalScroll || 0);
  const [initialYValue, setInitialYValue] = useState(0);
  const [cardNum, setCardNum] = useState(0);

  const flatListRef = useRef();

  const handleToggleComments = () => {
    if (toggleComments) {
      setParentCommentId(null);
      setInputFocused(false);
      setToggleComments(false);
    } else {
      setToggleComments(true);
    }
  };

  const handleIndexChange = (i) => {
    setInitialYValue(0);
    setCardNum(0);
    setRecipeIndex(i);
  };

  const handleCloseRecipe = (lastYValue) => {
    setToggleRecipe(false);
    setInitialYValue(lastYValue);
  };

  const handleScrollTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const handleLikeRecipe = () => {
    likeRecipe(data[recipeIndex].id);
  };

  const handleToggleLike = () => {
    if (data[recipeIndex]?.liked) {
      unlikeRecipe(data[recipeIndex].id);
    } else {
      handleLikeRecipe();
    }
  };

  const handleToggleSave = () => {
    if (data[recipeIndex]?.saved) {
      unsaveRecipe(data[recipeIndex].id);
    } else {
      saveRecipe(data[recipeIndex].id);
    }
  };

  const handleToggleRecipe = () => setToggleRecipe(!toggleRecipe);

  const renderItem = ({ item }) => (
    <RecipeCard
      data={item}
      handleToggleRecipe={handleToggleRecipe}
      handleLikeRecipe={handleLikeRecipe}
    />
  );

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <FocusAwareStatusBar style="light" />
      {!toggleRecipe &&
        cloneElement(children, { toggleComments, handleScrollTop })}
      {!toggleRecipe && data[recipeIndex] && (
        <Footer
          recipeId={data[recipeIndex].id}
          liked={data[recipeIndex]?.liked}
          numLikes={data[recipeIndex]?.numLikes}
          saved={data[recipeIndex]?.saved}
          numSaves={data[recipeIndex]?.numSaves}
          handleToggleLike={handleToggleLike}
          handleToggleSave={handleToggleSave}
          numComments={data[recipeIndex].numComments}
          userImage={data[recipeIndex].user_image_url}
          username={data[recipeIndex].username}
          id={data[recipeIndex].created_by}
          caption={data[recipeIndex].caption}
          numViews={data[recipeIndex].numViews}
          title={data[recipeIndex].title}
          handleToggleRecipe={handleToggleRecipe}
          created_at={data[recipeIndex].created_at}
          handleToggleComments={handleToggleComments}
        />
      )}

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
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        scrollEnabled={!toggleComments}
        initialScrollIndex={initalScroll || 0}
        scrollsToTop={!toggleRecipe && !toggleComments}
        onScrollToTop={() => handleIndexChange(0)}
        onMomentumScrollEnd={(event) => {
          handleIndexChange(
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
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />

      {toggleRecipe && recipeIndex !== null && (
        <Recipe
          data={data[recipeIndex]}
          setToggleRecipe={setToggleRecipe}
          handleCloseRecipe={handleCloseRecipe}
          initialYValue={initialYValue}
          cardNum={cardNum}
          setCardNum={setCardNum}
        />
      )}
      {toggleComments && (
        <Comments
          recipeId={data[recipeIndex].id}
          handleToggleComments={handleToggleComments}
        />
      )}
    </View>
  );
};

export default connect(null, {
  likeRecipe,
  unlikeRecipe,
  saveRecipe,
  unsaveRecipe,
  setParentCommentId,
  setInputFocused,
})(RecipeScroll);
