import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Header = (props) => {
  return (
    <SafeAreaView style={{ zIndex: 2, backgroundColor: "#fff" }}>
      <View style={[styles.headerContainer, { height: props.height }]}>
        {props.children}
        <View
          style={[
            styles.bottomLine,
            props.dropDownOpen ? { opacity: 0 } : { opacity: 1 },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomLine: {
    width: "100%",
    height: 10,
    borderBottomWidth: 0.25,
    borderBottomColor: "#E3E3E3",
  },
});

export default Header;
