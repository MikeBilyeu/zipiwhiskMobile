import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Footer from "./RecipeScreen/Footer";

const RecipeCard = ({ data }) => {
  return (
    <TouchableOpacity onPress={null} activeOpacity={1} style={styles.container}>
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
        />
      )}

      <Footer
        numLikes={data.numLikes}
        numComments={data.numComments}
        userImage={data.user.image}
        username={data.user.username}
        id={data.user.id}
        caption={data.caption}
        numViews={data.numViews}
        title={data.title}
      />
    </TouchableOpacity>
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
