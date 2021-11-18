import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  Dimensions,
  Animated,
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
  const [isFollowing, setIsFollowing] = useState(false);
  const [fullCaption, setFullCaption] = useState(false);
  const [captionHeight, setCaptionHeight] = useState(0);
  const yValue = useRef(new Animated.Value(wp("72%"))).current;

  const slideOpen = () =>
    Animated.timing(yValue, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();

  const opacityInterpolate = yValue.interpolate({
    inputRange: [0, wp("72%")],
    outputRange: [1, 0],
  });

  useEffect(slideOpen, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateY: yValue }],
        opacity: opacityInterpolate,
      }}
    >
      <LinearGradient
        colors={["rgba(0,0,0,.9)", "transparent"]}
        start={[0, 1]}
        end={[0, 0]}
        style={[
          styles.gradientWrapper,
          {
            height: fullCaption ? wp("72%") + captionHeight : wp("72%"),
            top: fullCaption
              ? screenHeight - (wp("72%") + captionHeight)
              : screenHeight - wp("72%"),
          },
        ]}
      >
        <View style={styles.footerBtnContainer}>
          <Pressable
            onPress={() => props.setSaved(!props.saved)}
            style={styles.footerBtn}
            hitSlop={{ top: 50, right: 20 }}
          >
            <Ionicons
              name="heart"
              size={wp("7%")}
              color={props.saved ? "#FF2121" : "#FFF"}
              style={styles.footerBtnIcon}
            />
            <Text style={styles.footerBtnText}>{parseNum(props.numLikes)}</Text>
          </Pressable>

          <Pressable
            onPress={() => props.setOpenComments(true)}
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1 },
              styles.footerBtn,
            ]}
            hitSlop={{ right: 20 }}
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
          </Pressable>

          <View style={styles.userContainer}>
            <Pressable
              onPress={() => navigation.push("VisitProfile", { id: props.id })}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                styles.userWrapper,
              ]}
            >
              <View
                style={{
                  alignItems: "center",
                  width: wp("15%"),
                }}
              >
                <Image
                  source={{ uri: props.userImage }}
                  style={styles.userIcon}
                />
              </View>
              <Text style={styles.userInfoText}>{props.username}</Text>
            </Pressable>
            {!isFollowing && (
              <>
                <View style={[styles.followIcon]} />
                <Pressable
                  style={styles.followBtn}
                  onPress={() => setIsFollowing(true)}
                  hitSlop={{
                    left: wp("5.3%"),
                    right: wp("5.5%"),
                  }}
                >
                  <Text style={styles.userInfoText}>Follow</Text>
                </Pressable>
              </>
            )}
          </View>

          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {props.title}
          </Text>
          <Pressable
            style={styles.captionBtn}
            hitSlop={{ top: 32, bottom: 500, right: 500, left: 500 }}
            onPress={() => setFullCaption(!fullCaption)}
            onLayout={(event) => {
              let { height } = event.nativeEvent.layout;
              setCaptionHeight(height);
            }}
          >
            <Text
              style={styles.captionText}
              numberOfLines={fullCaption ? 20 : 1}
              ellipsizeMode="tail"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Text>
          </Pressable>
          <Text style={styles.timeAgo}>1 day ago</Text>
          <View style={styles.viewsContainer}>
            <Ionicons
              name="eye"
              size={wp("5%")}
              color="#FFF"
              style={styles.viewsIcon}
            />
            <Text style={styles.viewsText}>52.1k</Text>
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
    paddingTop: hp("2%"),
    paddingBottom: hp("2.5%"),
    height: wp("72%"),
    top: screenHeight - wp("72%"),
    width: "100%",
    position: "absolute",
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
    flex: 2,
  },
  userIcon: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff",
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: wp("3.5%"),
    height: "100%",
  },
  userInfoText: {
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.4%"),
  },
  followIcon: {
    width: wp("1.8%"),
    height: wp("1.8%"),
    borderRadius: 100,
    marginRight: wp("3.5%"),
    backgroundColor: "#01C481",
  },
  followBtn: {
    height: "100%",
    justifyContent: "center",
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
  captionBtn: {
    paddingHorizontal: wp("4%"),
    marginRight: 50,
  },
  captionText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
    lineHeight: wp("4%"),
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
