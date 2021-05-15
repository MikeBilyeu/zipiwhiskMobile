import React from "react";
import { StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

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
            style={styles.headerBtnIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.onShare}
          activeOpacity={0.4}
          style={styles.headerBtn}
        >
          <Ionicons
            name="share-outline"
            size={wp("6%")}
            color="#FFF"
            style={styles.footerBtnIcon}
          />
        </TouchableOpacity>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerConatiner: {
    height: wp("40%"),
    width: "100%",
    position: "absolute",
  },
  gradient: {
    height: wp("40%"),
    paddingTop: hp("3%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtn: {
    width: wp("15%"),
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
