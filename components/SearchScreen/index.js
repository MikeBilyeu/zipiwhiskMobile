import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import FocusAwareStatusBar from "../FocusAwareStatusBar";
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
      title={item.title}
      media_url={item.media_url}
      media_type={item.media_type}
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
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <FocusAwareStatusBar style="dark" />
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
