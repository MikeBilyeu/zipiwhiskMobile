import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  PanResponder,
  FlatList,
  Text,
  Animated,
  View,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Input from "./Input";
import Comment from "./Comment";

const renderComment = ({ item }) => <Comment c={item} />;

const Comments = (props) => {
  const yValue = useRef(new Animated.Value(hp("75%"))).current;

  const slideIn = () =>
    Animated.timing(yValue, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();

  useEffect(slideIn, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: (e, gesture) => {
        // Prevent over pull up
        if (gesture.dy > 0) {
          return Animated.event([null, { dy: yValue }], {
            useNativeDriver: false,
          })(e, gesture);
        }
      },
      onPanResponderRelease: (e, { dx, dy, vy }) => {
        // Swipe velocity threshold or tap
        if (vy > 0.35 || dy > hp("35%") || (dx == 0 && dy === 0)) {
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

  return (
    <View style={styles.outer} {...panHandlers}>
      <Animated.View
        style={[styles.wrapper, { transform: [{ translateY: yValue }] }]}
      >
        <Text style={styles.title}>Comments</Text>
        {props.comments.length ? (
          <FlatList
            data={props.comments}
            renderItem={renderComment}
            keyExtractor={(item) => item.id.toString()}
            bounces={true}
            contentContainerStyle={styles.list}
          />
        ) : (
          <Text style={styles.noCommentText}>No comments yet.</Text>
        )}
      </Animated.View>
      <Input style={{ transform: [{ translateY: yValue }] }} />
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    position: "absolute",
    width: "100%",
    height: hp("87%"),
    bottom: 0,
  },
  wrapper: {
    paddingTop: hp("2.5%"),
    paddingBottom: hp("12%"),
    backgroundColor: "rgba(0,0,0,1)",
    borderTopLeftRadius: wp("5%"),
    borderTopRightRadius: wp("5%"),
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: hp("75%"),
    zIndex: 2,
  },
  title: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.5%"),
    color: "#fff",
    marginBottom: hp("2%"),
  },
  list: {
    paddingHorizontal: wp("2%"),
  },
  noCommentText: {
    color: "rgba(200,200,200,.1)",
    textAlign: "center",
    fontFamily: "AvenirNextBold",
    fontSize: wp("5.5%"),
    marginTop: hp("7.5%"),
  },
});

export default Comments;
