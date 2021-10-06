import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { parseNum } from "./utils";

const screenWidth = Dimensions.get("screen").width;

const RecipeCardSmall = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Recipe", { data: item })}
      activeOpacity={1}
      style={styles.container}
    >
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

      {/* <View>
        <Text style={styles.infoText}>{parseNum(item.numLikes)}</Text>
        <Ionicons
          name="heart"
          size={wp("3%")}
          color="#FFF"
          style={styles.icon}
        />
      </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("24%"),
    width: screenWidth / 3,
    borderWidth: 0.5,
    borderColor: "#fff",
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
  icon: {
    marginLeft: wp("1%"),
  },
});

export default RecipeCardSmall;
