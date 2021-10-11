import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { parseNum } from "../utils";

const screenHeight = Dimensions.get("screen").height;

const Footer = (props) => {
  const navigation = useNavigation();

  let footerOpacityInterpolate =
    props.yValue &&
    props.yValue.interpolate({
      inputRange: [175, 280],
      outputRange: [1, 0],
    });
  const animatedFooterStyle = props.yValue && {
    transform: [{ translateY: props.yValue }],
    opacity: footerOpacityInterpolate,
  };

  return (
    <Animated.View style={[styles.footerConatiner, animatedFooterStyle]}>
      <LinearGradient
        colors={["rgba(0,0,0,.8)", "transparent"]}
        start={[0, 1]}
        end={[0, 0]}
        style={styles.gradientWrapper}
      >
        <View style={styles.footerBtnContainer}>
          <TouchableOpacity
            onPress={() => props.setSaved(!props.saved)}
            activeOpacity={0.4}
            style={styles.footerBtn}
          >
            <Ionicons
              name="heart"
              size={wp("7%")}
              color={props.saved ? "#FF2121" : "#FFF"}
              style={styles.footerBtnIcon}
            />
            <Text style={styles.footerBtnText}>{parseNum(props.numLikes)}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Comments", { title: props.title })
            }
            activeOpacity={0.4}
            style={styles.footerBtn}
          >
            <Ionicons
              name="chatbubble-ellipses"
              size={wp("7%")}
              color="#FFF"
              style={styles.footerBtnIcon}
            />
            <Text style={styles.footerBtnText}>
              {parseNum(props.numComments)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.push("VisitProfile", { id: props.id })}
            activeOpacity={0.4}
            style={styles.userContainer}
          >
            <Image source={{ uri: props.userImage }} style={styles.userIcon} />
            <View style={styles.userInfoWrapper}>
              <Text style={styles.userInfoText}>{props.username}</Text>
              <View
                style={[
                  styles.followingIcon,
                  props.isFollowing
                    ? { backgroundColor: "#F44545" }
                    : { backgroundColor: "#01C481" },
                ]}
              />
              <Text style={styles.userInfoText}>
                {props.isFollowing ? "Following" : "Follow"}
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {props.title}
          </Text>
          <Text style={styles.caption} numberOfLines={1} ellipsizeMode="tail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </Text>
          <Text style={styles.timeAgo}>1 day ago</Text>
          <View style={styles.viewsContainer}>
            <Ionicons
              name="eye"
              size={wp("5%")}
              color="#FFF"
              style={styles.viewsIcon}
            />
            <Text style={styles.viewsText}>5.2k</Text>
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footerConatiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: wp("70%"),
    top: screenHeight - wp("70%"),
    width: "100%",
    position: "absolute",
  },
  gradientWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: hp("2.5%"),
    width: "100%",
  },
  footerBtnContainer: {
    height: "100%",
    width: wp("100%"),
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  footerBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: wp("10%"),
    width: wp("15%"),
    flex: 2,
  },
  footerBtnText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
  },
  footerBtnIcon: {
    width: wp("7%"),
    height: wp("7%"),
    marginBottom: 4,
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: wp("3.5%"),
    flex: 2,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfoText: {
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.4%"),
  },
  followingIcon: {
    width: wp("1.8%"),
    height: wp("1.8%"),
    borderRadius: 100,
    marginHorizontal: wp("3.5%"),
  },
  userIcon: {
    width: wp("8.5%"),
    height: wp("8.5%"),
    borderRadius: 100,
    borderWidth: 1.2,
    borderColor: "white",
    marginRight: wp("2.5%"),
  },
  title: {
    color: "white",
    fontSize: wp("5%"),
    fontFamily: "AvenirNextBold",
    lineHeight: wp("5%"),
    width: "100%",
    paddingLeft: wp("3.5%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 10,

    flex: 1,
  },
  caption: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
    paddingHorizontal: wp("4%"),
    marginRight: 50,
  },
  timeAgo: {
    color: "#FFF",
    opacity: 0.3,
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
    textAlign: "center",
    marginTop: hp("1%"),
  },
  viewsContainer: {
    position: "absolute",
    opacity: 0.3,
    right: wp("3.5%"),
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  viewsIcon: {
    width: wp("5%"),
    height: wp("5%"),
    marginBottom: 2,
  },
  viewsText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
  },
});

export default Footer;
