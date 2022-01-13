import React, { useState, useRef } from "react";
import { StyleSheet, ImageBackground, Pressable } from "react-native";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "./Footer";

const RecipeCard = ({
  data,
  handleSinglePress,
  openComments,
  setOpenComments,
  toggleRecipe,
}) => {
  const [saved, setSaved] = useState(data.saved);
  const [lastTap, setLastTap] = useState(0);
  const [singlePressTimer, setSinglePressTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const video = useRef(null);

  const DOUBLE_PRESS_DELAY = 250;

  const cancelSinglePressTimer = () => {
    if (singlePressTimer) {
      clearTimeout(singlePressTimer);
      setSinglePressTimer(0);
    }
  };

  const handleTap = () => {
    cancelSinglePressTimer();

    const timeNow = Date.now();

    if (lastTap && timeNow - lastTap < DOUBLE_PRESS_DELAY) {
      //DOUBLE PRESS
      setSaved(true);
    } else {
      setLastTap(timeNow);

      const timeout = setTimeout(() => {
        setLastTap(0);
        //SINGLE PRESS
        if (data.media_type === "video") {
          isPlaying ? video.current.pauseAsync() : video.current.playAsync();
          setIsPlaying(!isPlaying);
        }
      }, DOUBLE_PRESS_DELAY);

      setSinglePressTimer(timeout);
    }
  };

  return (
    <Pressable
      onPress={() => handleTap()}
      onLongPress={() => !openComments && handleSinglePress()}
      delayLongPress={250}
      style={styles.container}
    >
      {data.media_type === "video" ? (
        <Video
          ref={video}
          source={{ uri: data.media_url }}
          style={styles.video}
          resizeMode="cover"
          isLooping
          shouldPlay
          isMuted={false}
        />
      ) : (
        <ImageBackground
          source={{ uri: data.media_url }}
          style={styles.image}
        />
      )}
      {!isPlaying && (
        <Ionicons
          name="pause-circle-outline"
          size={wp("25%")}
          color="#FFF"
          style={styles.pauseIcon}
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
          handleCommentPress={setOpenComments}
          setOpenComments={setOpenComments}
          handleSinglePress={handleSinglePress}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  pauseIcon: {
    position: "absolute",
    opacity: 0.5,
    top: "40%",
    left: "37.5%",
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
