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
import { useFonts } from "expo-font";

import Auth from "./components/Auth";
import Home from "./components/Home";
import RecipeScreen from "./components/RecipeScreen/RecipeScreen";

const Tab = createBottomTabNavigator();

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
  return <RecipeScreen />;
}

// export default function App() {
//   const [loaded] = useFonts({
//     AvenirNextRegular: require("./assets/fonts/AvenirNext-Regular.otf"),
//     AvenirNextItalic: require("./assets/fonts/AvenirNext-Italic.otf"),
//     AvenirNextDemiBold: require("./assets/fonts/AvenirNext-DemiBold.otf"),
//     AvenirNextBold: require("./assets/fonts/AvenirNext-Bold.otf"),
//   });

//   if (!loaded) {
//     return null;
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="auto" />
//       <NavigationContainer>
//         <Tab.Navigator
//           tabBarOptions={{
//             activeTintColor: "#0172C4",
//             inactiveTintColor: "#464646",
//           }}
//           initialRouteName="Home"
//         >
//           <Tab.Screen name="Home" component={Home} />
//           <Tab.Screen name="Profile" component={Auth} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
