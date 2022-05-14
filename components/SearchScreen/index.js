import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, FlatList, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import FocusAwareStatusBar from "../FocusAwareStatusBar";
import Header from "../Header";
import SearchBar from "./SearchBar";
import CategorySwipe from "../Profile/Header/CategorySwipe";
import Users from "../ActivityScreen/Users";
import RecipeCardSmall from "../RecipeCardSmall";
import data from "../../data";
import {
  selectcategoryFilter,
  selectRecipes,
} from "../../redux/reducers/searchReducer";
import { getSearchRecipes, categoryChange } from "../../redux/actions/search";

const renderUsers = ({ item }) => (
  <Users
    username={item.username}
    image={item.image}
    isFollowing={item.Following}
  />
);
const SearchScreen = (props) => {
  const navigation = useNavigation();
  const [resultsDisplay, setResultsDisplay] = useState("Recipes");

  useEffect(() => {
    props.getSearchRecipes();
  }, []);

  const renderRecipes = ({ index, item }) => (
    <RecipeCardSmall
      index={index}
      title={item.title}
      media_url={item.media_url}
      media_type={item.media_type}
      handlePress={() =>
        navigation.push("SearchRecipeScreen", {
          index,
        })
      }
    />
  );

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <FocusAwareStatusBar style="dark" />
      <View style={{ backgroundColor: "#fff" }}>
        <SearchBar />

        {resultsDisplay == "Recipes" && (
          <CategorySwipe
            category={props.category}
            categoryChange={props.categoryChange}
          />
        )}
      </View>
      <FlatList
        key={resultsDisplay}
        keyboardShouldPersistTaps={"always"}
        style={styles.listContainer}
        contentContainerStyle={{ paddingTop: hp("17%") }}
        numColumns={resultsDisplay == "Recipes" ? 3 : 1}
        data={resultsDisplay === "Recipes" ? props.recipes : accounts}
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
    top: hp("6%"),
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
});

const mapStateToProps = (state) => ({
  recipes: selectRecipes(state),
  category: selectcategoryFilter(state),
});

export default connect(mapStateToProps, { getSearchRecipes, categoryChange })(
  SearchScreen
);

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
