import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./Profile/ProfileScreen";
import SearchScreen from "./SearchScreen";

const Tab = createMaterialTopTabNavigator();

const Nav = (props) => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialLayout={{ width: Dimensions.get("window").width }}
      initialRouteName="Home"
      tabBar={() => null}
      screenOptions={{ swipeEnabled: !props.openComments }}
    >
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Nav;
