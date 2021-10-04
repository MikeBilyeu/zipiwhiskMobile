import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Header = (props) => {
  return (
    <SafeAreaView style={{ zIndex: 2 }}>
      <LinearGradient
        colors={[
          "rgba(255,255,255,0)",
          "rgba(255,255,255, .9)",
          "rgba(255,255,255,1)",
        ]}
        start={[0, 1]}
        end={[0, 0.1]}
        style={styles.gradientWrapper}
      >
        {props.children}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header;
