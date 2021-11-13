import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = (props) => {
  return (
    <LinearGradient
      colors={[
        "rgba(255,255,255,0)",
        "rgba(255,255,255,.9)",
        "rgba(255,255,255,1)",
      ]}
      start={[0, 1]}
      end={[0, 0.2]}
      style={styles.gradientWrapper}
    >
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: {
    zIndex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: hp("1%"),
  },
});

export default Header;
