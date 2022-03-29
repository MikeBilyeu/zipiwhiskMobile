import React, { useRef, useState, cloneElement } from "react";
import { connect } from "react-redux";
import { setOpenComments } from "../../redux/actions/recipe";
import { useKeepAwake } from "expo-keep-awake";
import { FlatList, Dimensions, View, Animated } from "react-native";

import FocusAwareStatusBar from "../FocusAwareStatusBar";
import RecipeCard from "./RecipeCard";
import Recipe from "./Recipe";
import Comments from "./Comments";

const screenHeight = Dimensions.get("screen").height;

const RecipeScroll = (props) => {
  useKeepAwake();
  const [toggleRecipe, setToggleRecipe] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(props.initalScroll || 0);
  const [initialYValue, setInitialYValue] = useState(0);
  const [cardNum, setCardNum] = useState(0);

  const handleIndexChange = (i) => {
    setInitialYValue(0);
    setCardNum(0);
    setRecipeIndex(i);
  };

  const handleCloseRecipe = (lastYValue) => {
    setToggleRecipe(false);
    setInitialYValue(lastYValue);
  };

  const flatListRef = useRef();
  const handleScrollTop = () => {
    !toggleRecipe &&
      !props.openComments &&
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const renderItem = ({ item }) => (
    <RecipeCard
      data={item}
      handleSinglePress={() => setToggleRecipe(!toggleRecipe)}
      toggleRecipe={toggleRecipe}
      openComments={props.openComments}
      setOpenComments={props.setOpenComments}
    />
  );

  return (
    <View style={{ backgroundColor: "#000" }}>
      <FocusAwareStatusBar style="light" />
      {!toggleRecipe && cloneElement(props.children, { handleScrollTop })}

      <FlatList
        ref={flatListRef}
        data={props.data}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={props.handleLoadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        scrollEnabled={!props.openComments}
        initialScrollIndex={props.initalScroll || 0}
        scrollsToTop={!toggleRecipe && !props.openComments}
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
      />
      {toggleRecipe && recipeIndex !== null && (
        <Recipe
          data={props.data[recipeIndex]}
          setToggleRecipe={setToggleRecipe}
          handleCloseRecipe={handleCloseRecipe}
          initialYValue={initialYValue}
          cardNum={cardNum}
          setCardNum={setCardNum}
        />
      )}
      {props.openComments && (
        <Comments
          setOpenComments={props.setOpenComments}
          comments={props.data[recipeIndex].comments}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  openComments: state.recipe.openComments,
});

export default connect(mapStateToProps, { setOpenComments })(RecipeScroll);
