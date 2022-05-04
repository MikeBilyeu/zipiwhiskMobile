import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Nav from "./Nav";

import SettingsScreen from "./SettingsScreen";
import CreateRecipeScreen from "./CreateRecipeScreen";
import CameraScreen from "./CameraScreen";
import ActivityScreen from "./ActivityScreen";

import SavedRecipeScreen from "./RecipeScreen/SavedRecipeScreen";
import PostedRecipeScreen from "./RecipeScreen/PostedRecipeScreen";

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
      <Stack.Screen name="SavedRecipeScreen" component={SavedRecipeScreen} />
      <Stack.Screen name="PostedRecipeScreen" component={PostedRecipeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
