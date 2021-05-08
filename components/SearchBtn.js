import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function SearchBtn({ dropDownOpen, toggleDropDown, BtnText, children }) {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
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
  }, [dropDownOpen]);

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
        toggleDropDown();
      }}
      activeOpacity={0.8}
      style={styles.searchBtn}
    >
      <Image
        source={require("../assets/search.png")}
        style={{ width: wp("5%"), height: wp("5%") }}
      />
      <Text style={styles.searchBtnText}>{BtnText}</Text>
      <Animated.Image
        source={require("../assets/arrow.png")}
        style={[{ width: wp("4%"), height: wp("4%") }, rotateAnimationStyle]}
      />
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchBtn: {
    width: "100%",
    height: wp("15%"),
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBtnText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("7%"),
    color: "#313131",
    marginHorizontal: wp("2%"),
  },
});

export default SearchBtn;
