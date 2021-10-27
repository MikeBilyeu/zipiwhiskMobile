import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  FlatList,
  Text,
  Animated,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Input from "./Input";
import Comment from "./Comment";
import Animations from "./Animations";
import data from "../../data.js";

const renderComment = ({ item }) => <Comment c={item} />;

const Comments = (props) => {
  console.log("render comments");
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  let panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, g) => {
        pan.setOffset({
          x: 0,
          y: 0,
        });
      },
      onPanResponderMove: (e, gesture) => {
        // Prevent over pull down
        if (gesture.dy > 0) {
          return Animated.event([null, { dy: pan.y }], {
            useNativeDriver: false,
          })(e, gesture);
        }
      },
      onPanResponderRelease: (e, { dy, vy }) => {
        console.log(dy, vy);
        // Swipe velocity threshold
        if (vy > 1 || dy > hp("35%")) {
          Animated.decay(pan, {
            velocity: { x: 0, y: 10 },
            deceleration: 0.9847,
            useNativeDriver: true,
          }).start(() => {
            console.log("closed");
            props.setOpenComments(false);
          });
        } else {
          pan.flattenOffset();
          Animated.spring(pan.y, {
            toValue: 0,
            friction: 9,
            useNativeDriver: true,
          }).start(() => {
            pan.setValue({ x: 0, y: 0 });
          });
        }
      },
    })
  ).current;

  //Only use panResponder when displaying categories
  let panHandlers = panResponder.panHandlers;

  //useEffect(() => Animations(dropDownOpen, pan, mount, setMount));
  return (
    <>
      <Animated.View
        style={[styles.wrapper, { transform: [{ translateY: pan.y }] }]}
        {...panHandlers}
      >
        <Text style={styles.title}>Comments</Text>
        <FlatList
          data={data[0].comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id.toString()}
        />
      </Animated.View>
      <Input style={{ transform: [{ translateY: pan.y }] }} />
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
