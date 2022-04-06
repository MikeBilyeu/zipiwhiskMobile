import React from "react";
import { Dimensions } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { selectOpenComments } from "../redux/reducers/recipeReducer";

import Nav from "./Nav";

import SettingsScreen from "./SettingsScreen";
import CreateRecipeScreen from "./CreateRecipeScreen";
import CameraScreen from "./CameraScreen";
import ActivityScreen from "./ActivityScreen";

import RecipeScreen from "./RecipeScreen";
import FollowScreen from "./FollowScreen";

import VisitProfileScreen from "./Profile/VisitProfileScreen";

const screenWidth = Dimensions.get("screen").width;
const Stack = createStackNavigator();

const HomeStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: !props.openComments,
        headerShown: false,
        gestureResponseDistance: {
          horizontal: screenWidth,
        },
      }}
    >
      <Stack.Screen name="Home" component={Nav} />
      <Stack.Screen name="Activity" component={ActivityScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="VisitProfile" component={VisitProfileScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Follows" component={FollowScreen} />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => ({
  openComments: selectOpenComments(state),
});
export default connect(mapStateToProps)(HomeStack);
