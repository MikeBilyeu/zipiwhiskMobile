import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Bookmarks from "./Bookmarks";
import Groceries from "./Groceries";
import Activity from "./Activity";
import Profile from "./Profile";

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
      <Tab.Screen name="Groceries" component={Groceries} />
      <Tab.Screen name="Bookmarks" component={Bookmarks} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Nav;
