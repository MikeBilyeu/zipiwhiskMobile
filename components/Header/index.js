import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Header = (props) => {
  return (
    <LinearGradient
      colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
      start={[0, 1]}
      end={[0, 0.8]}
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
    paddingBottom: 15,
  },
});

export default Header;
