import React from "react";
import { View, StyleSheet, Platform } from "react-native";
const StatusBarBackground = (props) => (
  <View style={[styles.statusBarBackground, props.style || {}]} />
);

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === "ios" ? 75 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "#fff",
    width: "100%",
    zIndex: 3,
    transform: [{ translateY: -75 }],
    position: "absolute",
  },
});

export default StatusBarBackground;
