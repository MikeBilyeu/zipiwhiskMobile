import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";

import Auth from "./components/Auth";
import Home from "./components/Home";
import RecipeScreen from "./components/RecipeScreen/RecipeScreen";

const Stack = createStackNavigator();

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
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
