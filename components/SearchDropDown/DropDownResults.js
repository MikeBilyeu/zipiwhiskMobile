import React, { useState } from "react";
import { StyleSheet, FlatList, Animated } from "react-native";
import ResultsBtn from "./ResultsBtn";
import Users from "../FollowScreen/Users";
import RecipeSmallView from "../RecipeSmallView";
import data from "../../data";

const renderRecipes = ({ item }) => <RecipeSmallView item={item} />;

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
    <Animated.View style={styles.container}>
      <ResultsBtn
        resultsDisplay={resultsDisplay}
        setResultsDisplay={setResultsDisplay}
      />
      <FlatList
        keyboardShouldPersistTaps={"always"}
        style={styles.listContainer}
        data={resultsDisplay === "Recipes" ? data : accounts}
        renderItem={resultsDisplay === "Recipes" ? renderRecipes : renderUsers}
        keyExtractor={(item) => item.id.toString()}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingTop: 20,
    width: "100%",
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
