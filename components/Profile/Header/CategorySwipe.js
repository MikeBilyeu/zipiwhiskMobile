import React, { useRef, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Pressable,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const renderItem = ({ item, index }, category, categoryChange, scrollTo) => {
  return (
    <Pressable
      onPress={() => {
        scrollTo(index);
        item === category ? categoryChange("") : categoryChange(item);
      }}
      hitSlop={15}
      style={[styles.btn, item === category && styles.btnSelected]}
      key={item}
    >
      <Text
        style={[styles.btnText, item === category && styles.btnTextSelected]}
      >
        {item}
      </Text>
    </Pressable>
  );
};

const CategorySwipe = (props) => {
  const scrollRef = useRef();

  const categories = [
    "Breakfast",
    "Lunch/Dinner",
    "Snack",
    "Dessert",
    "Beverage",
  ];

  const scrollTo = (i) => {
    scrollRef.current?.scrollToIndex({
      animated: true,
      index: i,
      viewPosition: 0.5,
    });
  };

  return (
    <ScrollView scrollEnabled={false}>
      <FlatList
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        data={categories}
        renderItem={(item) =>
          renderItem(item, props.category, props.categoryChange, scrollTo)
        }
        keyExtractor={(item) => item}
        extraData={props.category}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp("1%"),
    alignItems: "center",
    height: hp("8%"),
    maxHeight: 70,
  },
  btn: {
    height: hp("5%"),
    maxHeight: 45,
    justifyContent: "center",
    paddingTop: hp(".25%"),
    paddingHorizontal: wp("9%"),
    marginHorizontal: wp("2%"),
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  btnSelected: {
    backgroundColor: "#00D088",
  },
  btnText: {
    fontSize: wp("4.2%"),
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
  },
  btnTextSelected: {
    color: "#fff",
  },
});

export default CategorySwipe;
