import React from "react";
import { connect } from "react-redux";
import { Dimensions, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  selectCategory,
  selectIsLoadingSaves,
  selectIsLoadingLikes,
  selectIsLoadingPosts,
  selectSaves,
  selectLikes,
  selectPosts,
} from "../../redux/reducers/userReducer";

import RecipeScroll from "./RecipeScroll";

const Tab = createMaterialTopTabNavigator();

const ProfileTab = (props) => {
  return (
    <Tab.Navigator
      style={styles.wrapper}
      backBehavior="initialRoute"
      initialLayout={{ width: Dimensions.get("window").width }}
      initialRouteName="SavedRecipes"
      screenOptions={{
        tabBarLabelStyle: { fontSize: wp("2.3%") },
        tabBarItemStyle: { width: wp("33.333%") },
        tabBarActiveTintColor: "#464646",
        tabBarIndicatorStyle: { backgroundColor: "#00D088" },
      }}
    >
      <Tab.Screen
        name={`Saves (${props.saves.length})`}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "bookmarks" : "bookmarks-outline"}
              size={wp("5.5%")}
              color={focused ? "#000" : color}
            />
          ),
        }}
        children={(cProps) => (
          <RecipeScroll
            {...cProps}
            category={props.category}
            isLoading={props.isLoadingSaves}
            recipes={props.saves}
            screenTitle="Saved"
          />
        )}
      />
      <Tab.Screen
        name={`Likes (${props.likes.length})`}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "heart-circle" : "heart-circle-outline"}
              size={wp("6%")}
              color={focused ? "#000" : color}
            />
          ),
        }}
        children={(cProps) => (
          <RecipeScroll
            {...cProps}
            category={props.category}
            isLoading={props.isLoadingLikes}
            recipes={props.likes}
            screenTitle="Liked"
          />
        )}
      />
      <Tab.Screen
        name={`Posts (${props.posts.length})`}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "duplicate" : "duplicate-outline"}
              size={wp("6%")}
              color={focused ? "#000" : color}
            />
          ),
        }}
        children={(cProps) => (
          <RecipeScroll
            {...cProps}
            category={props.category}
            isLoading={props.isLoadingPosts}
            recipes={props.posts}
            screenTitle="Posted"
          />
        )}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: -1,
    flex: 1,
    position: "absolute",
    top: hp("22%"),
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const mapStateToProps = (state) => ({
  category: selectCategory(state),
  saves: selectSaves(state),
  likes: selectLikes(state),
  posts: selectPosts(state),
  isLoadingSaves: selectIsLoadingSaves(state),
  isLoadingLikes: selectIsLoadingLikes(state),
  isLoadingPosts: selectIsLoadingPosts(state),
});
export default connect(mapStateToProps)(ProfileTab);
