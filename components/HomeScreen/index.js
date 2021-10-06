import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList, Animated } from "react-native";
import { useKeepAwake } from "expo-keep-awake";

import Header from "./Header";
import RecipeCard from "../RecipeCard";
import RecipeScroll from "../RecipeScreen/RecipeScroll";
import data from "../../data";

const Home = () => {
  useKeepAwake();
  const [isScrollable, setIsScrollable] = useState(true);
  const yValue = useRef(new Animated.Value(0)).current;
  const handleLoadMore = () => console.log("load more");
  const renderItem = ({ item }) => <RecipeCard data={item} />;
  const flatListRef = useRef();
  const toTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  return (
    <View style={styles.container}>
      <Header handleScrollTop={toTop} />
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
        scrollEnabled={isScrollable}
      />
      {!isScrollable && <RecipeScroll data={data[2]} yValue={yValue} />}
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
