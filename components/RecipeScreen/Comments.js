import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  PanResponder,
  FlatList,
  Text,
  Animated,
  Easing,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Input from "./Input";
import Comment from "./Comment";
import Animations from "./Animations";

const renderComment = ({ item }) => <Comment c={item} />;

const Comments = (props) => {
  const yValue = useRef(new Animated.Value(hp("75%"))).current;

  const slideOpen = Animated.timing(yValue, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true,
  }).start();

  useEffect(() => slideOpen, []);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        // Prevent over pull up
        if (gesture.dy > 0) {
          return Animated.event([null, { dy: yValue }], {
            useNativeDriver: false,
          })(e, gesture);
        }
      },
      onPanResponderRelease: (e, { dy, vy }) => {
        // Swipe velocity threshold
        if (vy > 0.35 || dy > hp("35%")) {
          Animated.timing(yValue, {
            toValue: hp("75%"),
            duration: 350 - vy * 100,
            useNativeDriver: true,
          }).start(() => props.setOpenComments(false));
        } else {
          Animated.spring(yValue, {
            toValue: 0,
            friction: 9,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const panHandlers = panResponder.panHandlers;

  //useEffect(() => Animations(dropDownOpen, pan, mount, setMount));
  return (
    <>
      <Animated.View
        style={[styles.wrapper, , { transform: [{ translateY: yValue }] }]}
        {...panHandlers}
      >
        <Text style={styles.title}>Comments</Text>
        <FlatList
          data={props.comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id.toString()}
          bounces={false}
        />
      </Animated.View>
      <Input style={{ transform: [{ translateY: yValue }] }} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: hp("3%"),
    backgroundColor: "rgba(0,0,0,1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: hp("75%"),
    zIndex: 2,
  },
  title: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4%"),
    color: "#fff",
    marginBottom: hp("1%"),
  },
});

export default Comments;
