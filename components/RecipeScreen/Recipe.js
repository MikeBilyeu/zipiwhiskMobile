import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Animated, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import RecipeHeader from "./RecipeHeader";

const Recipe = ({ data, children, initialYValue, handleCloseRecipe }) => {
  const yValue = useRef(new Animated.Value(hp("100%"))).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const yValueScale = useRef(new Animated.Value(0)).current;
  const [lastYValue, setLastYValue] = useState(0);

  const slideIn = () =>
    Animated.timing(yValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

  const fadeIn = () =>
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

  const fadeOut = () =>
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start(() => handleCloseRecipe(lastYValue));

  useEffect(fadeIn, []);
  useEffect(slideIn, []);

  let scaleInterpolate = yValueScale.interpolate({
    inputRange: [-201, -200, 0, 2000],
    outputRange: [1.2, 1.2, 1, 1],
  });

  const animatedScaleStyle = {
    transform: [{ scale: scaleInterpolate }, { translateY: yValue }],
  };

  return (
    <>
      <RecipeHeader fadeAnim={fadeAnim} />

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: fadeAnim,
        }}
      >
        <BlurView intensity={100} tint={"dark"} style={{ flex: 1 }} />
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentOffset={{ y: initialYValue }}
        onScrollEndDrag={(event) => {
          setLastYValue(event.nativeEvent.contentOffset.y);
        }}
        onMomentumScrollEnd={(event) => {
          setLastYValue(event.nativeEvent.contentOffset.y);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: yValueScale } } }],
          {
            useNativeDriver: true,
          }
        )}
        style={[
          styles.RecipeScrollView,
          animatedScaleStyle,
          { opacity: fadeAnim },
        ]}
      >
        {children}
        <Pressable style={styles.recipeScrollConatiner} onPress={fadeOut}>
          <Ingredients data={data} />
          <Instructions data={data} />
        </Pressable>
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  RecipeScrollView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  recipeScrollConatiner: {
    paddingTop: hp("12%"),
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Recipe;
