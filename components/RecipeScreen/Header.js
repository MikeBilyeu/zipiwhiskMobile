import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["rgba(0,0,0,.6)", "transparent"]}
      start={[0, 0]}
      end={[0, 1]}
      style={styles.gradient}
    >
      <Pressable
        onPress={() => navigation.goBack()}
        hitSlop={{ bottom: 15, right: 15 }}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.headerBtn,
        ]}
      >
        <Image
          source={require("../../assets/whiteArrow.png")}
          style={styles.headerBtnIcon}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: hp("20%"),
    paddingTop: hp("4%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtn: {
    width: wp("20%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtnIcon: {
    width: wp("4%"),
    height: wp("4%"),
  },
});

export default Header;
