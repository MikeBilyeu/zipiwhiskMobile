import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, ImageBackground, Pressable } from "react-native";
import { connect } from "react-redux";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { likeRecipe, unlikeRecipe } from "../../redux/actions/recipe";
import Footer from "./Footer";

const RecipeCard = ({
  data,
  handleSinglePress,
  openComments,
  setOpenComments,
  toggleRecipe,
  likeRecipe,
  unlikeRecipe,
}) => {
  const [liked, setLiked] = useState(data.liked == 0 ? false : true);
  const [numLikes, setNumLikes] = useState(data.numLikes);
  const [lastTap, setLastTap] = useState(0);
  const [singlePressTimer, setSinglePressTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const video = useRef(null);

  useEffect(() => {
    setLiked(data.liked);
    setNumLikes(data.numLikes);
  }, [data.liked, data.numLikes]);

  const DOUBLE_PRESS_DELAY = 200;

  const handleLikeRecipe = () => {
    setLiked(true);
    if (!data.liked) {
      setNumLikes(numLikes + 1);
      likeRecipe(data.id);
    }
  };
  const handleUnlikeRecipe = () => {
    setLiked(false);
    setNumLikes(numLikes - 1);
    unlikeRecipe(data.id);
  };

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
      handleLikeRecipe();
    } else {
      setLastTap(timeNow);

      const timeout = setTimeout(() => {
        setLastTap(0);
        //SINGLE PRESS
        !openComments && handleSinglePress();
      }, DOUBLE_PRESS_DELAY);

      setSinglePressTimer(timeout);
    }
  };

  return (
    <Pressable
      onPress={() => handleTap()}
      onLongPress={() => {
        if (data.media_type === "video") {
          isPlaying ? video.current.pauseAsync() : video.current.playAsync();
          setIsPlaying(!isPlaying);
        }
      }}
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
          numLikes={numLikes}
          handleLikeRecipe={handleLikeRecipe}
          handleUnlikeRecipe={handleUnlikeRecipe}
          numComments={data.numComments}
          userImage={data.user_image_url}
          username={data.username}
          id={data.created_by}
          caption={data.caption}
          numViews={data.numViews}
          title={data.title}
          liked={liked}
          handleCommentPress={setOpenComments}
          setOpenComments={setOpenComments}
          handleSinglePress={handleSinglePress}
          created_at={data.created_at}
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

export default connect(null, { likeRecipe, unlikeRecipe })(RecipeCard);
