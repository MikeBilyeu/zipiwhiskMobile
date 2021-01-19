import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

function RecipeCard() {
  const Data = {
    title: "Peanut Butter Banana Smoothie",
    user: { image: "../assets/userImage.png", username: "zipiwhisk" },
    recipeImage: "../assets/recipeImage.jpg",
    numLikes: 1500,
    numComments: 35,
    numCalories: 275,
  };

  const parseNum = (num) => {
    return num > 1000000
      ? parseFloat((num / 1000000).toFixed(1)) + "m"
      : num > 1000
      ? parseFloat((num / 1000).toFixed(1)) + "k"
      : num > 0
      ? num
      : "";
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/recipeImage.jpg")}
        style={styles.image}
      >
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: 10,
  },
  recipeCardDarken: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.2)",
    borderRadius: 25,
    justifyContent: "flex-end",
    alignContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  title: {
    color: "white",
    fontSize: 40,
    textAlign: "left",
    lineHeight: 40,
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
    fontWeight: "600",
  },
});

export default RecipeCard;
