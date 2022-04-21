import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextTicker from "react-native-text-ticker";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { parseNum } from "../utils";
import { selectId } from "../../redux/reducers/userReducer";

const screenHeight = Dimensions.get("screen").height;

const Footer = (props) => {
  const navigation = useNavigation();
  const [isFollowing, setIsFollowing] = useState(false);
  const [fullCaption, setFullCaption] = useState(false);
  const [captionHeight, setCaptionHeight] = useState(0);
  const yValue = useRef(new Animated.Value(wp("90%"))).current;

  const slideOpen = () =>
    Animated.timing(yValue, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();

  const opacityInterpolate = yValue.interpolate({
    inputRange: [0, wp("90%")],
    outputRange: [1, 0],
  });

  useEffect(slideOpen, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateY: yValue }],
        opacity: opacityInterpolate,
        zIndex: 1,
      }}
      pointerEvents={"box-none"}
    >
      <LinearGradient
        pointerEvents={"none"}
        colors={["rgba(0,0,0,.9)", "rgba(50,50,50, 0)"]}
        start={[0, 1]}
        end={[0, 0.1]}
        style={styles.gradient}
      />
      <View
        style={[
          styles.footerBtnContainer,
          {
            height: fullCaption ? wp("90%") + captionHeight : wp("90%"),
            top: fullCaption
              ? screenHeight - (wp("90%") + captionHeight)
              : screenHeight - wp("90%"),
          },
        ]}
        pointerEvents={"box-none"}
      >
        <Pressable
          onPress={() => {
            props.liked ? props.handleUnlikeRecipe() : props.handleLikeRecipe();
          }}
          style={styles.footerBtn}
          hitSlop={{ top: 25, right: 20 }}
        >
          <Ionicons
            name={props.liked ? "heart" : "heart-outline"}
            size={wp("8%")}
            color={props.liked ? "#FF0000" : "#FFF"}
          />
          <Text style={styles.footerBtnText}>{parseNum(props.numLikes)}</Text>
        </Pressable>
        <Pressable
          onPress={props.handleToggleComments}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1 },
            styles.footerBtn,
          ]}
          hitSlop={{ right: 20 }}
        >
          <Ionicons name="chatbox-outline" size={wp("8%")} color="#FFF" />
          <Text style={styles.footerBtnText}>
            {parseNum(props.numComments)}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            props.saved ? props.handleUnsaveRecipe() : props.handleSaveRecipe();
          }}
          style={styles.footerBtn}
          hitSlop={{ right: 20 }}
        >
          <Ionicons
            name={!props.saved ? "bookmark-outline" : "bookmark"}
            size={wp("8%")}
            color={"#FFF"}
          />
          <Text style={styles.footerBtnText}>{parseNum(props.numSaves)}</Text>
        </Pressable>
        <View style={styles.userContainer}>
          <Pressable
            onPress={() => {
              props.id === props.userId
                ? navigation.navigate("Profile")
                : navigation.push("VisitProfile", { id: props.id });
            }}
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

        <TextTicker
          style={styles.title}
          duration={15000}
          loop
          bounce
          repeatSpacer={50}
          scroll={false}
          marqueeDelay={750}
          easing={Easing.linear}
        >
          {props.title}
        </TextTicker>
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
            {props.caption}
          </Text>
        </Pressable>
        <Text style={styles.timeAgo}>{moment(props.created_at).fromNow()}</Text>
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    height: wp("90%"),
    width: "100%",
    top: screenHeight - wp("90%"),
  },
  footerBtnContainer: {
    position: "absolute",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "stretch",
    paddingTop: hp("2%"),
    paddingBottom: hp("2.5%"),
  },
  footerBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: wp("17%"),
    width: wp("15%"),
  },
  footerBtnText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: wp("17%"),
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
    backgroundColor: "#00D088",
  },
  followBtn: {
    height: "100%",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: wp("5%"),
    fontFamily: "AvenirNextBold",
    paddingLeft: wp("3.5%"),
  },

  captionBtn: {
    paddingHorizontal: wp("4%"),
    marginRight: wp("15%"),
  },
  captionText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
    lineHeight: wp("4.5%"),
  },
  timeAgo: {
    color: "#FFF",
    opacity: 0.2,
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
    textAlign: "center",
    marginTop: hp("1%"),
  },
  viewsContainer: {
    position: "absolute",
    opacity: 0.2,
    right: wp("3.5%"),
    bottom: hp("2.5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  viewsIcon: {
    width: wp("5%"),
    height: wp("5%"),
    marginBottom: wp(".5%"),
  },
  viewsText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
  },
});
const mapStateToProps = (state) => ({
  userId: selectId(state),
});
export default connect(mapStateToProps)(Footer);
