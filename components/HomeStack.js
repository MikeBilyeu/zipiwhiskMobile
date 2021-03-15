import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Nav from "./Nav";
import RecipeScreen from "./RecipeScreen/RecipeScreen";
import Comments from "./Comments";
import FollowScreen from "./FollowScreen";
import CreateRecipeScreen from "./CreateRecipeScreen/CreateRecipeScreen";
import CameraScreen from "./CreateRecipeScreen/CameraScreen";
import VisitProfileScreen from "./Profile/VisitProfileScreen";
import ResultsScreen from "./ResultsScreen";

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
      <Stack.Screen name="Home" component={Nav} />
      <Stack.Screen name="VisitProfile" component={VisitProfileScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="Follows" component={FollowScreen} />
      <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
