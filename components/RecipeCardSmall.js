import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

import { parseNum } from "./utils";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

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
          <Text style={styles.title}>{data.title}</Text>

          <View style={styles.infoContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.infoText}>{parseNum(data.numLikes)}</Text>
              <Image
                source={require("../assets/likes.png")}
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
    height: 250,
    width: screenWidth / 2,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    padding: 5,
  },
  recipeCardDarken: {
    backgroundColor: "rgba(0,0,0,.15)",
    borderRadius: 15,
    justifyContent: "flex-end",
    alignContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontFamily: "AvenirNextBold",
    textAlign: "center",
    lineHeight: 28,
    fontWeight: "bold",
  },

  infoContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
  icon: {
    marginLeft: 5,
    height: 18,
    width: 18,
    resizeMode: "stretch",
    alignItems: "center",
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
