import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { parseNum } from "./utils";
import Footer from "./RecipeScreen/Footer";

const RecipeCard = ({ data }) => {
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
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {data.title}
      </Text>

      <Footer
        title={data.title}
        numLikes={data.numLikes}
        numComments={data.numComments}
        userImage={data.user.image}
        username={data.user.username}
        id={data.user.id}
        caption={data.caption}
        numViews={data.numViews}
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
  recipeCardDarken: {
    backgroundColor: "rgba(0,0,0,.1)",
    justifyContent: "flex-end",
    paddingHorizontal: wp("2.5%"),
    paddingVertical: hp("5%"),
    height: hp("30%"),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderWidth: 2,
  },
  title: {
    color: "white",
    fontSize: wp("6%"),
    fontFamily: "AvenirNextBold",
    textAlign: "center",
    lineHeight: wp("7%"),
    fontWeight: "bold",
    marginBottom: wp("3%"),
    marginTop: hp("5%"),
    paddingHorizontal: wp("20%"),
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: wp("1%"),
  },
  infoText: {
    fontSize: wp("3.5%"),
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
  icon: {
    marginLeft: wp("1%"),
  },

  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: wp("3%"),
    borderWidth: 2,
  },
  userIcon: {
    width: wp("9%"),
    height: wp("9%"),
    borderRadius: 100,
    marginRight: wp("2%"),
    alignItems: "center",
  },
  infoText: {
    fontSize: wp("3.5%"),
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
});

export default RecipeCard;
