import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";

import Auth from "./components/Auth";
import Nav from "./components/Nav";
import RecipeScreen from "./components/RecipeScreen/RecipeScreen";
import CreateRecipe from "./components/CreateRecipe";

const Stack = createStackNavigator();
const userToken = true;

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
    <View style={styles.container}>
      <StatusBar barStyle="auto" />
      <NavigationContainer>
        {!userToken ? (
          <Auth />
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Nav} />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
            <Stack.Screen name="CreateRecipe" component={CreateRecipe} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
