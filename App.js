import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

import Auth from "./components/Auth";
import Nav from "./components/Nav";
import RecipeScreen from "./components/RecipeScreen/RecipeScreen";
import Comments from "./components/Comments";
import CreateRecipeScreen from "./components/CreateRecipeScreen/CreateRecipeScreen";

const Stack = createStackNavigator();
const userToken = true;
const screenWidth = Dimensions.get("screen").width;

export default function App() {
  const [loaded] = useFonts({
    AvenirNextRegular: require("./assets/fonts/AvenirNext-Regular.otf"),
    AvenirNextItalic: require("./assets/fonts/AvenirNext-Italic.otf"),
    AvenirNextDemiBold: require("./assets/fonts/AvenirNext-DemiBold.otf"),
    AvenirNextBold: require("./assets/fonts/AvenirNext-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="auto" />
      <NavigationContainer>
        {!userToken ? (
          <Auth />
        ) : (
          <Stack.Navigator
            screenOptions={{
              gestureResponseDistance: {
                horizontal: screenWidth,
              },
            }}
          >
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={Nav}
            />
            <Stack.Screen
              name="Recipe"
              options={{ headerShown: false }}
              component={RecipeScreen}
            />
            <Stack.Screen name="Comments" component={Comments} />
            <Stack.Screen
              name="CreateRecipe"
              options={{ headerShown: false }}
              component={CreateRecipeScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
