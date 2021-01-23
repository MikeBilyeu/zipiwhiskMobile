import React from "react";
import { StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <Animated.View style={[styles.headerConatiner, props.styles]}>
      <LinearGradient
        colors={["rgba(0,0,0,.2)", "transparent"]}
        start={[0, 0]}
        end={[0, 1]}
        style={[styles.gradient]}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerConatiner: {
    height: 150,
    width: "100%",
    position: "absolute",
  },
  gradient: {
    height: 150,
    paddingTop: 20,
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
