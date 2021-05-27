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

const RecipeCardSmall = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe", { data: data })}
      activeOpacity={1}
      style={styles.container}
    >
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

      <View style={styles.recipeCardDarken}>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
          {data.title}
        </Text>

        <View style={styles.line} />

        <View style={styles.infoContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.infoText}>{parseNum(data.numLikes)}</Text>
            <Ionicons
              name="heart"
              size={wp("3%")}
              color="#FFF"
              style={styles.icon}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.infoText}>{data.nutrition.calories}</Text>
            <Ionicons
              name="pie-chart"
              size={wp("3%")}
              color="#FFF"
              style={styles.icon}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.infoText}>{parseNum(data.numComments)}</Text>

            <Ionicons
              name="chatbubble-ellipses"
              size={wp("3%")}
              color="#FFF"
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("26%"),
    width: screenWidth / 2,
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
  recipeCardDarken: {
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: wp("4%"),
    justifyContent: "flex-end",
    alignContent: "center",
    paddingHorizontal: wp("2.5%"),
    paddingVertical: wp("3%"),
    flex: 1,
    margin: wp("1.5%"),

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    color: "white",
    fontSize: wp("5.5%"),
    fontFamily: "AvenirNextBold",
    textAlign: "left",
    lineHeight: wp("5.5%"),
    fontWeight: "bold",
    marginBottom: wp("3%"),
  },

  infoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: wp(".5%"),
  },
  infoText: {
    fontSize: wp("3.5%"),
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
  icon: {
    marginLeft: wp("1%"),
  },
  line: {
    borderBottomColor: "#FFF",
    opacity: 0.5,
    borderBottomWidth: 0.5,
    width: "100%",
    marginVertical: 3,
  },
});

export default RecipeCardSmall;
