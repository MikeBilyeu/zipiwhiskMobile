import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Pressable,
  View,
  Text,
} from "react-native";
import { Video } from "expo-av";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Ionicons from "@expo/vector-icons/Ionicons";

import { parseNum } from "./utils";

const screenWidth = Dimensions.get("screen").width;

const RecipeCardSmall = ({ item, handlePress }) => {
  return (
    <Pressable onPress={handlePress} style={styles.container}>
      {item.media_type === "video" ? (
        <Video
          source={{ uri: item.media_url }}
          style={styles.video}
          resizeMode="cover"
          isLooping
          shouldPlay
          isMuted
        />
      ) : (
        <ImageBackground
          source={{ uri: item.media_url }}
          style={styles.image}
        />
      )}

      <View style={styles.footerBtn}>
        <Ionicons
          name="heart"
          size={wp("4%")}
          color={item.saved ? "#FF2121" : "#FFF"}
          style={styles.footerBtnIcon}
        />
        <Text style={styles.footerBtnText}>{parseNum(item.numLikes)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("22%"),
    width: screenWidth / 3,
    borderWidth: 0,
    borderColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: hp("1%"),
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
  footerBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: wp("12%"),
    width: wp("12%"),
    backgroundColor: "rgba(0,0,0,.2)",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  footerBtnText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3%"),
  },
  footerBtnIcon: {
    width: wp("4%"),
    height: wp("4%"),
    marginBottom: 4,
  },
});

export default RecipeCardSmall;
