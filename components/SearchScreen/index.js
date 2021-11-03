import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import Header from "../Header";
import SearchBar from "./SearchBar";
import CategorySwipe from "../Profile/Header/CategorySwipe";
import Users from "../FollowScreen/Users";
import RecipeCardSmall from "../RecipeCardSmall";
import data from "../../data";

const renderUsers = ({ item }) => (
  <Users
    username={item.username}
    image={item.image}
    Following={item.Following}
  />
);
const SearchScreen = ({}) => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [resultsDisplay, setResultsDisplay] = useState("Recipes");

  const renderRecipes = ({ index, item }) => (
    <RecipeCardSmall
      item={item}
      handlePress={() =>
        navigation.push("Recipe", {
          index,
          title: search || "Search",
          subTitle: search ? "Search" : null,
        })
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header>
        <SearchBar
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          search={search}
          setSearch={setSearch}
        />

        {resultsDisplay == "Recipes" && <CategorySwipe />}
      </Header>
      <FlatList
        key={resultsDisplay}
        keyboardShouldPersistTaps={"always"}
        style={styles.listContainer}
        contentContainerStyle={{ paddingTop: hp("14.5%") }}
        numColumns={resultsDisplay == "Recipes" ? 3 : 1}
        data={resultsDisplay === "Recipes" ? data : accounts}
        renderItem={resultsDisplay === "Recipes" ? renderRecipes : renderUsers}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    flex: 1,
    position: "absolute",
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default SearchScreen;

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
