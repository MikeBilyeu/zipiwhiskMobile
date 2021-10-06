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
import { useNavigation } from "@react-navigation/native";

import Footer from "./RecipeScreen/Footer";

const RecipeCard = ({ data }) => {
  const navigation = useNavigation();
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
      />
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {data.title}
      </Text>
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
  title: {
    color: "white",
    fontSize: wp("7%"),
    fontFamily: "AvenirNextBold",
    textAlign: "center",
    lineHeight: wp("8%"),
    fontWeight: "bold",
    position: "absolute",
    width: "100%",
    bottom: hp("13%"),
    paddingHorizontal: wp("15%"),
  },
  infoText: {
    fontSize: wp("3.5%"),
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
});

export default RecipeCard;
