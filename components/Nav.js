import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Auth from "./Auth";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#0172C4",
        inactiveTintColor: "#464646",
      }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Auth} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Nav;
