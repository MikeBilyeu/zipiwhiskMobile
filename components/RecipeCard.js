import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import { parseNum } from "./utils";

function RecipeCard({ Data }) {
  return (
    <TouchableOpacity onPress={null} activeOpacity={1} style={styles.container}>
      <ImageBackground source={Data.recipeImage} style={styles.image}>
        <View style={styles.recipeCardDarken}>
          <Text style={styles.title}>{Data.title}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{"Calories"}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.infoText}>{Data.numCalories}</Text>
              <Image
                source={require("../assets/calories.png")}
                style={styles.icon}
              />
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{"Likes"}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.infoText}>{parseNum(Data.numLikes)}</Text>
              <Image
                source={require("../assets/likes.png")}
                style={styles.icon}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{"Comments"}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.infoText}>{parseNum(Data.numComments)}</Text>
              <Image
                source={require("../assets/comments.png")}
                style={styles.icon}
              />
            </View>
          </View>

          <View style={styles.userInfoContainer}>
            <Image
              source={require("../assets/userImage.png")}
              style={styles.userIcon}
            />
            <Text style={styles.userInfoText}>{Data.user.username}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 475,
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
