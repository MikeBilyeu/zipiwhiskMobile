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

function RecipeCard({ data }) {
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
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {data.title}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{"Calories"}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.infoText}>{data.nutrition.calories}</Text>
            <Ionicons
              name="fast-food"
              size={wp("4%")}
              color="#FFF"
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{"Saves"}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.infoText}>{parseNum(data.numLikes)}</Text>
            <Ionicons
              name="heart"
              size={wp("4%")}
              color="#FFF"
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{"Comments"}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.infoText}>{parseNum(data.numComments)}</Text>

            <Ionicons
              name="chatbubble-ellipses"
              size={wp("4%")}
              color="#FFF"
              style={styles.icon}
            />
          </View>
        </View>

        <View style={styles.userInfoContainer}>
          <Image source={{ uri: data.user.image }} style={styles.userIcon} />
          <Text style={styles.userInfoText}>{data.user.username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("40%"),
    justifyContent: "center",
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
    backgroundColor: "rgba(0,0,0,.15)",
    borderRadius: wp("4%"),
    justifyContent: "flex-end",
    alignContent: "center",
    paddingHorizontal: wp("2.5%"),
    paddingVertical: wp("3%"),
    flex: 1,
    margin: wp("1.5%"),
  },
  title: {
    color: "white",
    fontSize: wp("8%"),
    fontFamily: "AvenirNextBold",
    textAlign: "left",
    lineHeight: wp("8%"),
    fontWeight: "bold",
    marginBottom: wp("3%"),
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: wp("1%"),
  },
  infoText: {
    fontSize: wp("4%"),
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
    marginVertical: 5,
  },
  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userIcon: {
    width: wp("7%"),
    height: wp("7%"),
    borderRadius: 100,
    marginHorizontal: wp("2%"),
    alignItems: "center",
  },
  userInfoText: {
    fontSize: wp("4%"),
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
});

export default RecipeCard;
