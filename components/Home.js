import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import RecipeCard from "./RecipeCard";

const Data = [
  {
    id: "49802390484",
    title: "Peanut Butter Banana Smoothie",
    user: { image: "../assets/userImage.png", username: "zipiwhisk" },
    recipeImage: {
      uri:
        "https://res.cloudinary.com/mikebilyeuimg/image/upload/c_scale,h_1500,q_auto:good/v1603140916/Recipes/lp4ypoiaoqkvvzkp7qk5.jpg",
    },
    numLikes: 1500,
    numComments: 35,
    numCalories: 275,
  },
  {
    id: "2384983484800",
    title: "Cranberry Sauce",
    user: { image: "../assets/userImage.png", username: "zipiwhisk" },
    recipeImage: {
      uri:
        "https://res.cloudinary.com/mikebilyeuimg/image/upload/c_scale,h_1500,q_auto:good/v1603140674/Recipes/atlhfcivnnrdwprukcfd.jpg",
    },
    numLikes: 2000,
    numComments: 45,
    numCalories: 150,
  },
  {
    id: "2384340084800",
    title: "Black Bean Veggie Burgers",
    user: { image: "../assets/userImage.png", username: "zipiwhisk" },
    recipeImage: {
      uri:
        "https://res.cloudinary.com/mikebilyeuimg/image/upload/c_scale,h_1500,q_auto:good/v1593983807/Recipes/s0odyvjiko4yuisb8iwm.jpg",
    },
    numLikes: 2800,
    numComments: 74,
    numCalories: 150,
  },
];

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
      <TouchableOpacity
        onPress={null}
        activeOpacity={0.8}
        style={styles.searchBtn}
      >
        <Image
          source={require("../assets/search.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.searchBtnText}>{"Search"}</Text>
        <Image
          source={require("../assets/arrow.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
}
function Home() {
  const renderItem = ({ item }) => <RecipeCard Data={item} />;

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.list}
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerContainer: {
    paddingTop: 2,
    height: 65,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBtn: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBtnText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
  },
  list: {
    flex: 1,
  },
});

export default Home;
