import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Home from "./Home";
import Bookmarks from "./Bookmarks";
import Groceries from "./Groceries/Groceries";
import Activity from "./ActivityScreen/Activity";
import ProfileScreen from "./ProfileScreen/ProfileScreen";

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
            iconName = focused ? "cart" : "cart-outline";
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
              size={23}
              color={color}
              style={{ marginTop: 5 }}
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
        component={Activity}
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
