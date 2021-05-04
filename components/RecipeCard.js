import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { parseNum } from "./utils";

const screenHeight = Dimensions.get("screen").height;

function RecipeCard({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Recipe", { data: data })}
      activeOpacity={1}
      style={styles.container}
    >
      <ImageBackground source={{ uri: data.recipeImage }} style={styles.image}>
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
                size={20}
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
                size={20}
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
                size={20}
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
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 245,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    padding: 7.5,
  },
  recipeCardDarken: {
    backgroundColor: "rgba(0,0,0,.15)",
    borderRadius: 25,
    justifyContent: "flex-end",
    alignContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 38,
    fontFamily: "AvenirNextBold",
    textAlign: "left",
    lineHeight: 38,
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  infoText: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
  icon: {
    marginLeft: 5,
  },
  line: {
    borderBottomColor: "#FFF",
    opacity: 0.5,
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 5,
  },
  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userIcon: {
    width: 30,
    height: 30,
    borderRadius: 100,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  userInfoText: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
});

export default RecipeCard;
