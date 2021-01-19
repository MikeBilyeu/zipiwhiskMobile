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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Auth from "./components/Auth";
import RecipeCard from "./components/RecipeCard";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="auto" />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#0172C4",
            inactiveTintColor: "#464646",
          }}
        >
          <Tab.Screen name="Home" component={RecipeCard} />
          <Tab.Screen name="Profile" component={Auth} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
