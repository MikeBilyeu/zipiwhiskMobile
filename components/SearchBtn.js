import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

function SearchBtn({ dropDownOpen, toggleDropDown, BtnText, children }) {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotateAnimation = () => {
    if (dropDownOpen) {
      Animated.timing(rotateValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else if (!dropDownOpen) {
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const rotateValueInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const rotateAnimationStyle = {
    transform: [{ rotate: rotateValueInterpolate }],
  };

  return (
    <TouchableOpacity
      onPress={() => {
        rotateAnimation();
        toggleDropDown();
      }}
      activeOpacity={0.8}
      style={styles.searchBtn}
    >
      <Image
        source={require("../assets/search.png")}
        style={{ width: 20, height: 20 }}
      />
      <Text style={styles.searchBtnText}>{BtnText}</Text>
      <Animated.Image
        source={require("../assets/arrow.png")}
        style={[{ width: 15, height: 15 }, rotateAnimationStyle]}
      />
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchBtn: {
    width: "100%",
    height: 65,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBtnText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
  },
});

export default SearchBtn;
