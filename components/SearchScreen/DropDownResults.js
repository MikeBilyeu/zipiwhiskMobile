import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ResultsBtn from "./ResultsBtn";
import CategorySwipe from "../Profile/Header/CategorySwipe";
import Users from "../FollowScreen/Users";
import RecipeCardSmall from "../RecipeCardSmall";
import data from "../../data";

const renderRecipes = ({ item }) => <RecipeCardSmall item={item} />;

const renderUsers = ({ item }) => (
  <Users
    username={item.username}
    image={item.image}
    Following={item.Following}
  />
);
const DropDownResults = (props) => {
  const [resultsDisplay, setResultsDisplay] = useState("Recipes");
  return (
    <View style={styles.container}>
      <ResultsBtn
        resultsDisplay={resultsDisplay}
        setResultsDisplay={setResultsDisplay}
      />
      {resultsDisplay == "Recipes" && <CategorySwipe />}
      <FlatList
        key={resultsDisplay}
        keyboardShouldPersistTaps={"always"}
        style={styles.listContainer}
        numColumns={resultsDisplay == "Recipes" ? 3 : 1}
        data={resultsDisplay === "Recipes" ? data : accounts}
        renderItem={resultsDisplay === "Recipes" ? renderRecipes : renderUsers}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  listContainer: {
    flex: 1,
    position: "absolute",
    top: 100,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default DropDownResults;

const accounts = [
  {
    id: 4980232190484,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    username: "billybob",
    following: false,
  },
  {
    id: 498042390484,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    username: "bill",
    following: false,
  },
];
