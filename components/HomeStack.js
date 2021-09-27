import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Nav from "./Nav";
import Home from "./Home";
import RecipeScreen from "./RecipeScreen";
import Comments from "./Comments";
import FollowScreen from "./FollowScreen";
import CreateRecipeScreen from "./CreateRecipeScreen/CreateRecipeScreen";
import CameraScreen from "./CameraScreen";
import VisitProfileScreen from "./Profile/VisitProfileScreen";
import ResultsScreen from "./ResultsScreen";
import SettingsScreen from "./SettingsScreen";

const screenWidth = Dimensions.get("screen").width;
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureResponseDistance: {
          horizontal: screenWidth,
        },
      }}
    >
      {/* <Stack.Screen name="Home" component={Nav} /> */}
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="VisitProfile" component={VisitProfileScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="Follows" component={FollowScreen} />
      <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
