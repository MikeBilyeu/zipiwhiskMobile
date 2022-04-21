import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = (props) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper} pointerEvents={"box-none"}>
      <LinearGradient
        colors={["rgba(30,30,30, 0)", "rgba(0,0,0,.75)"]}
        start={[0, 1]}
        end={[0, -1.5]}
        style={styles.gradient}
        pointerEvents={"none"}
      />
      <Pressable
        onPress={handleBackPress}
        hitSlop={{ bottom: 15, right: 15 }}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.headerBtn,
        ]}
      >
        <Ionicons name="chevron-back" size={wp("6.5%")} color="#fff" />
      </Pressable>

      <Pressable
        style={styles.titleWrapper}
        hitSlop={{ top: 15, bottom: 15 }}
        onPress={props.handleScrollTop}
        pointerEvents={props.toggleComments ? "none" : "auto"}
      >
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
          {props.title}
        </Text>
        {props.subTitle && (
          <Text
            style={styles.subTitleText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {props.subTitle}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: hp("13%"),
    paddingTop: hp("5%"),
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 2,
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: hp("20%"),
  },
  headerBtn: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: hp("1%"),
    height: wp("15%"),
    width: wp("15%"),
    alignItems: "center",
    justifyContent: "center",
  },
  headerBtnIcon: {
    width: wp("4%"),
    height: wp("4%"),
  },
  titleWrapper: {
    height: wp("15%"),
    justifyContent: "center",
    marginTop: hp("1%"),
    paddingRight: wp("15%"),
    flex: 1,
  },
  titleText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4%"),
    color: "#fff",
    marginBottom: 2,
  },
  subTitleText: {
    textAlign: "center",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.5"),
    color: "#fff",
  },
});

export default Header;
