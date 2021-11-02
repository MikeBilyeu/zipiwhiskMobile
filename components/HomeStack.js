import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./HomeScreen";
import ProfileScreen from "./Profile/ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import CreateRecipeScreen from "./CreateRecipeScreen/CreateRecipeScreen";
import CameraScreen from "./CameraScreen";
import ActivityScreen from "./ActivityScreen";

import RecipeScreen from "./RecipeScreen";
import FollowScreen from "./FollowScreen";

import VisitProfileScreen from "./Profile/VisitProfileScreen";
import ResultsScreen from "./ResultsScreen";
import SearchScreen from "./SearchScreen";

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Activity" component={ActivityScreen} />
      <Stack.Screen
        name="Search"
        options={{
          animationEnabled: false,
        }}
        component={SearchScreen}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />

      <Stack.Screen name="VisitProfile" component={VisitProfileScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="Follows" component={FollowScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
