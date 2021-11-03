import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./HomeScreen";
import ProfileScreen from "./Profile/ProfileScreen";
import SearchScreen from "./SearchScreen";

const Tab = createMaterialTopTabNavigator();

const Nav = () => {
  return (
    <Tab.Navigator initialRouteName="Home" tabBar={() => null}>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Nav;
