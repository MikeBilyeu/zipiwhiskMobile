import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Pressable,
  Text,
} from "react-native";
import { Video } from "expo-av";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RecipeCardSmall = ({
  media_url,
  media_type,
  title,
  handlePress,
  index,
}) => (
  <Pressable
    onPress={handlePress}
    style={[
      styles.container,
      (index + 1) % 3 !== 0 && {
        borderRightWidth: 1,
      },
    ]}
  >
    {media_type === "video" ? (
      <Video
        source={{ uri: media_url }}
        style={styles.thumbnail}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted
      />
    ) : (
      <ImageBackground source={{ uri: media_url }} style={styles.thumbnail} />
    )}

    <Text style={styles.footerText}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    height: hp("23%"),
    width: wp("100%") / 3,
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderColor: "rgb(242,242,242)",
  },
  thumbnail: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    width: "100%",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "AvenirNextBold",
    fontSize: wp("4%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    paddingHorizontal: wp("1%"),
    paddingVertical: hp("2%"),
  },
});

export default RecipeCardSmall;
