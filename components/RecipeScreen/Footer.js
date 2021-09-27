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
  const [saved, setSaved] = useState(false);
  const navigation = useNavigation();
  return (
    <Animated.View style={[styles.footerConatiner, props.styles]}>
      <LinearGradient
        colors={["rgba(0,0,0,.8)", "transparent"]}
        start={[0, 1]}
        end={[0, 0]}
        style={styles.gradientWrapper}
      >
        <View style={styles.footerBtnContainer}>
          <TouchableOpacity
            onPress={() => setSaved(!saved)}
            activeOpacity={0.4}
            style={styles.footerBtn}
          >
            <Ionicons
              name="heart"
              size={wp("7%")}
              color={saved ? "#DE4949" : "#FFF"}
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
              ></View>
              <Text style={styles.userInfoText}>
                {props.isFollowing ? "Following" : "Follow"}
              </Text>
            </View>
          </TouchableOpacity>
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
    height: wp("63%"),
    marginTop: screenHeight - wp("63%"),
    width: "100%",
    position: "absolute",
  },
  gradientWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: wp("4%"),
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
    flex: 1,
  },
  footerBtnText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.8%"),
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
    paddingHorizontal: 12,
    flex: 1,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfoText: {
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.8%"),
  },
  followingIcon: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginHorizontal: 12,
  },
  userIcon: {
    width: wp("8.5%"),
    height: wp("8.5%"),
    borderRadius: 100,
    borderWidth: 1.2,
    borderColor: "white",
    marginRight: 5,
  },
  caption: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.8%"),
    paddingHorizontal: 15,
    marginRight: 50,
  },
  timeAgo: {
    color: "#FFF",
    opacity: 0.3,
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
    paddingHorizontal: 10,
    textAlign: "center",
    marginTop: 5,
  },
  viewsContainer: {
    position: "absolute",
    opacity: 0.3,
    right: 15,
    bottom: 10,
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
