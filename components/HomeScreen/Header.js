import React, { useRef, useEffect } from "react";
import { StyleSheet, Pressable, Animated, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = (props) => {
  const navigation = useNavigation();
  const yValue = useRef(new Animated.Value(hp("-13%"))).current;

  const handleSearchPress = () => {
    navigation.navigate("Search");
  };

  const handleProfilePress = () => {
    navigation.navigate("Profile");
  };

  const slideIn = () =>
    Animated.timing(yValue, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();

  const opacityInterpolate = yValue.interpolate({
    inputRange: [hp("-13%"), 0],
    outputRange: [0, 1],
  });

  useEffect(slideIn, []);

  return (
    <Animated.View
      style={{
        zIndex: 2,
        transform: [{ translateY: yValue }],
        opacity: opacityInterpolate,
      }}
      pointerEvents={"box-none"}
    >
      <LinearGradient
        colors={["rgba(10,10,10, 0)", "rgba(0,0,0,.75)"]}
        start={[0, 1]}
        end={[0, -1]}
        style={styles.gradient}
        pointerEvents={"none"}
      />

      <View style={styles.wrapper} pointerEvents={"box-none"}>
        <Pressable
          onPress={handleSearchPress}
          hitSlop={{ top: 15, bottom: 15 }}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1 },
            styles.headerBtn,
          ]}
        >
          <Ionicons
            name="search"
            size={wp("7%")}
            color="#FFF"
            style={styles.headerBtnIcon}
          />
        </Pressable>
        {!props.openComments && (
          <Pressable
            style={styles.scrollTopBtn}
            hitSlop={{ top: 15, bottom: 15 }}
            onPress={props.handleScrollTop}
          />
        )}
        <Pressable
          onPress={handleProfilePress}
          hitSlop={{ top: 15, bottom: 15 }}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1 },
            styles.headerBtn,
          ]}
        >
          <Ionicons
            name="person-outline"
            size={wp("7%")}
            color="#FFF"
            style={styles.headerBtnIcon}
          />
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    width: "100%",
    height: hp("13%"),
  },
  wrapper: {
    position: "absolute",
    width: "100%",
    height: hp("13%"),
    paddingTop: hp("4%"),
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
    width: wp("7%"),
    height: wp("7%"),
  },
  scrollTopBtn: {
    flex: 1,
    height: wp("15%"),
  },
});

export default Header;
