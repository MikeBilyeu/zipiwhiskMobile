import React from "react";
import { StyleSheet, Animated } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const RecipeHeader = (props) => {
  return (
    <Animated.View
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 2,
        opacity: props.fadeAnim,
      }}
    >
      <LinearGradient
        colors={["rgba(0,0,0,.9)", "transparent"]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.gradient}
      ></LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    width: "100%",
    height: hp("15%"),
    paddingTop: hp("4%"),
  },
});

export default RecipeHeader;
