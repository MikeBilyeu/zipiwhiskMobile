import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, PanResponder } from "react-native";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Footer from "./RecipeScreen/Footer";

const RecipeCard = ({ data, handleSinglePress, toggleRecipe }) => {
  const [saved, setSaved] = useState(false);

  const [isTerminated, setTerminated] = useState(false);
  const [touchStartTime, setTouchStartTime] = useState(0);
  const [lastTap, setLastTap] = useState(0);

  const [longPressTimer, setLongPressTimer] = useState(0);
  const [singlePressTimer, setSinglePressTimer] = useState(0);

  const DOUBLE_PRESS_DELAY = 200;
  const LONG_PRESS_DELAY = 700;

  const cancelLongPressTimer = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(0);
    }
  };

  const cancelSinglePressTimer = () => {
    if (singlePressTimer) {
      clearTimeout(singlePressTimer);
      setSinglePressTimer(0);
    }
  };

  const handleTap = (event, gestureState) => {
    cancelSinglePressTimer();

    const timeNow = Date.now();
    if (lastTap && timeNow - lastTap < DOUBLE_PRESS_DELAY) {
      console.log("Handle double press");
      setSaved(true);
    } else {
      setLastTap(timeNow);

      const timeout = setTimeout(() => {
        setLastTap(0);
        console.log("Handle single press");
        handleSinglePress();
      }, DOUBLE_PRESS_DELAY);

      setSinglePressTimer(timeout);
    }
  };

  const handlePressOut = (event, gestureState) => {
    const elapsedTime = Date.now() - touchStartTime;
    if (elapsedTime > LONG_PRESS_DELAY) {
      console.log("Handle long press");
    } else {
      handleTap(event, gestureState); // handles the single or double click
    }
    setTouchStartTime(0);
  };

  const responder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,

    onPanResponderStart: () => {
      cancelLongPressTimer();

      const timeout = setTimeout(() => {
        if (!isTerminated) {
          setTouchStartTime(Date.now());
        }
      });

      setLongPressTimer(timeout);
    },

    onPanResponderRelease: (event, gestureState) => {
      handlePressOut(event, gestureState);
    },

    onPanResponderTerminate: () => {
      setTerminated(true);
    },
  });
  return (
    <View style={styles.container} {...responder.panHandlers}>
      {data.media_type === "video" ? (
        <Video
          source={{ uri: data.media_url }}
          style={styles.video}
          resizeMode="cover"
          isLooping
          shouldPlay
          isMuted
        />
      ) : (
        <ImageBackground
          source={{ uri: data.media_url }}
          style={styles.image}
          blurRadius={toggleRecipe ? 3 : 0}
        />
      )}

      {!toggleRecipe && (
        <Footer
          numLikes={data.numLikes}
          numComments={data.numComments}
          userImage={data.user.image}
          username={data.user.username}
          id={data.user.id}
          caption={data.caption}
          numViews={data.numViews}
          title={data.title}
          saved={saved}
          setSaved={setSaved}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    padding: wp("2%"),
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  infoText: {
    fontSize: wp("3.5%"),
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
});

export default RecipeCard;
