import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Home from "./Home";
import Groceries from "./Groceries";
import ActivityScreen from "./ActivityScreen";
import ProfileScreen from "./Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#101010",
        inactiveTintColor: "#464646",
        showLabel: false,
        labelPosition: "below-icon",
      }}
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Groceries") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "Bookmarks") {
            iconName = focused ? "bookmarks" : "bookmarks-outline";
          } else if (route.name === "Activity") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={wp("6%")}
              color={color}
              style={{ marginTop: wp("2%") }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Groceries" component={Groceries} />
      {/* <Tab.Screen name="Bookmarks" component={Bookmarks} /> */}

      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarBadge: null,
          tabBarBadgeStyle: {
            backgroundColor: "#0172C4",
            fontSize: 12,
            fontFamily: "AvenirNextDemiBold",
            paddingTop: 1.5,
          },
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Nav;
