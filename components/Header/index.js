import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Header = (props) => {
  return (
    <SafeAreaView style={{ zIndex: 2 }}>
      <LinearGradient
        colors={["#fff", "rgba(255, 255, 255, 1)"]}
        start={[0, 0]}
        end={[0, 1]}
        style={[styles.headerContainer, { height: props.height }]}
      >
        {props.children}
        <View
          style={[
            styles.bottomLine,
            props.dropDownOpen ? { opacity: 0 } : { opacity: 1 },
          ]}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
  },
  bottomLine: {
    width: "100%",
    height: 10,
    borderBottomWidth: 0.25,
    borderBottomColor: "#E3E3E3",
  },
});

export default Header;
