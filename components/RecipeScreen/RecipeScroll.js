import React, { useRef, useState, useEffect, cloneElement } from "react";
import { connect } from "react-redux";
import { useKeepAwake } from "expo-keep-awake";
import { FlatList, Dimensions, View } from "react-native";

import { selectOpenComments } from "../../redux/reducers/recipeReducer";

import {
  likeRecipe,
  unlikeRecipe,
  saveRecipe,
  unsaveRecipe,
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
  openComments,
  unlikeRecipe,
  likeRecipe,
  saveRecipe,
  unsaveRecipe,
  children,
  handleLoadMore,
  refreshing,
  handleRefresh,
}) => {
  useKeepAwake();

  const [toggleRecipe, setToggleRecipe] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(initalScroll || 0);
  const [initialYValue, setInitialYValue] = useState(0);
  const [cardNum, setCardNum] = useState(0);
  const [liked, setLiked] = useState(
    data.length && data[recipeIndex].liked == 0 ? false : true
  );
  const [numLikes, setNumLikes] = useState(
    data.length && data[recipeIndex].numLikes
  );

  const [saved, setSaved] = useState(
    data.length && data[recipeIndex].saved == 0 ? false : true
  );

  const [numSaves, setNumSaves] = useState(
    data.length && data[recipeIndex].numSaves
  );

  const flatListRef = useRef();

  useEffect(() => {
    setLiked(data.length && data[recipeIndex].liked);
    setNumLikes(data.length && data[recipeIndex].numLikes);
  }, [
    data.length ? data[recipeIndex].liked : null,
    data.length ? data[recipeIndex].numLikes : null,
  ]);

  useEffect(() => {
    setSaved(data.length && data[recipeIndex].saved);
    setNumSaves(data.length && data[recipeIndex].numSaves);
  }, [
    data.length ? data[recipeIndex].saved : null,
    data.length ? data[recipeIndex].numSaves : null,
  ]);

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
    setLiked(true);
    if (!data[recipeIndex].liked) {
      setNumLikes(numLikes + 1);
      likeRecipe(data[recipeIndex].id);
    }
  };

  const handleUnlikeRecipe = () => {
    setLiked(false);
    setNumLikes(numLikes - 1);
    unlikeRecipe(data[recipeIndex].id);
  };

  const handleSaveRecipe = () => {
    setSaved(true);
    if (!data[recipeIndex].saved) {
      setNumSaves(numSaves + 1);
      saveRecipe(data[recipeIndex].id);
    }
  };

  const handleUnsaveRecipe = () => {
    setSaved(false);
    setNumSaves(numSaves - 1);
    unsaveRecipe(data[recipeIndex].id);
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
        cloneElement(children, { openComments, handleScrollTop })}
      {!toggleRecipe && data[recipeIndex] && (
        <Footer
          recipeId={data[recipeIndex].id}
          liked={liked}
          numLikes={numLikes}
          saved={saved}
          numSaves={numSaves}
          handleLikeRecipe={handleLikeRecipe}
          handleUnlikeRecipe={handleUnlikeRecipe}
          handleSaveRecipe={handleSaveRecipe}
          handleUnsaveRecipe={handleUnsaveRecipe}
          numComments={data[recipeIndex].numComments}
          userImage={data[recipeIndex].user_image_url}
          username={data[recipeIndex].username}
          id={data[recipeIndex].created_by}
          caption={data[recipeIndex].caption}
          numViews={data[recipeIndex].numViews}
          title={data[recipeIndex].title}
          handleToggleRecipe={handleToggleRecipe}
          created_at={data[recipeIndex].created_at}
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
        scrollEnabled={!openComments}
        initialScrollIndex={initalScroll || 0}
        scrollsToTop={!toggleRecipe && !openComments}
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
      {openComments && <Comments recipeId={data[recipeIndex].id} />}
    </View>
  );
};

const mapStateToProps = (state) => ({
  openComments: selectOpenComments(state),
});

export default connect(mapStateToProps, {
  likeRecipe,
  unlikeRecipe,
  saveRecipe,
  unsaveRecipe,
})(RecipeScroll);
