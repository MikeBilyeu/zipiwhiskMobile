import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <LinearGradient
      colors={["rgba(0,0,0,.2)", "transparent"]}
      start={[0, 0]}
      end={[0, 1]}
      style={styles.headerConatiner}
    >
      <TouchableOpacity
        onPress={null}
        activeOpacity={0.4}
        style={styles.headerBtn}
      >
        <Image
          source={require("../../assets/whiteArrow.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={null}
        activeOpacity={0.4}
        style={styles.headerBtn}
      >
        <Image
          source={require("../../assets/share.png")}
          style={styles.headerBtnIcon}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerConatiner: {
    height: 150,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtnIcon: {
    width: 25,
    height: 25,
  },
});

export default Header;
